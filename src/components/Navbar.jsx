import { personalInfo, navigationLinks } from "../data/portfolioData.js";

function Navbar() {
return (
<nav className="navbar" aria-label="Main navigation">
<a
className="brand flower-brand"
href="#home"
aria-label={"${personalInfo.name} home"}
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

  <a className="nav-cta" href="#contact">
    Let's talk <span aria-hidden="true">↗</span>
  </a>
</nav>

);
}

export default Navbar;