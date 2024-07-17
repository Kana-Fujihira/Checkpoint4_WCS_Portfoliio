import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcom";
import WorkExperience from "../../components/WorkExperience";
import MyProject from "../../components/MyProject";
import Feedback from "../../components/Feedback";
import Contactform from "../../components/Contactform";

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <WorkExperience />
      <MyProject />
      <Feedback />
      <Contactform />
    </div>
  );
}

export default Home;
