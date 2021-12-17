import { Link } from 'react-router-dom';

import style from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <Link to="/"><i className="fa fa-fw fa-home"></i> Home</Link>
            <Link to="/"><i className="fas fa-layer-group"></i> My Blogs</Link>
            <Link to="/"><i className="fas fa-users"></i> Groups</Link>
            <Link to="/"><i className="fa fa-fw fa-envelope"></i> Contact</Link>
        </div>  );
}

export default Sidebar;

