import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import React from "../../assets/images/react.png";
import Css from "../../assets/images/css.png";
import Html from "../../assets/images/html.png";
import JavaScript from "../../assets/images/javascript.png";
import Node from "../../assets/images/node.svg";
import Express from "../../assets/images/express.svg";
import Mysql from "../../assets/images/mysql.png";
import styles from "./myproject.module.css";

function MyProject() {
  const { t } = useTranslation();
  const allProjects = useLoaderData();
 
  return (
    <div>
      <div className={styles.myProjectTitle}>
        <h1 className={styles.maker}>{t("Project")}</h1>
      </div>
      <div className={styles.languageLogoContainer}>
        <img src={React} alt="ReactLogo" />
        <img src={Html} alt="HtmlLogo" />
        <img src={Css} alt="CssLogo" />
        <img src={JavaScript} alt="JavaScriptLogo" />
        <img src={Node} className={styles.toobigImage} alt="NodeLogo" />
        <img src={Express} className={styles.toobigImage} alt="ExpressLogo" /> 
        <img src={Mysql} alt="MysqlLogo" />
      </div>
      {allProjects.map((project) => (
        <div key={project.id} className={styles.projectContainer}>
          <p>
            {t("MyTeam")} {project.teamname}
          </p>
          <p>
            {t("ProjectName")} : {project.projectname}
          </p>
          <p>
            {t("Skill")} {project.skill}
          </p>
          <a href={project.projectlink}>Github Link</a>
        </div>
      ))}
    </div>
  );
}

export default MyProject;
