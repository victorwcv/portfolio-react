import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
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
      <section id="my_projects" >
        <Portfolio />
      </section>
      <section id="contact" >
        <Contact />
      </section>
    </>
  );
}

export default App;
