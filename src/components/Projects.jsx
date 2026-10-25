import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/portfolioData.js";

function Projects() {
const [selectedProject, setSelectedProject] = useState(null);
const [searchTerm, setSearchTerm] = useState("");
const [activeCategory, setActiveCategory] = useState("All");

useEffect(() => {
if (!selectedProject) return;

function handleKeyDown(event) {
  if (event.key === "Escape") {
    setSelectedProject(null);
  }
}

document.addEventListener("keydown", handleKeyDown);

return () => {
  document.removeEventListener("keydown", handleKeyDown);
};

}, [selectedProject]);

const categories = useMemo(() => {
return [
"All",
...new Set(projects.map((project) => project.category)),
];
}, []);

const filteredProjects = useMemo(() => {
const query = searchTerm.trim().toLowerCase();

return projects.filter((project) => {
  const matchesCategory =
    activeCategory === "All" ||
    project.category === activeCategory;

  const searchableText = [
    project.title,
    project.description,
    project.category,
    ...project.technologies,
  ]
    .join(" ")
    .toLowerCase();

  const matchesSearch = searchableText.includes(query);

  return matchesCategory && matchesSearch;
});

}, [searchTerm, activeCategory]);

function clearFilters() {
setSearchTerm("");
setActiveCategory("All");
}

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

  {/* Search */}
  <div className="project-search-area">
    <label className="project-search-label" htmlFor="project-search">
      Find a project
    </label>

    <div className="project-search-box">
      <span aria-hidden="true">⌕</span>

      <input
        id="project-search"
        type="search"
        placeholder="Search by name or technology..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm && (
        <button
          type="button"
          className="project-search-clear"
          onClick={() => setSearchTerm("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  </div>

  {/* Category filters */}
  <div
    className="project-filters"
    aria-label="Filter projects by category"
  >
    {categories.map((category) => (
      <button
        key={category}
        type="button"
        className={`project-filter ${
          activeCategory === category ? "active" : ""
        }`}
        onClick={() => setActiveCategory(category)}
        aria-pressed={activeCategory === category}
      >
        {category}
      </button>
    ))}
  </div>

  <p className="project-results-count" aria-live="polite">
    {filteredProjects.length}{" "}
    {filteredProjects.length === 1 ? "project" : "projects"} found
  </p>

  {/* Project cards */}
  {filteredProjects.length > 0 ? (
    <div className="project-grid">
      {filteredProjects.map((project, index) => (
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
            <button
              className="button button-primary"
              type="button"
              onClick={() => setSelectedProject(project)}
            >
              View Details <span aria-hidden="true">↗</span>
            </button>

            {project.liveUrl && (
              <a
                className="button button-secondary"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                className="button button-secondary"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  ) : (
    <div className="project-empty-state">
      <span className="project-empty-icon" aria-hidden="true">
        ⌕
      </span>

      <h3>No projects found</h3>

      <p>
        Try another search term or select a different category.
      </p>

      <button
        className="button button-primary"
        type="button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )}

  {/* Project details popup */}
  {selectedProject && (
    <div
      className="project-modal-backdrop"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="project-modal-close"
          type="button"
          onClick={() => setSelectedProject(null)}
          aria-label="Close project details"
        >
          ×
        </button>

        <p className="eyebrow">{selectedProject.category}</p>

        <h2 id="project-modal-title">
          {selectedProject.title}
        </h2>

        <p className="project-modal-description">
          {selectedProject.description}
        </p>

        <h3>Technologies Used</h3>

        <div className="project-tags project-modal-tags">
          {selectedProject.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="hero-actions project-modal-actions">
          {selectedProject.liveUrl && (
            <a
              className="button button-primary"
              href={selectedProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo ↗
            </a>
          )}

          {selectedProject.githubUrl && (
            <a
              className="button button-secondary"
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )}
</section>

);
}

export default Projects;