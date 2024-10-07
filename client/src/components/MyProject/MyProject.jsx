import { useTranslation } from "react-i18next";
import React from "../../assets/images/react.png";
import Css from "../../assets/images/css.png";
import Html from "../../assets/images/html.png";
import JavaScript from "../../assets/images/javascript.png";
import Node from "../../assets/images/node.svg";
import Express from "../../assets/images/express.svg";
import Mysql from "../../assets/images/mysql.png";
import Catinder from "../../assets/video/Catinder - Made with Clipchamp.mp4";
import BroadkatVideo from "../../assets/video/Broadkat - Made with Clipchamp.mp4";
import styles from "./myproject.module.css";

function MyProject() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      name: "Le Kaleine Quizz",
      skill: "HTML, CSS, JavaScript",
      link: "https://github.com/wilderLPM/P1lesEwoks",
    },
    {
      id: 2,
      name: "Find Your Holidays",
      skill: "HTML, CSS , JavaScript , React",
      link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-holidays_planner",
    },

    {
      id: 3,
      name: "Catinder",
      skill: "HTML, CSS, JavaScript , React, Node.js, Express, MySQL",
      link: "https://github.com/Kana-Fujihira/matching-react-app",
    },
    {
      id: 4,
      name: "Broadkat",
      skill: "HTML, CSS, JavaScript , React, Node.js, Express, MySQL",
      link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-ricetrio",
    },
  ];

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
      {projects.map((project) => (
        <div key={project.id} className={styles.projectContainer}>
          <p>
            {t("ProjectName")} : {project.name}
          </p>
          <p>
            {t("Skill")} {project.skill}
          </p>
          <a href={project.link}>Github Link</a>
        </div>
      ))}
      <div className={styles.videoContainer}>
        <video width="600" controls className={styles.videoContent}>
          <source src={Catinder} type="video/mp4" />
          <track kind="captions" />
        </video>
        <video width="600" controls className={styles.videoContent}>
          <source src={BroadkatVideo} type="video/mp4" />
          <track kind="captions" />
        </video>
      </div>
    </div>
  );
}

export default MyProject;
