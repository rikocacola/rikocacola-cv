import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import {PREFIX_IMAGE} from '../../utils/constant'

import { useState } from "react";

const Navbar = () => {
  // const profileScroll = () => props.profileRef.current.scrollIntoView();
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();
  const path = router.asPath;
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["navbar-wrap"]}>
          <Link href="#" className={styles["navbar-logo"]}>
            <div className={styles["logo"]}>
              <Image src="/rcn-icon.svg" width={40} height={40} />
            </div>
            <div className={styles["name-logo"]}>
              <strong>Riko</strong>ChairNugroho
            </div>
          </Link>
          <button
            onClick={() => setShowNavbar(!showNavbar)}
            className={styles["toggle-menu"]}
          >
            <Image src="/images/icon/icon-menu.svg" width={26} height={32} />
          </button>
          <div
            className={`${styles["navbar-links"]} ${
              showNavbar ? styles["show"] : ""
            }`}
          >
            <ul>
              <li
                className={`${styles.list} ${
                  path.includes("profile") ? styles.active : ""
                }`}
              >
                <Link href="#profile">about me</Link>
                <span>.</span>
              </li>
              <li
                className={`${styles.list} ${
                  path.includes("skills") ? styles.active : ""
                }`}
              >
                <Link href="#skills">skills</Link>
                <span>.</span>
              </li>
              <li
                className={`${styles.list} ${
                  path.includes("projects") ? styles.active : ""
                }`}
              >
                <Link href="#projects">projects</Link>
                <span>.</span>
              </li>
              <li
                className={`${styles.list} ${
                  path.includes("experiences") ? styles.active : ""
                }`}
              >
                <Link href="#experiences">experiences</Link>
                <span>.</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
