import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './Register.module.css';
import { register } from '../../services/data';
import validate from '../common/validations/validate';
import Notification from '../common/Notification/Notification';

function Register({
    authorization,
}) {
    const [errorM, setErrorM] = useState(null);
    const navigation = useNavigate();
    const user = sessionStorage.getItem('userName');


    if (user) {
        navigation('/');

    }

    async function createAccount(e) {
        e.preventDefault();
        const target = e.target;

        const username = target.username.value.trim();
        const email = target.email.value.trim();
        const password = target.password.value.trim();
        const rePass = target.rePass.value.trim();

        const data = {
            username,
            email,
            password
        }
        try {

            validate('register', data);

            if (rePass === '') {
                throw new Error('All fields are required!');
            }
            if (password !== rePass) {
                throw new Error('Passwords don`t match!');
            }

            await register(data);
            authorization();
            navigation('/');

        } catch (err) {
            setErrorM(err.message);
            // alert(err.message);
        }



    }

    setTimeout(() => {
        setErrorM(null);
    }, 8000);

    return (
        <form className={style.form_register} onSubmit={createAccount}>
            <div className={style.container_register}>
                {errorM ? <Notification message={errorM} /> : ''}
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>

                <hr />

                <label htmlFor="username"><b>User Name</b></label>
                <input type="text" placeholder="Enter username" name="username" id="username" />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" />

                <label htmlFor="rePass"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="rePass" id="rePass" />
                <hr />
                <p>By creating an account you agree to our Terms & Privacy.</p>


                <button type="submit" className={style.registerbtn}>Register</button>


                <p>Already have an account? <Link to="/login">Sign in</Link></p>

            </div>

        </form>
    );
}

export default Register;