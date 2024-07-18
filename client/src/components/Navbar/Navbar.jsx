// import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

function Navbar() {
  // const [navbar, setNavbar] = useState();

  // useEffect();

  return (
    <div>
      <ul className={styles.navbarContainer}>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#workExperience">
          <li>Work Experience</li>
        </a>
        <a href="#myProject">
          <li>Project</li>
        </a>
        <a href="#Recommendation">
          <li>Reccomendation</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
