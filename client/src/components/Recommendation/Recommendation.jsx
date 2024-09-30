import { useTranslation } from "react-i18next";
import Woman from "../../assets/images/woman.svg";
import Bear from "../../assets/images/bear.svg";
import Oneeye from "../../assets/images/oneeye.svg";

import styles from "./recommendation.module.css";

function Recommendation() {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.recommendationTitle}>
        <h2 className={styles.maker}>{t("titleReview")}</h2>
      </div>
      <section className={styles.randomAvatarContainer}>
        <h2>{t("title1stReview")}</h2>
        <img src={Woman} alt="Random Avatar 1" />
        <h3>{t("name1stReview")}</h3>
        <p>{t("message1stReview")}</p>
      </section>
      <section className={styles.randomAvatarContainer}>
        <h2>{t("title2ndReview")}</h2>
        <img src={Bear} alt="Random Avatar 2" />
        <h3>{t("name2ndReview")}</h3>
        <p>{t("message2ndReview")}</p>
      </section>
      <section className={styles.randomAvatarContainer}>
        <h2>{t("title3rdReview")}</h2>
        <img src={Oneeye} alt="Random Avatar 3" />
        <h3>{t("name3rdReview")}</h3>
        <p>{t("message3rdReview")}</p>
      </section>
    </div>
  );
}

export default Recommendation;
