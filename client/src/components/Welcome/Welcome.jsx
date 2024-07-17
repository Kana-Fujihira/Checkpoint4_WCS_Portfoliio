import { useState } from "react";
import AvatarNormal from "../../assets/images/avatar-normal.svg";
import AvatarMouthOpen from "../../assets/images/avatar-openmouth.svg";
import Phrase1 from "../../assets/images/phrase1.svg";
import Phrase2 from "../../assets/images/phrase2.svg";

import styles from "./welcome.module.css";

function Welcome() {
  const [avatar, setAvatar] = useState(false);

  const handleMouseEnter = () => {
    setAvatar(true);
  };
  const handleMouthLeavve = () => {
    setAvatar(false);
  };

  return (
    <div className={styles.welcomContainer}>
      <img
        src={avatar ? AvatarMouthOpen : AvatarNormal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouthLeavve}
        alt="Kana Avatar"
      />
      <img
        src={avatar ? Phrase1 : Phrase2}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouthLeavve}
        alt="Kana Avatar"
      />
    </div>
  );
}

export default Welcome;
