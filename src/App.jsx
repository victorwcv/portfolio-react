import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import "./sass/index.scss";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type='services'/></section>
      <section >Services</section>
      <section id="Portfolio"><Parallax type='portfolio'/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </>
  );
}

export default App;
