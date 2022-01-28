import { Link } from 'react-router-dom';

import style from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <header className={style.header}>
                <Link to="/"><i className="fa fa-fw fa-home"></i> Home</Link>
                <Link to="/create"><i className="fas fa-plus-circle"></i> Creat new blog</Link>
                <Link to="/my-blogs"><i className="fas fa-layer-group"></i> My Blogs</Link>
                <Link to="/"><i className="fas fa-users"></i> Groups</Link>
            </header>
            <footer className={style.sidebar_footer}>
                <div className={style.sidebar_footer_content}>
                <Link to="/contact-us">Contact Us</Link>
                <p>All rights reserved</p>

                </div>
            </footer>
        </div>
    );
}

export default Sidebar;