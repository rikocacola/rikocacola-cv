import styles from './Footer.module.scss'

import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles['footer-wrap']}>
            <div className={styles['source']}>
                <p><a href="https://github.com/rikocacola/rikocacola-cv" target='_blank'>©2022 by Riko Chair Nugroho.</a></p>
            </div>
            <div className={styles['contact']}>
                <div className={styles.phone}>
                    <p><strong>Phone</strong></p>
                    <p>+62878-7518-5566</p>
                </div>
                <div className={styles.email}>
                    <p><strong>Email</strong></p>
                    <p><a href = "mailto: riko.chair@gmail.com">riko.chair@gmail.com</a></p>
                </div>
                <div className={styles['social-media']}>
                    <p><strong>Follow</strong></p>
                    <a href="https://linkedin.com/in/rikocacola" target="_blank" style={{ paddingRight: "30px" }}>
                        <img src="/images/logo/linkedin-light-green.svg"/>
                    </a>
                    <a href="https://github.com/rikocacola" target="_blank">
                        <img src="/images/logo/github-light-green.svg"/>
                    </a>
                </div>
            </div>
        </footer>
        // <footer className={styles.contactWrap}>
        //     <div className={styles.contact}>
        //         <h1 className="Heading2Xl">Contact</h1>
        //         <p>Email : riko.chair@gmail.com</p>
        //         <p>Phone number : +62 878 7518 55666</p>
        //         <div>
        //             <a href="https://linkedin.com/in/rikocacola" target="_blank" style={{ paddingRight: "30px" }}>
        //                 <Image src="/images/logo/linkedin.svg" width={44} height={44} style={{color: 'white'}}/>
        //             </a>
        //             <a href="https://github.com/rikocacola" target="_blank">
        //                 <Image src="/images/logo/icon-github.png" width={44} height={44} />
        //             </a>
        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer