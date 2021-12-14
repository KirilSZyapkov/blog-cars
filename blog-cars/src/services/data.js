import * as api from './api';

const host = 'https://parseapi.back4app.com';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllBlogs(){
    return await api.get(host + '/classes/Blog');
}