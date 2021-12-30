import { Link } from 'react-router-dom';

import style from './Login.module.css';
import { login } from '../../services/data';

function Login({
    authorization
}) {


    async function loginUser(e) {
        e.preventDefault();
        authorization();
    }

    return (
        <form className={style.form_login} onSubmit={loginUser}>
            <div className={style.container}>
                <h1>Login</h1>

                <hr />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" required />


                <button type="submit" className={style.loginbtn}>Login</button>


                <p>Don't have an account? <Link to="/register">Create Account</Link></p>

            </div>

        </form>
    );
}

export default Login;