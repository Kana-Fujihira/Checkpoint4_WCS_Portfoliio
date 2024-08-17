// import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./navbar.module.css";
import Languageselector from "./language-selector";

function Navbar() {
  // const [navbar, setNavbar] = useState();

  // useEffect();
  const { t } = useTranslation();

  return (
    <ul className={styles.navbarContainer}>
      <a href="#home">
        <li>{t("home")}</li>
      </a>
      <a href="#workExperience">
        <li>{t("WorkExperience")}</li>
      </a>
      <a href="#myProject">
        <li>{t("Project")}</li>
      </a>
      <a href="#Recommendation">
        <li>{t("Reccomendation")}</li>
      </a>
      <a href="#contact">
        <li>{t("Contact")}</li>
      </a>
      <li>
        <Languageselector />
      </li>
    </ul>
  );
}

export default Navbar;
