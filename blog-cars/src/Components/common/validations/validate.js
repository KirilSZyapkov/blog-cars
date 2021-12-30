function validate(action, data) {
    if (action === 'register') {

        const username = data.username;
        const email = data.email;
        const password = data.password;

        if (username === '' || email === '' || password === '') {
            throw new Error('All fields are required!');
        }
        if (username.length < 5) {
            throw new Error('User name must be min 5 charecters!');
        }
        if (password.length < 5) {
            throw new Error('Password must be min 5 symbols');
        }
    }
}

export default validate;