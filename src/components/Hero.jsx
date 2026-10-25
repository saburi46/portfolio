import { personalInfo } from "../data/portfolioData.js";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="availability-dot" />
          {personalInfo.availability}
        </div>

        <p className="eyebrow">
          {personalInfo.role.toUpperCase()}
        </p>

        <h1>
          Hello, I'm
          <br />
          <span>{personalInfo.name}.</span>
        </h1>

        <p className="hero-description">
          {personalInfo.tagline}
        </p>

        <p className="hero-description">
          {personalInfo.description}
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <span aria-hidden="true">↗</span>
          </a>

          <a className="button button-secondary" href="#about">
            More about me <span aria-hidden="true">↓</span>
          </a>

          <a
            className="button button-secondary"
            href="/cv.pdf"
            download="Sabrin_Abdu_CV.pdf"
          >
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-note">
          <span className="note-line" />
          Curious mind. Intentional work. Continuous growth.
        </div>
      </div>

      <div
        className="hero-visual"
        role="img"
        aria-label={`${personalInfo.name}'s personal monogram`}
      >
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />

        <div className="monogram-card">
          <span className="monogram-top">CREATIVE MIND</span>

          <div className="monogram">{personalInfo.initials}</div>

          <span className="monogram-bottom">
            BUILT WITH PURPOSE
          </span>
        </div>

        <div className="floating-card floating-top">
          <span className="floating-icon" aria-hidden="true">
            ✳
          </span>

          <div>
            <strong>Curiosity</strong>
            <small>Always learning</small>
          </div>
        </div>

        <div className="floating-card floating-bottom">
          <span className="floating-icon code-icon" aria-hidden="true">
            &lt;/&gt;
          </span>

          <div>
            <strong>Code with care</strong>
            <small>Think. Build. Improve.</small>
          </div>
        </div>

        <span className="decorative-star star-one" aria-hidden="true">
          ✳
        </span>

        <span className="decorative-star star-two" aria-hidden="true">
          ✳
        </span>
      </div>

      <div className="hero-index">
        <span>01</span>
        <span className="index-line" />
        <span>WELCOME TO MY SPACE</span>
      </div>
    </section>
  );
}

export default Hero;