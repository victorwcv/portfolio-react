import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import "./sass/index.scss";

function App() {
  

  return (
    <>
      <section id="homepage" >
        <Navbar />
        <Hero />
      </section>
      <section id="about_me" >
        <AboutMe />
      </section>
      <section id="portfolio" >
        <Parallax type="portfolio" />
      </section>
      <section id="contact" >
        Contact
      </section>
    </>
  );
}

export default App;
