import { personalInfo } from "../data/portfolioData.js";

function About() {
  return (
    <section className="intro-strip" id="about">
      <p className="strip-label">A LITTLE ABOUT ME</p>

      <p className="strip-text">{personalInfo.about}</p>

      <a href="#projects" className="strip-link">
        Discover my work <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

export default About;