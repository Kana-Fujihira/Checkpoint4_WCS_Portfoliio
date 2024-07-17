import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import MyProject from "../../components/MyProject/MyProject";
import Recommendation from "../../components/Recommendation/Recommendation";
import Contactform from "../../components/Contact/Contactform";
import Footer from "../../components/Footer";

function Home() {
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
        <MyProject />
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
