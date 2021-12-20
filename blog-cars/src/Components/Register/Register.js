
import { Link } from 'react-router-dom';
import style from './Register.module.css';
import { register } from '../../services/data';

function Register() {

    async function createAccount(e) {
        e.preventDefault();
        const target = e.target;

        const username = target.username.value.trim();
        const email = target.email.value.trim();
        const password = target.password.value.trim();
        const rePass = target.rePass.value.trim();



        
    }

    return (
        <form className={style.form_register} onSubmit={createAccount}>
            <div className={style.container_register}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>

                <hr />

                <label htmlFor="username"><b>User Name</b></label>
                <input type="text" placeholder="Enter username" name="username" id="username" required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" required />

                <label for="rePass"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="rePass" id="rePass" required />
                <hr />
                <p>By creating an account you agree to our Terms & Privacy.</p>


                <button type="submit" className={style.registerbtn}>Register</button>

                <div className={style.container_register}>
                    <p>Already have an account? <Link to="/login">Sign in</Link></p>
                </div>
            </div>

        </form>
    );
}

export default Register;