import style from './ProfileForm.module.css';

function ProfileForm({
    saveProfile,
    setIsProfile,
    isProfile,
    user
}) {

    const myInfo = user?.userInfo;

    return (
        <div className={style.profile_container}>
            <div className={style.profile_row}>
                
                <div className={style.profile_form_container}>
                    <div className={style.profil_main}>

                        <h4>Profile Settings</h4>
                        <form onSubmit={saveProfile}>

                            <div className="col-md-6">
                                <label className="labels">Name</label>
                                <input name='name' type="text" className={style.form_input} placeholder="enter name" defaultValue={myInfo?.name} />
                            </div>

                            <div className="col-md-6">
                                <label className="labels">Surname</label>
                                <input name='surname' type="text" className={style.form_input} defaultValue={myInfo?.surname} placeholder="enter surname" />
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Profile picture</label>
                                <input name='profilePicture' type="text" className={style.form_input} defaultValue={myInfo?.profPic} placeholder="add profile picture link" />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Mobile Number</label>
                                <input name='phone' type="text" className={style.form_input} placeholder="enter phone number" defaultValue={myInfo?.phone} />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Email addres</label>
                                <input name='email' type="text" className={style.form_input} placeholder="enter email addres" defaultValue={myInfo?.email} />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Facebook</label>
                                <input name='facebook' type="text" className={style.form_input} placeholder="enter facebook" defaultValue={myInfo?.facebook} />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Instagram</label>
                                <input name='instagram' type="text" className={style.form_input} placeholder="enter instagram" defaultValue={myInfo?.instagram} />
                            </div>
                            

                            <div className={style.profileForm_container_btn}>
                                <button className={style.profileForm_btn} type="submit">Save Profile</button>
                                <button onClick={() => setIsProfile(!isProfile)} className={style.profileForm_btn} type="button">Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileForm;