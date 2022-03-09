import styles from './Projects.module.scss'
import Image from 'next/image'

import { projectsData } from '../../data'

const Projects = () => {
    return (
        <div className={styles['project-wrap']}>
            <div className={styles['title']}>projects</div>
            <div className={styles['card-wrap']}>
                {projectsData.map((project, index) => (
                    <div key={index} className={styles['project-card']}>
                        <a href={project.link} target="_blank" className={styles['project-image']}>
                            <img src={project.image} />
                            <span className={styles['cover-image']} />
                        </a>
                        <div className={styles['project-content']} >
                            <div className={styles['project-name']}>{project.title}</div>
                            <div className={styles['project-description']}>{project.description}</div>
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
        </div>
    )
}

export default Projects