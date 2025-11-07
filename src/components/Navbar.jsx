import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/react.svg"; // Import your SVG file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🌟 Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer animate-fadeIn">
          <img
            src={Logo}
            alt="React Logo"
            className="w-10 h-10 object-contain transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_10px_#00d8ff]"
          />
          <span className="text-xl md:text-2xl font-semibold text-white drop-shadow-[0_0_6px_#00d8ff]">
            DurvashaPrakrutik
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_#00fff2]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden flex flex-col justify-between w-7 h-6 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-full h-[3px] bg-cyan-400 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-[3px] bg-cyan-400 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-[3px] bg-cyan-400 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden backdrop-blur-md bg-black/30 border-t border-cyan-500/40 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-5 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-semibold transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-cyan-400 drop-shadow-[0_0_6px_#00fff2]"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
