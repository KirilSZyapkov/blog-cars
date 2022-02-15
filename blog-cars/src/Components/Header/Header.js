import { Link, useNavigate } from 'react-router-dom';

import style from './Header.module.css';
import { logout } from '../../services/data';

function Header({
    user,
    logOut,
    search
}) {

    const navigation = useNavigate();


    const id = sessionStorage.getItem('userId');
    return (
        <div className={style.topnav}>
            <img className={style.nav_logo} src='/static/nav_logo.jpg' alt='logo' />
            <input type="text" placeholder="Search by Name..." onChange={e => search(e)} />
            {user ?
                <div>
                    <Link to={`/profile/${id}`}>Welcome {user}</Link>

                    <button onClick={() => { logout(); logOut(); navigation('/') }} className={style.logout_btn}>Logout</button>
                </div>
                :
                <Link to='/login'>Login</Link>
            }
        </div>
    );
}

export default Header;