import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './GroupItem.module.css';
import Notification from '../../common/Notification/Notification';
import { leaveTheBlog } from '../../../services/data';

function GroupItem({
    blog,
    logo,
    admin,
    refreshPage
}) {

    const [errorM, setErrorM] = useState(null);

    const id = sessionStorage.getItem('userId');

    async function leaveGroup(blogId) {

        try {
            await leaveTheBlog(id, blogId);
            alert('you left');
            refreshPage();
        } catch (err) {
            setErrorM(err.message);
        }
    }

    setTimeout(() => {
        setErrorM(null);
    }, 8000);

    return (
        <div className={style.column}>
            {errorM && <Notification message={errorM} />}
            <div className={style.card}>
                <img className={style.card_img} src={logo} alt={blog[0]} />
                <div className={style.container}>
                    <h2>{blog[0]}</h2>

                    <p>Admin: <Link to={`/user/${admin[1]}`} className={style.action} className={style.invert}>{admin[0]}</Link></p>

                    <Link to={`/blog/${blog[1]}`}><p><button className={style.button}> Check Forum </button></p></Link>
                    <button onClick={() => leaveGroup(blog[1])} className={style.button}> Leave team </button>
                </div>
            </div>
        </div>
    );
}

export default GroupItem;