function validate(action, data) {
    const username = data.username;
    const email = data.email;
    const password = data.password;

    if (action === 'register') {

        if (username === '' || email === '' || password === '') {
            throw new Error({ error: 'All fields are required!' });
        }
        if (username.length < 5) {
            throw new Error('User name must be min 5 charecters!');
        }
        if (password.length < 5) {
            throw new Error('Password must be min 5 symbols');
        }
    } else if (action === 'login') {
        
        if (username === '' || password === '') {
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