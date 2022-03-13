import styles from './Skills.module.scss'
import { skillsData } from '../../data'

const Skills = () => {
    return (
        <div className={styles['skills-wrap']}>
            <div className={styles['title']}>skills</div>
            <div className={styles['skills-container']}>
                {
                    skillsData.map((skill, idx) => (
                        <div className={styles['skill-card']} key={idx}>
                            <img className={styles['skill-img']} src={skill.imgURL} alt={skill.title}/>
                            <p className={styles['skill-title']}>{skill.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills