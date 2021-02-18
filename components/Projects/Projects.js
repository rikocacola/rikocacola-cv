import styles from './Projects.module.scss'

import { projectsData } from '../../data'

import Image from 'next/image'

const Projects = () => {
    return (
        <section className={styles.projectWrap}>
            <h1 className={`${styles.title} Heading2Xl`}>Projects</h1>
            <div className={styles.cardWrap}>
                {
                    projectsData.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <h2>{project.title}</h2>
                            <p className="HeadingMd">{project.description}</p>
                            <p className="HeadingMd">Tech : {project.tech}</p>
                            <a href={project.link} className={styles.button} target="_blank">SEE LIVE</a>
                            <a href={project.source} className={styles.button} target="_blank">SOURCE CODE</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects