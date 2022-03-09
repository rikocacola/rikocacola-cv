import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
// import {PREFIX_IMAGE} from '../../utils/constant'

import {useState} from 'react'

const Navbar = () => {
    // const profileScroll = () => props.profileRef.current.scrollIntoView();
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <header className={styles['header']}>
                <div className={styles['navbar-wrap']}>
                    <Link href="#">
                        <a className={styles['navbar-logo']}>
                            <div className={styles['logo']}>
                                <Image src='/rcn-icon.svg' width={40} height={40}/>
                            </div>
                            <div className={styles['name-logo']}>
                                <strong>Riko</strong>ChairNugroho
                            </div>
                        </a>
                    </Link>
                    <button onClick={()=>setShowNavbar(!showNavbar)} className={styles['toggle-menu']}>
                        <Image src='/images/icon/icon-menu.svg' width={26} height={32}/>
                    </button>
                    <div className={`${styles['navbar-links']} ${showNavbar ? styles['show'] : ''}` } >
                        <ul>
                            <li><Link href="#profile"><a>about me</a></Link></li>
                            <li><Link href="#skills"><a>skills</a></Link></li>
                            <li><Link href="#projects"><a>projects</a></Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar