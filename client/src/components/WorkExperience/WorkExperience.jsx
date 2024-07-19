import Cheese from "../../assets/images/cheese.svg";
import Tv from "../../assets/images/tv.svg";
import Sake from "../../assets/images/sake.svg";

import styles from "./workexperience.module.css";

function WorkExperience() {
  return (
    <div>
      <div className={styles.workExperienceTitle}>
        <h2 className={styles.maker}>Work Experiences</h2>
      </div>
      <section className={styles.workContainer}>
        <img src={Cheese} alt="Cheese icon" />
        <p className={styles.companyName}>OrderCheeese</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          totam obcaecati ex nemo iusto est quis eum voluptate fugiat nam
          aspernatur et repellat soluta placeat! Recusandae, voluptatem!
          Dignissimos, voluptate sequi.
        </p>

        <img src={Tv} alt="Tv icon" />
        <p className={styles.companyName}>Publicis Beacon Communication</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          totam obcaecati ex nemo iusto est quis eum voluptate fugiat nam
          aspernatur et repellat soluta placeat! Recusandae, voluptatem!
          Dignissimos, voluptate sequi.
        </p>

        <img src={Sake} alt="Sake icon" />
        <p className={styles.companyName}>WAKAZE FRANCE</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          totam obcaecati ex nemo iusto est quis eum voluptate fugiat nam
          aspernatur et repellat soluta placeat! Recusandae, voluptatem!
          Dignissimos, voluptate sequi.
        </p>
      </section>
    </div>
  );
}

export default WorkExperience;
