import AboutUs from "./components/AboutUs";
import AiMlSection from "./components/AiMlSection";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import LetsGetStarted from "./components/LetsGetStarted";
import NavBar from "./components/NavBar";
import StepSection from "./components/StepSection";
import Tools from "./components/Tools";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <Jumbotron />
      <LetsGetStarted />
      <AiMlSection />
      <StepSection />
      <Tools />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
