import { useState, useEffect } from 'react';
import ProfileForm from './ProfileItems/ProfileForm';
import ProfileItem from './ProfileItems/ProfileItem';

function Profile() {

    const [isProfile, setIsProfile] = useState(true);

    async function saveProfile(e) {
        e.preventDefault();
        
        setIsProfile(!isProfile);
    };


    return (
        <div>
            {isProfile ? <ProfileItem setIsProfile={setIsProfile} isProfile={isProfile}  /> : <ProfileForm setIsProfile={setIsProfile} isProfile={isProfile} saveProfile={saveProfile} />}

        </div>

    );
}

export default Profile;