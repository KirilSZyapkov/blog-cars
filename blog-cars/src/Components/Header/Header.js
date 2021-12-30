import { Link } from 'react-router-dom';

import style from './Header.module.css';

function Header({
    user
}) {

    const userName = sessionStorage.getItem('userName');
    const userId = sessionStorage.getItem('userId');
    async function search(e) {
        const t = e.target;
        console.log(t.value);
    }
    return (
        <div className={style.topnav}>
            <img className={style.nav_logo} src='/static/nav_logo.jpg' alt='logo' />
            <input type="text" placeholder="Search.." onChange={(e) => search(e)} />
            {user ?
                <Link to={`/profile/${userId}`}>Welcome {user}</Link>
                :
                <Link to='/login'>Login</Link>
            }
        </div>
    );
}

export default Header;