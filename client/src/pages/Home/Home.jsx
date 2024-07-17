import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcom";
import WorkExperience from "../../components/WorkExprience/WorkExperience";
import MyProject from "../../components/MyProject/MyProject";
import Feedback from "../../components/Feedback";
import Contactform from "../../components/Contact/Contactform";
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
