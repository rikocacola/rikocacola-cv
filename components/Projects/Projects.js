import styles from './Projects.module.scss'
import Image from 'next/image'

import { projectsData } from '../../data'

const Projects = () => {
    return (
        <section className={styles['project-wrap']}>
            <div className={styles['card-wrap']}>
                {projectsData.map((project, index) => (
                    <div key={index} className={styles['project-card']}>
                        <a href={project.link} target="_blank" className={styles['project-image']}>
                            <img src={project.image} />
                            <span className={styles['cover-image']} />
                        </a>
                        <div className={styles['project-content']} >
                            <h1>{project.title}</h1>
                            <p className={styles['project-description']}>{project.description}</p>
                            <div className={styles['tech-lists']} >
                                {project.techLists.map((techList, idx) => (
                                    <p key={idx}>{techList.name}</p>
                                ))}
                            </div>
                            <div className={styles['project-links']}>
                                <div className={`${styles.github} ${styles.logo}`}>
                                    <a href={project.source} target="blank"></a>
                                </div>
                                <div className={`${styles['ext-link']} ${styles.logo}`}>
                                    <a href={project.link} target="blank"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects