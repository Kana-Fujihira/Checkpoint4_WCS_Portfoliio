import { useTranslation } from "react-i18next";
import Woman from "../../assets/images/woman.svg";
import Bear from "../../assets/images/bear.svg";
import Oneeye from "../../assets/images/oneeye.svg";
import Eyan from "../../assets/images/eyan.svg";
import Yarujan from "../../assets/images/yarujan.svg";
import Sugoi from "../../assets/images/sugoi.svg";
import styles from "./recommendation.module.css";

function Recommendation() {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.recommendationTitle}>
        <h1 className={styles.maker}>{t("titleReview")}</h1>
      </div>
      <section className={styles.randomAvatarContainer}>
        <h2>{t("title1stReview")}</h2>
        <img
          src={Woman}
          className={styles.avatarImage}
          alt="Random Avatar 1"
        />{" "}
        <img src={Eyan} alt="MangaPhrase1" className={styles.mangaPhrase} />
        <h2>{t("name1stReview")}</h2>
        <p>{t("message1stReview")}</p>{" "}
      </section>{" "}
      <section className={styles.randomAvatarContainer}>
        <h2>{t("title2ndReview")}</h2>
        <img
          src={Bear}
          className={styles.avatarImage}
          alt="Random Avatar 2"
        />{" "}
        <img src={Yarujan} alt="MangaPhrase2" className={styles.mangaPhrase} />
        <h2>{t("name2ndReview")}</h2>
        <p>{t("message2ndReview")}</p>
      </section>
      <section className={styles.randomAvatarContainer}>
        <h2>{t("title3rdReview")}</h2>
        <img
          src={Oneeye}
          className={styles.avatarImage}
          alt="Random Avatar 3"
        />{" "}
        <img src={Sugoi} alt="MangaPhrase2" className={styles.mangaPhrase} />
        <h2>{t("name3rdReview")}</h2>
        <p>{t("message3rdReview")}</p>
      </section>
    </div>
  );
}

export default Recommendation;
