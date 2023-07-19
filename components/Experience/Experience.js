import styles from "./Experience.module.scss";
import { worksData } from "../../data";

const Experience = () => {
  return (
    <div className={styles["experience-wrap"]}>
      <div className={styles["title"]}>experiences</div>
      <div className={styles["experiences"]}>
        {worksData.map((work, i) => (
          <div key={i} className={styles["experience"]}>
            <div className={styles["first"]}>
              <div className={styles["company-name"]}>{work.companyName}</div>
              {work.placement ? (
                <div className={styles["placement-name"]}>
                  Placement : {work.placement}
                </div>
              ) : (
                ""
              )}
              <div className={styles["job-title"]}>{work.title}</div>
            </div>
            <div className={styles["second"]}>
              <img src={work.image} />
              <div className={styles["line"]}></div>
            </div>
            <div className={styles["third"]}>
              <div>
                {work.startDate} - {work.endDate}
              </div>
              <ul>
                {work.responsibility.map((data, idx) => (
                  <li key={idx}>{data}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
