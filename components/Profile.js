import Image from 'next/image';

import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <div className="profile">
            <Image src="profile.png" width={156} height={156} alt="Profile" />
        </div>
    )
}

export default Profile;
