import { useTranslation } from "react-i18next";
import { useState } from "react";
import CatKaeruCall from "../../assets/images/catkaerucall.svg";
import CatKaeruCall2 from "../../assets/images/catkaerucall2.svg";
import styles from "./contact.module.css";

function Contactform() {
  const { t } = useTranslation();

  const [avatar, setAvatar] = useState(false);

  const handleMouseEnter = () => {
    setAvatar(true);
  };
  const handleMouthLeavve = () => {
    setAvatar(false);
  };

  return (
    <div>
      <div className={styles.contactTitle}>
        <h1 className={styles.maker}>{t("Contact")}</h1>{" "}
        <img
          src={avatar ? CatKaeruCall : CatKaeruCall2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouthLeavve}
          alt="CatAndFrogCallImage"
          className={styles.contactImage}
        />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactSubContainer}>
          <h3>{t("Email")} : kanafujihirapedrinis@gmail.com</h3>
        </div>{" "}
        <div className={styles.contactSubContainer}>
          <h3>{t("PhoneNumber")} : 0667824231 </h3>{" "}
        </div>
      </div>
    </div>
  );
}

export default Contactform;
