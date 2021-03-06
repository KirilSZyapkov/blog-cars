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

export async function updateBlog(blogId, body) {

    return await api.put('/classes/Blog/' + blogId, body);

}

export async function getUserOwnBlogs(userId) {
    
    const q = JSON.stringify({
        admin: {
            __type: 'Pointer',
            'className': '_User',
            objectId: userId
        }
    })
    return await api.get('/classes/Blog?where=' + encodeURIComponent(q));
}

export async function joinTheBlog(userId, blogId) {
    const blog = await getBlogById(blogId);
    const user = await userAPI.getUserById(userId);

    const membershipList = blog.pendingForMembership;
    const owner = blog.admin;

    const found = membershipList.some(m => m[user.username] === userId);
    const isAdmin = user.objectId === owner.objectId;

    if (isAdmin) {
        throw new Error('You are the Admin, you can`t join your own group!');
    }

    if (found) {
        throw new Error('You are already send a request!');
    }


    const id = user.objectId;

    membershipList.push({ [user.username]: id });

    await updateBlog(blogId, { "pendingForMembership": membershipList });
    await userAPI.updateUser(id, { "status": 'pending' });
}

export async function declineRequest(curUserId, userId, blogId) {
    const blog = await getBlogById(blogId);
    const user = await userAPI.getUserById(userId);

    const owner = blog.admin;
    const isAdmin = curUserId === owner.objectId;

    if (!isAdmin) {
        throw new Error('You are not authorised for this action!');
    }

    const membershipList = blog.pendingForMembership;

    const index = membershipList.findIndex(m => m[user.username] === userId);
    membershipList.splice(index, 1);

    const id = user.objectId;

    await updateBlog(blogId, { "pendingForMembership": membershipList });
    await userAPI.updateUser(id, { "status": 'free' });

}

export async function approveRequest(curUserId, userId, blogId) {
    const blog = await getBlogById(blogId);
    const user = await userAPI.getUserById(userId);

    const owner = blog.admin;
    const isAdmin = curUserId === owner.objectId;

    if (!isAdmin) {
        throw new Error('You are not authorised for this action!');
    }
    const membersList = blog.members;
    const found = membersList.some(m => m[user.username] === userId);

    if (found) {
        throw new Error('You are already member of the group!');
    }

    const membershipList = blog.pendingForMembership;


    const index = membershipList.findIndex(m => m[user.username] === userId);
    const member = membershipList.splice(index, 1);
    const m = member[0];

    const newMember = blog.members;
    newMember.push(m);

    const b = {
        "blog": [blog.blogName, blog.objectId],
        "logo": blog.imgUrl,
        "admin": [owner.username, owner.objectId]
    }

    const newBlog = user.blogList;
    newBlog.push(b);

    await updateBlog(blogId, { "pendingForMembership": membershipList });
    await updateBlog(blogId, { "members": newMember });
    await userAPI.updateUser(userId, { "blogList": newBlog });
    await userAPI.updateUser(userId, { "status": 'member' });

}

export async function removeMember(curUserId, memberId, curBlogId) {
    const blog = await getBlogById(curBlogId);
    const user = await userAPI.getUserById(memberId);

    const owner = blog.admin;
    const isAdmin = curUserId === owner.objectId;

    if (!isAdmin) {
        throw new Error('You are not authorised for this action!');
    }

    const memberList = blog.members;
    const blogList = user.blogList;

    const memberIndex = memberList.findIndex(m => m[user.username] === memberId);
    const blognIndex = blogList.findIndex(b => b.blog[1] === curBlogId);

    memberList.splice(memberIndex, 1);
    blogList.splice(blognIndex, 1);

    await updateBlog(curBlogId, { "members": memberList });
    await userAPI.updateUser(memberId, { "blogList": blogList });
    await userAPI.updateUser(memberId, { "status": 'free' });

}

export async function cancelRequest(userId, blogId) {

    const blog = await getBlogById(blogId);
    const user = await userAPI.getUserById(userId);
    const owner = blog.admin;
    const isAdmin = userId === owner.objectId;

    if (isAdmin) {
        throw new Error('You are the Admin, you can`t cancel!');
    }

    const membershipList = blog.pendingForMembership;

    const memberIndex = membershipList.findIndex(m => m[user.username] === userId);
    membershipList.splice(memberIndex, 1);

    await updateBlog(blogId, { "pendingForMembership": membershipList });

}

export async function creatNewBlogPost(blogId, userName, message, timeAndDay) {

    const blog = await getBlogById(blogId);

    const conversations = blog.conversations;
    conversations.push({ 
        [userName]: message,
        'time': timeAndDay
     });

    await updateBlog(blogId, { "conversations": conversations });

}

export async function leaveTheBlog(userId, blogId){
    const blog = await getBlogById(blogId);
    const user = await userAPI.getUserById(userId);

    const memberList = blog.members;
    const blogList = user.blogList;

    const memberIndex = memberList.findIndex(m => m[user.username] === userId);
    const blognIndex = blogList.findIndex(b => b.blog[1] === blogId);

    memberList.splice(memberIndex, 1);
    blogList.splice(blognIndex, 1);

    await updateBlog(blogId, { "members": memberList });
    await userAPI.updateUser(userId, { "blogList": blogList });
}