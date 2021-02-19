import Image from 'next/image';

import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <section className={styles.profileWrap}>
            <div className={styles.profile}>
                <div className={styles.image}>
                    <Image src="/profile.png" width={156} height={156} alt="Profile" className={styles.borderCircle} />
                </div>
                <h1 className={`${styles.name} Heading2Xl`}>
                    <span className="secondary-color">Riko</span> Chair Nugroho
                </h1>
                <h1 className={`${styles.headline} HeadingXl`}>
                    Front-end Developer
            </h1>
                <p className={`${styles.intoduction} HeadingMd`}>
                    <strong className="secondary-color">Hello,</strong>  my name is <strong className="secondary-color">Riko Chair Nugroho</strong>, I'm bachelor of Computer Science. I've  experience with Javascript using ReactJS framework. I always want to learn new things to achieve goals. I am capable of working well in a team and on my own.
            </p>
                <a href="https://drive.google.com/file/d/1bzdjm39grag9YoKx6l7O2Kl9sDyBUDp4/view?usp=sharing" className="button" target="_blank">VIEW RESUME</a>
            </div>
        </section>
    )
}

export default Profile;
