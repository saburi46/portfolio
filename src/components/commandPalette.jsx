import { useEffect, useRef, useState } from "react";
import { navigationLinks } from "../data/portfolioData.js";

function CommandPalette() {
const [isOpen, setIsOpen] = useState(false);
const [search, setSearch] = useState("");
const [activeIndex, setActiveIndex] = useState(0);
const inputRef = useRef(null);

const commands = [
...navigationLinks.map((link) => ({
label: link.label,
description: "Navigate to ${link.label.toLowerCase()} section",
href: link.href,
icon: "↗",
})),
{
label: "Email me",
description: "Get in touch by email",
href: "mailto:abdusabrin441@gmail.com",
icon: "✉",
},
{
label: "Download CV",
description: "Download my résumé",
href: "/cv.pdf",
icon: "↓",
download: true,
},
];

const filteredCommands = commands.filter((command) => {
const searchableText =
"${command.label} ${command.description}".toLowerCase();

return searchableText.includes(search.trim().toLowerCase());

});

useEffect(() => {
function handleGlobalKeyDown(event) {
const isCommandShortcut =
(event.ctrlKey || event.metaKey) &&
event.key.toLowerCase() === "k";

  if (isCommandShortcut) {
    event.preventDefault();
    setIsOpen((current) => !current);
  }

  if (event.key === "Escape") {
    setIsOpen(false);
  }
}

document.addEventListener("keydown", handleGlobalKeyDown);

return () => {
  document.removeEventListener("keydown", handleGlobalKeyDown);
};

}, []);

useEffect(() => {
if (!isOpen) return;

setSearch("");
setActiveIndex(0);

requestAnimationFrame(() => {
  inputRef.current?.focus();
});

}, [isOpen]);

useEffect(() => {
setActiveIndex(0);
}, [search]);

useEffect(() => {
if (!isOpen) return;

function handleNavigationKeys(event) {
  if (event.key === "ArrowDown") {
    event.preventDefault();

    setActiveIndex((current) =>
      filteredCommands.length
        ? (current + 1) % filteredCommands.length
        : 0
    );
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();

    setActiveIndex((current) =>
      filteredCommands.length
        ? (current - 1 + filteredCommands.length) %
          filteredCommands.length
        : 0
    );
  }

  if (
    event.key === "Enter" &&
    filteredCommands[activeIndex]
  ) {
    event.preventDefault();
    executeCommand(filteredCommands[activeIndex]);
  }
}

document.addEventListener("keydown", handleNavigationKeys);

return () => {
  document.removeEventListener("keydown", handleNavigationKeys);
};

}, [isOpen, filteredCommands, activeIndex]);

function executeCommand(command) {
setIsOpen(false);

if (command.download) {
  const link = document.createElement("a");
  link.href = command.href;
  link.download = "Sabrin_Abdu_CV.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  return;
}

if (command.href.startsWith("#")) {
  const target = document.querySelector(command.href);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return;
}

window.location.href = command.href;

}

return (
<>
<button
type="button"
className="command-palette-trigger"
onClick={() => setIsOpen(true)}
aria-label="Open quick navigation"
title="Quick navigation (Ctrl+K)"
>
<span aria-hidden="true">⌕</span>
<span className="command-trigger-label">Quick find</span>
<kbd>Ctrl K</kbd>
</button>

  {isOpen && (
    <div
      className="command-palette-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-label="Quick navigation"
      >
        <div className="command-palette-search">
          <span aria-hidden="true">⌕</span>

          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Where would you like to go?"
            aria-label="Search commands"
          />

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close quick navigation"
          >
            Esc
          </button>
        </div>

        <div className="command-palette-heading">
          QUICK NAVIGATION
        </div>

        <div className="command-palette-results">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, index) => (
              <button
                key={command.label}
                type="button"
                className={`command-palette-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => executeCommand(command)}
              >
                <span
                  className="command-item-icon"
                  aria-hidden="true"
                >
                  {command.icon}
                </span>

                <span className="command-item-text">
                  <strong>{command.label}</strong>
                  <small>{command.description}</small>
                </span>

                <span
                  className="command-item-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>
            ))
          ) : (
            <div className="command-palette-empty">
              <strong>No matching commands</strong>
              <span>Try another search term.</span>
            </div>
          )}
        </div>

        <div className="command-palette-footer">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> Navigate
          </span>

          <span>
            <kbd>Enter</kbd> Select
          </span>

          <span>
            <kbd>Esc</kbd> Close
          </span>
        </div>
      </div>
    </div>
  )}
</>

);
}

export default CommandPalette;