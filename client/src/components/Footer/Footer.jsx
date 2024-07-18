import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import Admin from "../../assets/images/admin.svg";
import Github from "../../assets/images/github-mark.svg";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section>
        <Link to="/admin">
          <img className={styles.imgAdminWoman} src={Admin} alt="Admin icon" />
        </Link>
        <p>Admin</p>
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
