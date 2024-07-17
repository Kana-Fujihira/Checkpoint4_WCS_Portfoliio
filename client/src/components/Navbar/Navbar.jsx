import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div>
      <ul className={styles.navbarContainer}>
        <li>Home</li>
        <li>Work Experience</li>
        <li>Project</li>
        <li>Reccomendation</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
