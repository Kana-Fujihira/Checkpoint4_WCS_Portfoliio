import { useState } from "react";
import { useTranslation } from "react-i18next";
import AvatarNormal from "../../assets/images/avatar-normal.svg";
import AvatarMouthOpen from "../../assets/images/avatar-openmouth.svg";
import Phrase1 from "../../assets/images/phrase1.svg";
import Phrase2 from "../../assets/images/phrase2.svg";
// import img1 from "../../assets/images/img1.png";
// import img2 from "../../assets/images/img2.png";
// import img3 from "../../assets/images/img3.png";
// import img4 from "../../assets/images/img4.png";

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
      {" "}
      {/* <div>
        <ul className={styles.rotateImage}>
          <li>
            <img src={img1} alt="sakura1" />
          </li>
          <li>
            <img src={img2} alt="sakura2" />
          </li>
          <li>
            <img src={img3} alt="sakura3" />
          </li>
          <li>
            <img src={img4} alt="sakura4" />
          </li>
          <li>
            <img src={img1} alt="sakura1" />
          </li>
          <li>
            <img src={img2} alt="sakura2" />
          </li>
          <li>
            <img src={img3} alt="sakura3" />
          </li>
          <li>
            <img src={img4} alt="sakura4" />
          </li>
        </ul>
      </div> */}
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
