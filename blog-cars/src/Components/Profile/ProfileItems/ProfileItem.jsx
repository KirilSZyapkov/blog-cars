import style from './ProfileItem.module.css';

function ProfileItem({
    isProfile,
    setIsProfile,
    user
}) {

    const myInfo = user?.userInfo;

    return (
        <div className={style.profileItem_container}>
            <div className={style.profileItem_row}>
                <div className={style.profileItem_header}>
                    <div className={style.profileItem_picture_container}>
                        <img className={style.profileItem_picture} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="logo" />
                    </div>
                </div>
                <div className={style.profilItem_heading}>
                    <h4>My Profile</h4>

                </div>

                <div className={style.profilItem_main}>

                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Name</label>
                        <p>{myInfo?.name || 'Enter your name'}</p>
                    </div>

                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Surname</label>
                        <p>{myInfo?.surname || 'Enter your surname'}</p>
                    </div>

                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Mobile Number</label>
                        <p>{myInfo?.phone || 'Enter your phone number'}</p>
                    </div>
                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Email addres</label>
                        <p>{myInfo?.email || 'Enter your email'}</p>
                    </div>
                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Facebook</label>
                        <p>{myInfo?.facebook || 'Enter you Facebook'}</p>
                    </div>
                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Instagram</label>
                        <p>{myInfo?.instagram || 'Enter you Instagram'}</p>
                    </div>
                    
                </div>
                <div className={style.profileItem_container_btn}>
                    <button onClick={() => setIsProfile(!isProfile)} className={style.profileItem_btn}>Edit Profile</button>
                </div>


            </div>
        </div>
    );
}

export default ProfileItem;