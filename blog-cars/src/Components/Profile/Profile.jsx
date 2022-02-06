import { useState, useEffect } from 'react';
import ProfileForm from './ProfileItems/ProfileForm';
import ProfileItem from './ProfileItems/ProfileItem';
import { getUser, updateUser } from '../../services/userApi';
import Notification from '../common/Notification/Notification';

function Profile() {

    const [isProfile, setIsProfile] = useState(true);
    const [user, setUser] = useState({});
    const [errorM, setErrorM] = useState(null);

    useEffect(() => {
        async function fetch() {
            const respons = await getUser();
            setUser(respons);

        }
        fetch();

    }, [isProfile])


    async function saveProfile(e) {
        e.preventDefault();
        const target = e.target;

        const info = {
            name: target.name.value,
            surname: target.surname.value,
            profPic: target.profilePicture.value,
            phone: target.phone.value,
            email: target.email.value,
            facebook: target.facebook.value,
            instagram: target.instagram.value
        }

        try {
            await updateUser(user.objectId, { 'userInfo': info });
            setIsProfile(!isProfile);
        } catch (err) {
            console.log(err.message);
            setErrorM(err.message);
        }

    };

    setTimeout(() => {
        setErrorM(null);
    }, 8000);

    return (
        <div>

            {errorM && Notification(errorM)}
            {isProfile ?
                <ProfileItem user={user} setIsProfile={setIsProfile} isProfile={isProfile} /> :
                <ProfileForm user={user} setIsProfile={setIsProfile} isProfile={isProfile} setIsProfile={setIsProfile} isProfile={isProfile} saveProfile={saveProfile} />}

        </div>

    );
}

export default Profile;