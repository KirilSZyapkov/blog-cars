import errors from "./errors";

const host = 'https://parseapi.back4app.com/users';

async function request(url, options) {
    try {

        const respons = await fetch(url, options);

        if (respons.ok === false) {
            const error = await respons.json();

            throw new Error(errors(error));

        }

        try {
            const data = await respons.json();
            return data;
        } catch (err) {
            return respons;
        }

    } catch (err) {

        throw err;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': '4btCojemdBVN3W4T8v3c2vBsQSI27yLEYyfhZZhN',
            'X-Parse-REST-API-Key': 'Kx73W5X7iozsQnBIhMDsKdfIdGJaW6Cz7P66uzEe'
        }
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Parse-Session-Token'] = token;
    };

    if (body) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(body);
    };

    return options;
}

export async function getUser() {
    const user = await request(host + '/me', getOptions());
    return user;
}

export async function getUserById(id){
    const user = await request(host+`/${id}`, getOptions());
    return user;
}