import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import style from './Header.module.css';
import { logout } from '../../services/data';

function Header({
    user,
    logOut,
    search
}) {

    const [toggle, setToggle] = useState(false);
    const navigation = useNavigate();
    

    const id = sessionStorage.getItem('userId');
    return (
        <>
            <div className={style.topnav}>
                <button className={style.topnav_toggle_menu} onClick={() => setToggle(!toggle)}><i className="fa fa-bars"></i></button>
                <img className={style.nav_logo} src='/static/nav_logo.jpg' alt='logo' />
                <input type="text" placeholder="Search by Name..." onChange={e => search(e)} />
                {user ?
                    <>
                        <div className={style.topnav_user}>
                            <Link to={`/profile/${id}`}>Welcome {user}</Link>

                            <button onClick={() => { logout(); logOut(); navigation('/') }} className={style.logout_btn}>Logout</button>
                        </div>
                        <div className={style.topnav_user_icon}>
                            <Link to={`/profile/${id}`}>{user}</Link>

                            <button onClick={() => { logout(); logOut(); navigation('/') }} className={style.logout_btn}>Logout</button>
                        </div>
                    </>
                    :
                    <div className={style.topnav_user_login}>
                        <Link to='/login'>Login</Link>
                    </div>
                }
            </div>
            {toggle && <header className={style.header_mobile}>
            
                <Link to="/"><i className="fa fa-fw fa-home"></i> Home</Link>
                <Link to="/create"><i className="fas fa-plus-circle"></i> Creat new blog</Link>
                <Link to="/my-blogs"><i className="fas fa-layer-group"></i> My Blogs</Link>
                <Link to="/groups"><i className="fas fa-users"></i> Groups</Link>
            </header>}
        </>
    );
}

export default Header;