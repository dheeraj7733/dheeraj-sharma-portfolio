import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import AiTools from "./sections/AiTools";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#040712] text-slate-100 selection:bg-[#d4a359]/30 selection:text-amber-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <AiTools />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}