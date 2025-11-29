import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`banner fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out border-b-2 backdrop-blur-sm ${
          isMenuOpen
            ? "menu-open bg-navy/95 border-navy-dark"
            : "bg-white/95 border-navy-dark/0"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 py-4 lg:py-5 max-w-screen-2xl mx-auto w-full">
          {/* Left - Logo and Brand Name */}
          <div className="flex items-center gap-3 z-50">
            <Link
              to="/"
              className="transition-transform duration-500 ease-out hover:scale-105"
            >
              <img
                src="/images/Mazvilla_pics/mazvilla_logo.jpeg"
                alt="Mazville Medhaya Logo"
                className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-500"
              />
            </Link>
            <div className="flex flex-col items-start -space-y-1">
              <h1
                className={`font-headings text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.15em] uppercase transition-all duration-500 leading-none ${
                  isMenuOpen ? "text-white" : "text-navy-dark"
                }`}
              >
                Mazville
              </h1>
              <p
                className={`font-headings text-xs md:text-sm lg:text-base font-light tracking-[0.3em] uppercase transition-all duration-500 ${
                  isMenuOpen ? "text-white/80" : "text-navy-dark/70"
                }`}
              >
                Medhaya
              </p>
            </div>
          </div>
          {/* Right Navigation - Desktop Only */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 z-50">
            <Link
              to="/"
              className="uppercase text-sm font-semibold tracking-widest text-navy-dark hover:text-blue transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/experience"
              className="uppercase text-sm font-semibold tracking-widest text-navy-dark hover:text-blue transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              to="/booking"
              className="uppercase text-sm font-semibold tracking-widest text-navy-dark hover:text-blue transition-colors duration-300"
            >
              Booking
            </Link>
            <Link
              to="/booking"
              className="px-6 py-2.5 bg-navy-dark text-white rounded-sm uppercase text-sm font-bold tracking-widest hover:bg-blue transition-all duration-300 flex items-center gap-2"
            >
              Book Now
              <span className="text-xs">▲</span>
            </Link>
          </nav>{" "}
          {/* Mobile Menu Toggle - Only visible on small screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex flex-col gap-1 w-7 h-6 z-50 transition-transform duration-300 hover:scale-110 ${
              isMenuOpen ? "js-menu__toggle--open" : ""
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`bar bar--top w-full h-0.5 bg-navy-dark transition-all duration-500 ease-out ${
                isMenuOpen ? "bg-white rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`bar bar--middle w-full h-0.5 bg-navy-dark transition-all duration-500 ease-out ${
                isMenuOpen ? "bg-white opacity-0" : ""
              }`}
            ></span>
            <span
              className={`bar bar--bottom w-full h-0.5 bg-navy-dark transition-all duration-500 ease-out ${
                isMenuOpen ? "bg-white -rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="js-menu__overlay"
        aria-expanded={isMenuOpen}
        className={`fixed inset-0 bg-navy-dark text-white z-40 transition-all duration-700 ease-out ${
          isMenuOpen
            ? "opacity-100 backdrop-blur-md"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center h-screen gap-8 text-fluid-lg font-headings transition-all duration-500 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="transition-all duration-300 hover:text-blue hover:translate-x-2"
          >
            Home
          </Link>
          <Link
            to="/booking"
            onClick={() => setIsMenuOpen(false)}
            className="transition-all duration-300 hover:text-blue hover:translate-x-2"
          >
            Booking
          </Link>
          <Link
            to="/experience"
            onClick={() => setIsMenuOpen(false)}
            className="transition-all duration-300 hover:text-blue hover:translate-x-2"
          >
            Experience
          </Link>
          <Link
            to="/terms"
            onClick={() => setIsMenuOpen(false)}
            className="transition-all duration-300 hover:text-blue hover:translate-x-2"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
