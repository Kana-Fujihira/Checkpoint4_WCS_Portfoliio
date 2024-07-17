import styles from "./workexperience.module.css";

function WorkExperience() {
  return (
    <div>
      <section className={styles.projectContainer}>
        <p>project1</p>
      </section>
      <section className={styles.projectContainer}>
        <p>project2</p>
      </section>
      <section className={styles.projectContainer}>
        <p>project3</p>
      </section>
    </div>
  );
}

export default WorkExperience;
