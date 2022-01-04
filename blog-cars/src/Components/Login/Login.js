import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import style from './Login.module.css';
import { login } from '../../services/data';
import validate from '../common/validations/validate';
import Notification from '../common/Notification/Notification';

function Login({
    authorization
}) {
    const [errorM, setErrorM] = useState(null);

    const navigation = useNavigate();

    async function loginUser(e) {
        e.preventDefault();
        const target = e.target;
        const username = target.username.value.trim();
        const password = target.password.value.trim();
        const data = {
            username,
            password
        };

        try {
            validate('login', data);
            await login(data);
            authorization();
            navigation('/');
        } catch (error) {
         
            setErrorM(error.message);
        }

    };

    setTimeout(() => {
        setErrorM(null);
    }, 8000);

    return (
        <form className={style.form_login} onSubmit={loginUser}>
            <div className={style.container}>
                <h1>Login</h1>
                {errorM && <Notification message={errorM} />}
                <hr />

                <label htmlFor="username"><b>User Name</b></label>
                <input type="text" placeholder="Enter User Name" name="username" id="username" />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" />


                <button type="submit" className={style.loginbtn}>Login</button>


                <p>Don't have an account? <Link to="/register">Create Account</Link></p>

            </div>

        </form>
    );
}

export default Login;