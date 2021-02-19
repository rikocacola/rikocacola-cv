import styles from './Contact.module.scss'

import Image from 'next/image'

const Contact = () => {
    return (
        <footer className={styles.contactWrap}>
            <div className={styles.contact}>
                <h1 className="Heading2Xl">Contact</h1>
                <p>Email : riko.chair@gmail.com</p>
                <p>Phone number : +62 878 7518 55666</p>
                <div>
                    <a href="https://linkedin.com/in/rikocacola" target="_blank" style={{ paddingRight: "30px" }}>
                        <Image src="/icon/icon-linkedin.png" width={44} height={44} />
                    </a>
                    <a href="https://github.com/rikocacola" target="_blank">
                        <Image src="/icon/icon-github.png" width={44} height={44} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Contact