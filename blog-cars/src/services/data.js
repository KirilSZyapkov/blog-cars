import * as api from './api';
import * as userAPI from './userApi';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllBlogs() {
    
    return await api.get('/classes/Blog');
}

export async function getBlogById(id) {
    return await api.get('/classes/Blog/' + id + '?include=admin');
}

export async function createBlog(data) {
    const userId = sessionStorage.getItem('userId');
    
    const body = Object.assign({}, data, {
        admin: {
            __type: 'Pointer',
            'className': '_User',
            objectId: userId
        }
    });
    return await api.post('/classes/Blog', body);
}

export async function updateBlog(blogId, body){

    return await api.put('/classes/Blog/'+ blogId, body);

}

export async function getUserOwnBlogs() {
    const userId = sessionStorage.getItem('userId');
    const q = JSON.stringify({
        admin: {
            __type: 'Pointer',
           'className': '_User',
            objectId: userId
        }
    })
    return await api.get('/classes/Blog?where=' + encodeURIComponent(q));
}

export async function joinTheBlog(userId, blogId){
    const blog = await getBlogById(blogId);
    const user = await userAPI.getUserById(userId);

    const membershipList = blog.pendingForMembership;
    const owner = blog.admin;
    
    const found = membershipList.some(m=> m[user.username] === userId);
    const isAdmin = user.objectId === owner.objectId;

    if(isAdmin){
        throw new Error('You are the Admin, you can`t join your own group!');
    }
    
    if(found){
        throw new Error('You are already a member!');
    }

    
    const id = user.objectId;

    membershipList.push({[user.username]: id });
   
    await updateBlog(blogId, {"pendingForMembership": membershipList});
    await userAPI.updateUser(id, {"status": 'pending'});
}

export async function declineRequest(curUserId, userId, blogId){
    const blog = await getBlogById(blogId);
    const user = await userAPI.getUserById(userId);

    const owner = blog.admin;
    const isAdmin = curUserId === owner.objectId;

    if(!isAdmin){
        throw new Error('You are not authorised for this action!');
    }

    const membershipList = blog.pendingForMembership;

    const index = membershipList.findIndex(m => m[user.username] === userId);
    membershipList.splice(index, 1);
    
    const id = user.objectId;
    
    // await userAPI.updateUser(id, {"status": 'free'});
    await updateBlog(blogId, {"pendingForMembership": membershipList});

}