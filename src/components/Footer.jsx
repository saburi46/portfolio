import { personalInfo } from "../data/portfolioData.js";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#home">
        {personalInfo.initials}
        <span>.</span>
      </a>

      <p>Thoughtfully built, one step at a time.</p>

      

      <span className="copyright">
        © {currentYear} {personalInfo.name}. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;