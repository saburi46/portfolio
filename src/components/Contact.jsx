import { personalInfo, socialLinks } from "../data/portfolioData.js";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow">LET'S CONNECT</p>

      <h2>
        Let's make something <span>meaningful.</span>
      </h2>

      <p>
        I'm open to connecting, collaborating, and exploring opportunities
        to grow through technology.
      </p>

      <a
        className="button button-light"
        href={`mailto:${personalInfo.email}`}
      >
        Email me <span aria-hidden="true">↗</span>
      </a>

      <div className="contact-socials">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            aria-label={social.label}
            target={
              social.url.startsWith("mailto:") ? undefined : "_blank"
            }
            rel={
              social.url.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
          >
            {social.name} ↗
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;