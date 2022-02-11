import style from './UserItem.module.css';

function UserItem({
    user
}) {

    const myInfo = user?.userInfo;

    return (
        <div className={style.userItem_container}>
            <div className={style.userItem_row}>
                <div className={style.userItem_header}>
                    <div className={style.userItem_picture_container}>
                        <img className={style.userItem_picture} src={myInfo?.profPic || 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'} alt="logo" />
                    </div>
                </div>
                <div className={style.userItem_heading}>
                    <h4>{user.username}</h4>

                </div>

                <div className={style.userItem_main}>

                    <div className={style.userItem_div}>
                        <label className={style.user_label}>Name</label>
                        <p>{myInfo?.name}</p>
                    </div>

                    <div className={style.userItem_div}>
                        <label className={style.user_label}>Surname</label>
                        <p>{myInfo?.surname}</p>
                    </div>

                    <div className={style.userItem_div}>
                        <label className={style.user_label}>Mobile Number</label>
                        <p>{myInfo?.phone}</p>
                    </div>
                    <div className={style.userItem_div}>
                        <label className={style.user_label}>Email addres</label>
                        <p>{myInfo?.email}</p>
                    </div>
                    <div className={style.userItem_div}>
                        <label className={style.user_label}>Facebook</label>
                        <p>{myInfo?.facebook}</p>
                    </div>
                    <div className={style.userItem_div}>
                        <label className={style.user_label}>Instagram</label>
                        <p>{myInfo?.instagram }</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default UserItem;