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
        <ul>
          <li>{t("OrderCheese")}</li>
          <li>{t("OrderCheeseJob")}</li>
          <li>{t("OrderCheeseDetail")}</li>
        </ul>

        <img src={Tv} alt="Tv icon" />
        <p className={styles.companyName}>Publicis Beacon Communication</p>
        <ul>
          <li>{t("Beacon")}</li>
          <li>{t("BeaconJob")}</li>
          <li>{t("BeaconDetail")}</li>
        </ul>

        <img src={Sake} alt="Sake icon" />
        <p className={styles.companyName}>WAKAZE FRANCE</p>
        <ul>
          <li>{t("WAKAZE")}</li>
          <li>{t("WAKAZEJob")}</li>
          <li>{t("WAKAZEDetail")}</li>
        </ul>
      </section>
    </div>
  );
}

export default WorkExperience;
