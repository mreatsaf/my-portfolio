import { useState } from "react";
import styled from "styled-components";

const Logo = styled.a`
  color: #38bdf8;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo href="#home">MyPortfolio</Logo>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded border border-slate-600 px-3 py-2 md:hidden"
        >
          ☰
        </button>

        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 transition hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-slate-700 px-6 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;