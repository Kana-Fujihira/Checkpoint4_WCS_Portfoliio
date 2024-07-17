import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div>
      <ul className={styles.navbarContainer}>
        <li>Home</li>
        <Link to="#workExperience">
          <li>Work Experience</li>
        </Link>
        <Link to="#myProject">
          <li>Project</li>
        </Link>
        <Link to="#Reccomendation">
          <li>Reccomendation</li>
        </Link>
        <Link to="#contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
