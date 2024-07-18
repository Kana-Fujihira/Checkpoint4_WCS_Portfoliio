import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./addproject.module.css";
import Home from "../../assets/images/home.svg";

function AddProject() {
  const [projectValues, setProjectValues] = useState({
    teamname: "",
    projectname: "",
    skill: "",
    projectlink: "",
  });

  const handleInputProject = (event) => {
    setProjectValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.info(projectValues);

  const handleAddProject = async (event) => {
    event.preventDefault();
    // Simple validation: check if all fields are filled
    const { teamname, projectname, skill, projectlink } = projectValues;
    if (!teamname || !projectname || !skill || !projectlink) {
      console.info("Veuillez remplir tous les champs");
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/project`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectValues),
        }
      );
      if (response === 200) {
        throw new Error("Erreur lors de l'inscription");
      }
    } catch (err) {
      console.error("Erreur lors de la requête d'inscription:", err);
      console.info("Une erreur est survenue lors de l'inscription");
    }
  };

  return (
    <div>
      <Link to="/">
        <img className={styles.homeIcon} src={Home} alt="Home icon" />
      </Link>
      <div className={styles.addProjectTitleContainer}>
        <h2 className={styles.addProjectTitle}>Add Project</h2>
      </div>
      <form className={styles.addProjectContainer} onSubmit={handleAddProject}>
        <div>
          <label htmlFor="teamname">
            <p>Team name</p>
          </label>
          <input
            type="text"
            placeholder="Takoyaki"
            name="teamname"
            value={projectValues.teamname}
            onChange={handleInputProject}
          />
        </div>
        <div>
          <label htmlFor="projectname">
            <p>Project name</p>
          </label>
          <input
            type="text"
            placeholder="Onigiri"
            name="projectname"
            value={projectValues.projectname}
            onChange={handleInputProject}
          />
        </div>
        <div>
          <label htmlFor="skill">
            <p>Skill</p>
          </label>
          <input
            type="name"
            placeholder="React"
            name="skill"
            value={projectValues.skill}
            onChange={handleInputProject}
          />
        </div>
        <div>
          <label htmlFor="projectlink">
            <p>Project link</p>
          </label>
          <input
            type="link"
            placeholder="https://github.com/"
            name="projectlink"
            value={projectValues.projectlink}
            onChange={handleInputProject}
          />

          <button className={styles.addProjectButton} type="submit">
            <p>Add</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
