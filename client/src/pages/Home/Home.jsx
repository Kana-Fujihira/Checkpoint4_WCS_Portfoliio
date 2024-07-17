import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcom";
import WorkExperience from "../../components/WorkExperience";
import MyProject from "../../components/MyProject";
import Feedback from "../../components/Feedback";
import Contactform from "../../components/Contactform";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <WorkExperience />
      <MyProject />
      <Feedback />
      <Contactform />
      <Footer />
    </div>
  );
}

export default Home;
