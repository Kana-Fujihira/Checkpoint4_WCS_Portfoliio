import Woman from "../../assets/images/woman.svg";
import Bear from "../../assets/images/bear.svg";
import Oneeye from "../../assets/images/oneeye.svg";

import styles from "./recommendation.module.css";

function Recommendation() {
  return (
    <div>
      <div className={styles.recommendationTitle}>
        <h2 className={styles.maker}>Reviews from previous work</h2>
      </div>
      <section className={styles.randomAvatarContainer}>
        <h2>" More croissant "</h2>
        <img src={Woman} alt="Random Avatar 1" />
        <h3>Kim nygn nygn</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
          nobis.
        </p>
      </section>
      <section className={styles.randomAvatarContainer}>
        <h2>" Super Organization! "</h2>
        <img src={Bear} alt="Random Avatar 2" />
        <h3>Winnie the Pooh</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
          nobis.
        </p>
      </section>
      <section className={styles.randomAvatarContainer}>
        <h2>" Best Wife "</h2>
        <img src={Oneeye} alt="Random Avatar 3" />
        <h3>Alexadre</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
          nobis.
        </p>
      </section>
    </div>
  );
}

export default Recommendation;
