import styles from '../SkillsCard/SkillsCard.module.scss'
// import Image from 'next/image'

const SkillsCard = () => (
    <div className={styles['card-wrap']}>
        <div className={styles['image-wrap']}>
            {/* <Image src='/images/logo/icon-react.png' width={80} height={80}/> */}
            <img src='/images/logo/icon-react.png'/>
        </div>
        <div className={styles['name-wrap']}>
            <p>ReactJS</p>
        </div>
    </div>
)

export default SkillsCard;