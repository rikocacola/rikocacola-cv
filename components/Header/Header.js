import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import {PREFIX_IMAGE} from '../../utils/constant'

import { useState } from 'react'

const Navbar = () => {
    // const profileScroll = () => props.profileRef.current.scrollIntoView();
    const [showNavbar, setShowNavbar] = useState(false);
    const router = useRouter();
    const path = router.asPath
    console.log('router', path)
    return (
        <>
            <header className={styles['header']}>
                <div className={styles['navbar-wrap']}>
                    <Link href="#">
                        <a className={styles['navbar-logo']}>
                            <div className={styles['logo']}>
                                <Image src='/rcn-icon.svg' width={40} height={40} />
                            </div>
                            <div className={styles['name-logo']}>
                                <strong>Riko</strong>ChairNugroho
                            </div>
                        </a>
                    </Link>
                    <button onClick={() => setShowNavbar(!showNavbar)} className={styles['toggle-menu']}>
                        <Image src='/images/icon/icon-menu.svg' width={26} height={32} />
                    </button>
                    <div className={`${styles['navbar-links']} ${showNavbar ? styles['show'] : ''}`} >
                        <ul>
                            <li className={`${styles.list} ${path.includes("profile") ? styles.active : ""}`}>
                                <Link href="#profile"><a>about me</a></Link>
                                <span>.</span>
                            </li>
                            <li className={`${styles.list} ${path.includes("skills") ? styles.active : ""}`}>
                                <Link href="#skills"><a>skills</a></Link>
                                <span>.</span>
                            </li>
                            <li className={`${styles.list} ${path.includes("projects") ? styles.active : ""}`}>
                                <Link href="#projects"><a>projects</a></Link>
                                <span>.</span>
                            </li>
                            <li className={`${styles.list} ${path.includes("experiences") ? styles.active : ""}`}>
                                <Link href="#experiences"><a>experiences</a></Link>
                                <span>.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar