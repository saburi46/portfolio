import { projects } from "../data/portfolioData.js";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SELECTED WORK</p>

          <h2>
            Things I've <span>built.</span>
          </h2>
        </div>

        <p className="section-description">
          A collection of projects reflecting my practical experience,
          creativity, and growth as a developer.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-number">
                {String(index + 1).padStart(2, "0")} /{" "}
                {project.category.toUpperCase()}
              </div>

              <div
                className={`project-art ${
                  index % 2 === 0 ? "project-art-one" : "project-art-two"
                }`}
              >
                {index % 2 === 0 ? (
                  <div className="mini-window">
                    <div className="mini-window-dots">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="mini-dashboard">
                      <div className="mini-sidebar" />

                      <div className="mini-content">
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="code-art">
                    <span>const</span> project = <span>{"{"}</span>
                    <br />
                    &nbsp;&nbsp;build: <span>"ideas"</span>,
                    <br />
                    &nbsp;&nbsp;learn: <span>"always"</span>
                    <br />
                    <span>{"}"}</span>;
                    <div className="code-art-caption">
                      THINK. BUILD. IMPROVE.
                    </div>
                  </div>
                )}
              </div>

              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                {project.liveUrl && (
                  <a
                    className="project-arrow"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    title="Open live demo"
                  >
                    ↗
                  </a>
                )}
              </div>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="hero-actions project-actions">
                {project.liveUrl && (
                  <a
                    className="button button-primary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    className="button button-secondary"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="section-description">
          New projects are coming soon. Please check back later!
        </p>
      )}
    </section>
  );
}

export default Projects;