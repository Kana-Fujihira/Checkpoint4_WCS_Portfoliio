// import { Link } from "react-router-dom";
import styles from "./footer.module.css";
// import Admin from "../../assets/images/admin.svg";
import Github from "../../assets/images/github-mark.svg";
import LinkedIn from "../../assets/images/linkedin.svg";
import CV from "../../assets/images/cv.svg";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      {/* <section>
        <Link to="/signup">
          <img className={styles.imgAdminWoman} src={Admin} alt="Admin icon" />
        </Link>
      </section> */}
      <section>
        <a href="https://www.linkedin.com/in/kana-pedrinis-b3174013b/">
          <img
            className={styles.imgLinkedIn}
            src={LinkedIn}
            alt="LinkedIn icon"
          />
        </a>
      </section>
      <section>
        <a
          href="/Kana PEDRINIS CV Conceptrice Développeuse d’Applications en alternance.pdf"
          download="Kana PEDRINIS CV Conceptrice Développeuse d’Applications en alternance.pdf"
        >
          <img className={styles.imgCV} src={CV} alt="CV icon" />
        </a>
      </section>
      <section>
        <a href="https://github.com/Kana-Fujihira">
          <img className={styles.imgGithub} src={Github} alt="Github icon" />
        </a>
      </section>
    </div>
  );
}

export default Footer;
