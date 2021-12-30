
const host = 'https://parseapi.back4app.com';

async function request(url, options) {
    try {

        const respons = await fetch(url, options);

        if (respons.ok === false) {
            const error = await respons.json();

            throw new Error(error.message);
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

export async function get(url) {
    return await request(host + url, getOptions());
};

export async function put(url, data) {
    return await request(host + url, getOptions('put', data));
};

export async function post(url, data) {
    return await request(host + url, getOptions('post', data));
};

export async function del(url) {
    return await request(host + url, getOptions('delete'));
};

export async function login(data) {
    const result = await post('/login', data);

    sessionStorage.setItem('authToken', result.sessionToken);
    sessionStorage.setItem('userName', data.username);
    sessionStorage.setItem('userId', result.objectId);

    return result;
}

export async function register(data) {
    const result = await post('/users', data);

    sessionStorage.setItem('authToken', result.sessionToken);
    sessionStorage.setItem('userName', data.username);
    sessionStorage.setItem('userId', result.objectId);

    return result;
}

export async function logout() {
    const result = await post('/users');

    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userId');

    return result;
}