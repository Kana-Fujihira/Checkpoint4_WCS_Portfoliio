import { Link } from "react-router-dom";
import { useState } from "react";
import ThanksFrog from "../../assets/images/kaeru2.svg";
import NormalFrog from "../../assets/images/kaeru1.svg";
import styles from "./validation.module.css";

function Validation() {
  const [frog, setFrog] = useState(false);

  const handleMouseEnter = () => {
    setFrog(true);
  };
  const handleMouthLeavve = () => {
    setFrog(false);
  };
  return (
    <div className={styles.validationContainer}>
      <p>Thank you for your message.I get back to you in 24h.</p>
      <Link to="/">
        <img
          src={frog ? ThanksFrog : NormalFrog}
          alt="Thank you Frog1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouthLeavve}
        />{" "}
      </Link>

      <p>Back to Home(Kaeru)</p>
    </div>
  );
}

export default Validation;
