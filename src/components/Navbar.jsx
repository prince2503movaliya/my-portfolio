import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617] border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      {/* LOGO */}
      <h1 className="text-lg font-bold text-blue-400">Prince</h1>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-8 text-gray-300 text-sm">
        <NavLink href="#home" label="Home" />
        <NavLink href="#aboutme" label="About Me" />
        <NavLink href="#skills" label="Skills" />
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#contactme" label="Contact Me" />
      </div>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden text-white text-xl">
        {open ? (
          <FaTimes onClick={() => setOpen(false)} />
        ) : (
          <FaBars onClick={() => setOpen(true)} />
        )}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#020617] border-t border-gray-800 flex flex-col items-center gap-6 py-6 text-gray-300">
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#aboutme" onClick={() => setOpen(false)}>
            About Me
          </a>
          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contactme" onClick={() => setOpen(false)}>
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <a href={href} className="hover:text-blue-400 transition">
      {label}
    </a>
  );
}
