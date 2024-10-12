import { useState } from "react";
import { useTranslation } from "react-i18next";
import AvatarNormal from "../../assets/images/avatar-normal.svg";
import AvatarMouthOpen from "../../assets/images/avatar-openmouth.svg";
import Phrase1 from "../../assets/images/phrase1.svg";
import Phrase2 from "../../assets/images/phrase2.svg";

import styles from "./welcome.module.css";

function Welcome() {
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
      <div className={styles.headlineContainer}>
        <h1>{t("greeting")}</h1>
      </div>
      <div className={styles.welcomContainer}>
        <p>{t("introduction")}</p>
        <img
          src={avatar ? AvatarMouthOpen : AvatarNormal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouthLeavve}
          className={styles.kanaImage}
          alt="Kana Avatar"
        />
        <img
          src={avatar ? Phrase1 : Phrase2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouthLeavve}
          className={styles.phraseImage}
          alt="Kana Avatar"
        />
      </div>
    </div>
  );
}

export default Welcome;
