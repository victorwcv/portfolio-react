import Navbar from "./components/Navbar";
import "./sass/index.scss";

function App() {
  return (
    <>
      <section id="homepage">
        <Navbar />
        Hero
      </section>
      <section id="services">Parallax</section>
      <section >Services</section>
      <section id="portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="contact">Contact</section>
    </>
  );
}

export default App;
