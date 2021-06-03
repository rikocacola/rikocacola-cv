import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
// import {PREFIX_IMAGE} from '../../utils/constant'

import {useState} from 'react'

const Navbar = () => {
    // const navbarLinks = useRef()
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <header className={styles['header']}>
                <div className={styles['navbar-wrap']}>
                    <div className={styles['navbar-logo']}>
                        <strong>Riko</strong>ChairNugroho
                    </div>
                    <button onClick={()=>setShowNavbar(!showNavbar)} className={styles['toggle-menu']}>
                        <Image src='/images/icon/icon-menu.svg' width={26} height={32}/>
                    </button>
                    <div className={`${styles['navbar-links']} ${showNavbar ? styles['show'] : ''}` } >
                        <ul>
                            <li><Link href="/"><a>ABOUT ME</a></Link></li>
                            <li><Link href="#"><a>SKILLS</a></Link></li>
                            <li><Link href="/projects"><a>PROJECTS</a></Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar