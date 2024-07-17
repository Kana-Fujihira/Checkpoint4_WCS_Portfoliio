import { useLoaderData } from "react-router-dom";
import styles from "./myproject.module.css";

function MyProject() {
  const allProjects = useLoaderData();
  console.info(allProjects);
  return (
    <div>
      {allProjects.map((project) => (
        <div key={project.id} className={styles.projectContainer}>
          <p>My team : {project.teamname}</p>
          <p>Project name : {project.projectname}</p>
          <p>I used {project.skill}</p>
          <a href={project.projectlink}>Github Link</a>
        </div>
      ))}
    </div>
  );
}

export default MyProject;
