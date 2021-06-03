import SkillsCard from '../Global/SkillsCard/SkillsCard'
import styles from './Skills.module.scss'

const Skills = () => {
    return (
        <section className={styles['skills-wrap']}>
            <h1>Skills</h1>
            <SkillsCard/>
        </section>
        // <section className={styles.wrap}>
        //     <h1 className={`${styles.title} Heading2Xl`}>Skills</h1>
        //     <div className={styles.cardWrap}>
        //         {
        //             skillsData.map((skill, index) => (
        //                 <div key={index} className={styles.card}>
        //                     <Image src={`${skill.imgURL}`} width={100} height={100} />
        //                     <p className={skill.title}>{skill.title}</p>
        //                 </div>
        //             ))
        //         }
        //     </div>
        // </section>
    )
}

export default Skills;