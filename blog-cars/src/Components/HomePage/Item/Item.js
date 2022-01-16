import { Link } from 'react-router-dom';

import style from "./Item.module.css";

function Item({
    objectId,
    blogName,
    description,
    imgUrl,
    members
}) {
    return (
        <div className={style.column}>
            <div className={style.card}>
                <img className={style.card_img} src={imgUrl} alt={blogName} />
                <div className={style.container}>
                    <h2>{blogName}</h2>
                    <p className={style.title}>Members {members.length}</p>
                    <p>{description}</p>

                    <Link to={`/blog/${objectId}`}><p><button className={style.button}> See Details</button></p></Link>
                </div>
            </div>
        </div>
    );
}

export default Item;