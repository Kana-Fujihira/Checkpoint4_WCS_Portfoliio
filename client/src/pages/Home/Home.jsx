import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import MyProject from "../../components/MyProject/MyProject";
import Recommendation from "../../components/Recommendation/Recommendation";
import Contactform from "../../components/Contact/Contactform";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/project`
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch {
        console.error("Failed");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <section id="home">
        <Welcome />
      </section>
      <section id="workExperience">
        <WorkExperience />
      </section>
      <section id="myProject">
        <MyProject projects={projects} />
      </section>
      <section id="Recommendation">
        <Recommendation />
      </section>
      <section id="contact">
        <Contactform />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
