import { useTranslation } from "react-i18next";
import React from "../../assets/images/react.png";
import Css from "../../assets/images/css.png";
import Html from "../../assets/images/html.png";
import JavaScript from "../../assets/images/javascript.png";
import Swift from "../../assets/images/swift.svg";
import Node from "../../assets/images/node.svg";
import Express from "../../assets/images/express.svg";
import Mysql from "../../assets/images/mysql.png";
import Broadkat from "../../assets/images/broadkat_logo.svg";
import HolidaysPlanner from "../../assets/images/findyourholiday_logo.png";
import KaleineQuizz from "../../assets/images/kaleienquiz_ logo.png";
import Catinder from "../../assets/video/Catinder - Made with Clipchamp.mp4";
import BroadkatVideo from "../../assets/video/Broadkat - Made with Clipchamp.mp4";
import styles from "./myproject.module.css";

function MyProject() {
  const { t } = useTranslation();

  // const projects = [
  //   {
  //     id: 1,
  //     name: "Le Kaleine Quizz",
  //     skill: "HTML, CSS, JavaScript",
  //     link: "https://github.com/wilderLPM/P1lesEwoks",
  //   },
  //   {
  //     id: 2,
  //     name: "Find Your Holidays",
  //     skill: "HTML, CSS , JavaScript , React",
  //     link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-holidays_planner",
  //   },

  //   {
  //     id: 3,
  //     name: "Catinder",
  //     skill: "HTML, CSS, JavaScript , React, Node.js, Express, MySQL",
  //     link: "https://github.com/Kana-Fujihira/matching-react-app",
  //   },
  //   {
  //     id: 4,
  //     name: "Broadkat",
  //     skill: "HTML, CSS, JavaScript , React, Node.js, Express, MySQL",
  //     link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-ricetrio",
  //   },
  // ];

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
        <img src={Swift} className={styles.toobigImage} alt="SwiftLogo" />
      </div>
      <div className={styles.projectContainer}>
        <h2 className={styles.maker}>Broadkat</h2>
        <p>{t("Broadkat")}</p>
        {t("Skill")} :{" "}
        <p className={styles.skills}>
          HTML CSS JavaScript React Node.js Express.js API MySQL JWT Argon2 Jest
        </p>
        <img
          src={Broadkat}
          alt="BroadkatLogo"
          className={styles.broadkatLogo}
        />
        <a href="https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-ricetrio">
          Github Link
        </a>
      </div>
      <div className={styles.projectContainer}>
        <h2 className={styles.maker}>Find Your Holiday</h2>
        <p>{t("HolidaysPlanner")}</p>
        {t("Skill")} :
        <p className={styles.skills}>HTML CSS JavaScript React Node.js API</p>
        <img
          src={HolidaysPlanner}
          alt="HolidayPlannerLogo"
          className={styles.holidaysPlannerLogo}
        />
        <a href="https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-holidays_planner">
          Github Link
        </a>
      </div>
      <div className={styles.projectContainer}>
        <h2 className={styles.maker}>Kaleine Quizz</h2>
        <p>{t("KaleineQuizz")}</p>
        {t("Skill")} :<p className={styles.skills}>HTML CSS JavaScript</p>
        <img
          src={KaleineQuizz}
          alt="KaleineLogo"
          className={styles.kaleineLogo}
        />
        <a href="https://github.com/wilderLPM/P1lesEwoks">Github Link</a>
      </div>
      {/* {projects.map((project) => (
        <div key={project.id} className={styles.projectContainer}>
          <p>
            {t("ProjectName")} : {project.name}
          </p>
          <p>
            {t("Skill")} {project.skill}
          </p>
          <a href={project.link}>Github Link</a>
        </div>
      ))} */}
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
