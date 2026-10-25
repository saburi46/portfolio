import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/commandPalette";
import RevealOnScroll from "./components/RevealOnScroll";
import BackToTop from "./components/BackToTop";
import ReadingProgress from "./components/ReadingProgress";
function App() {
  return (
    <main className="portfolio">
      <ReadingProgress />
      <Navbar />

      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <About />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <Projects />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <Contact />
      </RevealOnScroll>

      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>

      <CommandPalette />
      <BackToTop />
    </main>
  );
}

export default App;