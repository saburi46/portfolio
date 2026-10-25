import { useEffect, useState } from "react";
import { personalInfo, navigationLinks } from "../data/portfolioData.js";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a
        className="brand flower-brand"
        href="#home"
        aria-label={`${personalInfo.name} home`}
      >
        <img
          src="/flower-profile.png"
          alt=""
          className="navbar-flower"
        />
      </a>

      <div className="nav-links">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={
            theme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
          title={
            theme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
        >
          <span aria-hidden="true">
            {theme === "light" ? "☾" : "☀"}
          </span>
        </button>

        <a className="nav-cta" href="#contact">
          Let's talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;