import Image from 'next/image';

import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={styles['profile-wrap']}>
            <div className={styles['content-wrap']}>
                <div className={styles['title']}>about me</div>
                <div className={styles['details']}>
                    <div className={styles['flip-card']}>
                        <div className={styles['flip-card-inner']}>
                            <div className={styles['front']}>
                                <Image src="/rcn-icon.svg" width={300} height={300} alt="Profile" className={styles.image}/>
                            </div>
                            <div className={styles['back']}>
                                <Image src="/images/profile.jpg" width={300} height={300} alt="Profile" className={styles.image}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles['paragraph']}>
                        <p>
                        I'm bachelor of Computer Science. I've experience with Javascript using ReactJS framework. I'm a person that has a desite to learn more in order to achieve either me or teams goals
                        </p>
                        <a href="https://cutt.ly/8nprhml" target="_blank" className={styles['anchor']}>
                            RESUME
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
