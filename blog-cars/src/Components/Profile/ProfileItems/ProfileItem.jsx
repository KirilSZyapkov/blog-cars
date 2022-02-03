import style from './ProfileItem.module.css';

function ProfileItem({
    isProfile,
    setIsProfile
}) {
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
                        <p>My Name</p>
                    </div>

                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Surname</label>
                        <p>My surname</p>
                    </div>

                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Mobile Number</label>
                        <p>My phone</p>
                    </div>
                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Email addres</label>
                        <p>My Email</p>
                    </div>
                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Facebook</label>
                        <p>My facebook</p>
                    </div>
                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Instagram</label>
                        <p>Instagram</p>
                    </div>
                    <div className={style.profileItem_div}>
                        <label className={style.profile_label}>Twitter</label>
                        <p>Twiter</p>
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