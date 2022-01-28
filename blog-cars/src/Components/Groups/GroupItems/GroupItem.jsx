import { Link } from 'react-router-dom';
import style from './GroupItem.module.css';

function GroupItem({
    blog,
    img,
    admin
}) {
    return (
        <div className={style.column}>
            <div className={style.card}>
                <img className={style.card_img} src={img} alt={blog[0]} />
                <div className={style.container}>
                    <h2>{blog[0]}</h2>

                    {/* <p>{description}</p> */}

                    <Link to={`/blog/${blog[1]}`}><p><button className={style.button}> Check Forum </button></p></Link>
                </div>
            </div>
        </div>
    );
}

export default GroupItem;