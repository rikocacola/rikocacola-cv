import Link from 'next/link'
import Image from 'next/image'
import styles from './Hello.module.scss'

const Hello = () => {
  return(
    <div className={styles['hello-wrap']}>
      <div className={styles['hello']}>
        Hello <span className={styles['wave-emoji']}>👋</span>
      </div>
      <div className={styles['my-name']}>
        My name is <span className={styles['name']}>Riko Chair Nugroho</span><br/>
        I'm a <span className={styles['name']}>Front-end Developer</span>
      </div>
      <Link href="#profile">
        <a className={styles['know-more']}>
          KNOW MORE<br/>
          <Image src='/images/icon/icon-down-arrow.svg' width={32} height={32}/>
        </a>
      </Link>
    </div>
  )
}

export default Hello
