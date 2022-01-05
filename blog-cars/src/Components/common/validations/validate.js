function validate(action, data) {
    const username = data.username;
    const email = data.email;
    const password = data.password;
    const blogName = data.blogName;
    const imgUrl = data.imgUrl;
    const description = data.description;

    if (action === 'register') {

        if (username === '' || email === '' || password === '') {
            throw new Error('All fields are required!');
        };
        if (username.length < 5) {
            throw new Error('User name must be min 5 charecters!');
        };
        if (password.length < 5) {
            throw new Error('Password must be min 5 symbols');
        };
    } else if (action === 'login') {

        if (username === '' || password === '') {
            throw new Error('All fields are required!');
        };
        if (username.length < 5) {
            throw new Error('User name must be min 5 charecters!');
        };
        if (password.length < 5) {
            throw new Error('Password must be min 5 symbols');
        };
    } else if (action === 'create') {

        if (blogName === '' || imgUrl === '' || description === '') {
            throw new Error('All fields are required!');
        };
        if (blogName.length < 5){
            throw new Error('The name must be min 5 charecters!');
        };
        if (description.length > 51){
            throw new Error('The description can be max 50 charecters!');
        };
    }
}

export default validate;