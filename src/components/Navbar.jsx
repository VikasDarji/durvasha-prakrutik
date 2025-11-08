import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 🌟 Updated Nav Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-black/40 via-black/20 to-black/40 border-b border-cyan-400/30 shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* 🔷 Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <img
            src={Logo}
            alt="Site Logo"
            className="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_#00ffff]"
          />
          <span className="text-xl md:text-2xl font-bold text-white drop-shadow-[0_0_8px_#00ffff] tracking-wide group-hover:text-cyan-300 transition-all duration-300">
            Durvasha-Prakruti
          </span>
        </div>

        {/* 🌈 Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group tracking-wide transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {link.name}
              {/* Hover underline glow */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 shadow-[0_0_8px_#00ffff]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* 📱 Mobile Menu Button */}
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

      {/* 📜 Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden backdrop-blur-md bg-black/40 border-t border-cyan-500/40 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-5 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-semibold transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-cyan-400 drop-shadow-[0_0_8px_#00ffff]"
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
