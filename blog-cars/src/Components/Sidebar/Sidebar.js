import { Link } from 'react-router-dom';

import style from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <header className={style.header}>
                <Link to="/"><i className="fa fa-fw fa-home"></i> Home</Link>
                <Link to="/create"><i className="fas fa-plus-circle"></i> Creat new blog</Link>
                <Link to="/my-blogs"><i className="fas fa-layer-group"></i> My Blogs</Link>
                <Link to="/groups"><i className="fas fa-users"></i> Groups</Link>
            </header>
            <footer className={style.sidebar_footer}>

                <div className={style.sidebar_footer_content}>
                    <h2 className={style.sidebar_footer_content_h2}>Follow us on</h2> 
                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank">Facebook</a>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank" >Instagram</a>
                    <a href="https://www.twitter.com" rel="noreferrer" target="_blank" >Twitter</a>
                                        
                    <p>All rights reserved created by Kiril</p>

                </div>
            </footer>
        </div>
    );
}

export default Sidebar;