import { useState, useEffect } from 'react';
import ProfileForm from './ProfileItems/ProfileForm';
import ProfileItem from './ProfileItems/ProfileItem';
import { getUser, updateUser } from '../../services/userApi';

function Profile() {

    const [isProfile, setIsProfile] = useState(true);
    const [user, setUser] = useState({});

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



        setIsProfile(!isProfile);
    };


    return (
        <div>
            {isProfile ?
                <ProfileItem user={user} setIsProfile={setIsProfile} isProfile={isProfile} /> :
                <ProfileForm user={user} setIsProfile={setIsProfile} isProfile={isProfile} setIsProfile={setIsProfile} isProfile={isProfile} saveProfile={saveProfile} />}

        </div>

    );
}

export default Profile;