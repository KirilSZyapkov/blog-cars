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

                    <p><button className={style.button}> <Link to={`/blog/${objectId}`}>See Details</Link></button></p>
                </div>
            </div>
        </div>
    );
}

export default Item;

// admin: {__type: 'Pointer', className: '_User', objectId: 'EHULlTa4nj'}
// blogName: "Star Wars"
// conversations: []
// createdAt: "2022-01-05T20:30:55.164Z"
// description: "Star Wars fans!"
// imgUrl: "https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400"
// members: []
// objectId: "tYKVXGbrp6"
// pendingForMembership: []
// updatedAt: "2022-01-05T20:30:55.164Z"