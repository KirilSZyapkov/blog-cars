import { useState, useEffect } from 'react';

import style from './Profile.module.css';

function Profile() {

    async function saveProfile(e) {
        e.preventDefault();
        alert('hi');
    };


    return (
        <div className={style.profile_container}>
            <div className={style.profile_row}>
                <div className={style.profile_header}>
                    <div className={style.profile_picture_container}>
                        <img className={style.profile_picture} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                    </div>
                </div>
                <div className={style.profile_form_container}>
                    <div className={style.profil_main}>

                        <h4>Profile Settings</h4>
                        <form onSubmit={saveProfile}>

                            <div className="col-md-6">
                                <label className="labels">Name</label>
                                <input name='name' type="text" className="form-control" placeholder="first name" defaultValue="" />
                            </div>

                            <div className="col-md-6">
                                <label className="labels">Surname</label>
                                <input name='surname' type="text" className="form-control" defaultValue="" placeholder="surname" />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Mobile Number</label>
                                <input name='phone' type="text" className="form-control" placeholder="enter phone number" defaultValue="" />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Email addres</label>
                                <input name='email' type="text" className="form-control" placeholder="enter email addres" defaultValue="" />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Facebook</label>
                                <input name='facebook' type="text" className="form-control" placeholder="enter facebook" defaultValue="" />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Instagram</label>
                                <input name='instagram' type="text" className="form-control" placeholder="enter instagram" defaultValue="" />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Twitter</label>
                                <input name='twitter' type="text" className="form-control" placeholder="enter twitter" defaultValue="" />
                            </div>
                            
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Profile;