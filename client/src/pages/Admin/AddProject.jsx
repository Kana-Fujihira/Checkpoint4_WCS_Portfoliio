import { useState } from "react";

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
      <p>Add Project</p>
      <form onSubmit={handleAddProject}>
        <div>
          <label htmlFor="teamname">
            <p>Team name</p>
          </label>
          <input
            type="text"
            placeholder="RiceTrio"
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
            placeholder="Prodkat"
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
            placeholder="github://"
            name="projectlink"
            value={projectValues.projectlink}
            onChange={handleInputProject}
          />

          <button type="submit">
            <p>Add</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
