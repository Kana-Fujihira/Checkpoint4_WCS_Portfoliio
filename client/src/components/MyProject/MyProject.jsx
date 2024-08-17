import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import styles from "./myproject.module.css";

function MyProject() {
  const { t } = useTranslation();
  const allProjects = useLoaderData();
  console.info(allProjects);
  return (
    <div>
      <div className={styles.myProjectTitle}>
        <h2 className={styles.maker}>{t("Project")}</h2>
      </div>
      {allProjects.map((project) => (
        <div key={project.id} className={styles.projectContainer}>
          <p>My team : {project.teamname}</p>
          <p>Project name : {project.projectname}</p>
          <p>I used {project.skill}</p>
          <a href={project.projectlink}>Github Link</a>
        </div>
      ))}
    </div>
  );
}

export default MyProject;
