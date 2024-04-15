import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import "./sass/index.scss";
import { useState, useEffect } from "react";

function App() {
  const [anchoViewport, setAnchoViewport] = useState(window.innerWidth);

  useEffect(() => {
    const actualizarAncho = () => {
      setAnchoViewport(window.innerWidth);
    };

    window.addEventListener("resize", actualizarAncho);

    return () => {
      window.removeEventListener("resize", actualizarAncho);
    };
  }, []);

  return (
    <>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="about_me">
        <AboutMe anchoViewport={anchoViewport} />
      </section>
        <Portfolio anchoViewport={anchoViewport} />
      <section id="contact">
        <Contact anchoViewport={anchoViewport} />
      </section>
    </>
  );
}

export default App;
