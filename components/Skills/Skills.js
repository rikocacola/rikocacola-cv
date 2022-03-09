import styles from './Skills.module.scss'
import { skillsData } from '../../data'

const Skills = () => {
    return (
        <div className={styles['skills-wrap']}>
            {skillsData.map((skill, index) => (
                <div key={index} className={styles['skills-card']}>
                    <img src={skill.imgURL} className={styles['skill-image']} />
                    <p>{skill.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Skills