import Image from 'next/image';

import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <section className={styles['profile-wrap']}>
            <div className={styles['profile-card']}>
                <div className={styles['section-one']}>
                    <div className={styles['body-section-one']}>
                        <Image src="/images/profile.jpg" width={156} height={156} alt="Profile" className={styles.image}/>
                        <h1>Riko Chair Nugroho</h1>
                        <hr/>
                        <p>FRONTEND DEVELOPER</p>
                        <a href="https://drive.google.com/file/d/14qSTwlalm5MJv_lCJ27YrcuMCMx84vKo/view?usp=sharing" target="_blank">RESUME</a>
                    </div>
                    <div className={styles['footer-section-one']}>
                        <a href="https://linkedin.com/in/rikocacola" target="_blank">
                            <Image src="/images/logo/linkedin.svg" width={24} height={24}/>
                        </a>
                        <a href="https://github.com/rikocacola" target="_blank">
                            <Image src="/images/logo/github.svg" width={24} height={24} />
                        </a>
                    </div>
                </div>
                <div className={styles['section-two']}>
                    <h1 style={{fontSize: "50px"}}>Hello 👋</h1>
                    <p>
                        my name is <strong className="secondary-color">Riko Chair Nugroho</strong>, I'm bachelor of Computer Science. I've  experience with Javascript using ReactJS framework. I always want to learn new things to achieve goals. I am capable of working well in a team and on my own.
                    </p>
                </div>
            </div>        
        </section>
        // <section className={styles.profileWrap}>
        //     <div className={styles.profile}>
        //         <div className={styles.image}>
        //             <Image src="/images/profile.jpg" width={156} height={156} alt="Profile" className={styles['border-circle']} />
        //         </div>
        //         <h1 className={`${styles.name}`}>
        //             <span className="secondary-color">Riko</span> Chair Nugroho
        //         </h1>
        //         <h1 className={`${styles.headline}`}>
        //             Front-end Developer
        //         </h1>
        //         <p className={`${styles.intoduction}`}>
        //             <strong className="secondary-color">Hello 👋,</strong>  my name is <strong className="secondary-color">Riko Chair Nugroho</strong>, I'm bachelor of Computer Science. I've  experience with Javascript using ReactJS framework. I always want to learn new things to achieve goals. I am capable of working well in a team and on my own.
        //         </p>
        //         <a href="https://drive.google.com/file/d/14qSTwlalm5MJv_lCJ27YrcuMCMx84vKo/view?usp=sharing" className="button" target="_blank">VIEW RESUME</a>
        //     </div>
        // </section>
    )
}

export default Profile;
