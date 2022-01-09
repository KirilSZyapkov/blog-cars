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
    console.log(blog);
    console.log(user);
}