import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./index.css";


export default function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Technologies />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
