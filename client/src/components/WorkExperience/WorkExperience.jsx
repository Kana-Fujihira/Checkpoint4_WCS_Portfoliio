import { useTranslation } from "react-i18next";
import Cheese from "../../assets/images/cheese.svg";
import Tv from "../../assets/images/tv.svg";
import Sake from "../../assets/images/sake.svg";

import styles from "./workexperience.module.css";

function WorkExperience() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.workExperienceTitle}>
        <h1 className={styles.maker}>{t("WorkExperience")}</h1>
      </div>
      <section className={styles.workContainer}>
        <img src={Cheese} alt="Cheese icon" />
        <p className={styles.companyName}>OrderCheeese</p>
        <p>{t("OrderCheese")}</p>

        <img src={Tv} alt="Tv icon" />
        <p className={styles.companyName}>Publicis Beacon Communication</p>
        <p>{t("Beacon")}</p>

        <img src={Sake} alt="Sake icon" />
        <p className={styles.companyName}>WAKAZE FRANCE</p>
        <p>{t("WAKAZE")}</p>
      </section>
    </div>
  );
}

export default WorkExperience;
