import styles from './Projects.module.scss'

import { projectsData } from '../../data'

const Projects = () => {
    return (
        <section className={styles.projectWrap}>
            <h1 className={`${styles.title} Heading2Xl`}>Projects</h1>
            <div className={styles.cardWrap}>
                {
                    projectsData.map((project, index) => (
                        <div key={index} className={styles.card} style={{ backgroundImage: `url(${project.tech})` }}>
                            <h2>{project.title}</h2>
                            <p className="HeadingMd">{project.description}</p>
                            <a href={project.link} className="button" target="_blank">SEE LIVE</a>
                            <a href={project.source} className="button" target="_blank">SOURCE CODE</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects