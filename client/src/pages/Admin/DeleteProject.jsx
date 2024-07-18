import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./deleteproject.module.css";

function Delete() {
  const allProjects = useLoaderData();
  const [reloadProject, setReloadProject] = useState(0);

  useEffect(() => {}, [reloadProject]);

  console.info(allProjects);

  const handleDeleteProject = async (id) => {
    console.info("Deleting Project with id:", id);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/project`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );

      if (response.status === 200) {
        console.info("L'opération a réussie", id);
      } else {
        console.info("L'opération a échouée");
      }

      setReloadProject((i) => i + 1);
    } catch (err) {
      console.error(err);
      console.info("Une erreur s'est produite");
    }
  };

  return (
    <>
      <div>
        <p>Delete Project</p>
      </div>
      <div>
        {allProjects.map((project) => (
          <div key={project.id} className={styles.projectContainer}>
            <p>My team : {project.teamname}</p>
            <p>Project name : {project.projectname}</p>
            <p>I used {project.skill}</p>
            <a href={project.projectlink}>Github Link</a>
            <button
              onClick={() => handleDeleteProject(project.id)}
              type="submit"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Delete;
