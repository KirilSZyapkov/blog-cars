import { Link } from 'react-router-dom';

import style from './Header.module.css';

function Header({
    isАuthorized,
    userId
}) {

    async function search(e) {
        const t = e.target;
        console.log(t.value);
    }
    return (
        <div className={style.topnav}>
            <img className={style.nav_logo} src='/static/nav_logo.jpg' alt='logo' />
            <input type="text" placeholder="Search.." onChange={(e) => search(e)} />
            {isАuthorized ?
                <Link to={`/profile/${userId}`}>Welcome Pesho</Link>
                :
                <Link to='/login'>Login</Link>
            }
        </div>
    );
}

export default Header;