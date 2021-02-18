import Image from 'next/image'

import { skillsData } from '../../data'

import styles from './Skills.module.scss'
import HomeStyles from '../../styles/Home.module.css'

const Skills = () => {
    return (
        <section className={styles.wrap}>
            <h1 className={`${styles.title} ${HomeStyles.Heading2Xl}`}>Skills</h1>
            <div className={styles.cardWrap}>
                {
                    skillsData.map((skill, index) => (
                        <div key={index} className={styles.card}>
                            <Image src={`${skill.imgURL}`} width={56} height={56} />
                            <p>{skill.title}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;