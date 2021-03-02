import React from 'react';
import PlantNav from './navs/PlantNav';
import ChangePassword from './updateProfileComponents/ChangePassword';
import ChangePhoneNumber from './updateProfileComponents/ChangePhoneNumber';

const UpdateProfile = () => {
    return (
        <div>
            <PlantNav />
            <ChangePassword />
            <ChangePhoneNumber />
        </div>
    )
}

export default UpdateProfile;
