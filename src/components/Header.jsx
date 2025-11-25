import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`banner fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out border-b-2 backdrop-blur-sm ${isMenuOpen ? 'menu-open bg-navy/95 border-navy-dark' : 'bg-white/95 border-navy-dark/0'}`}>
        <div className="flex items-center justify-between px-fluid-sm py-4 lg:py-6">
          {/* Logo */}
          <a href="/" className="logo z-50 transition-transform duration-500 ease-out hover:scale-105">
            <img 
              src="/images/Mazvilla_pics/mazvilla_logo.jpeg" 
              alt="Mazville Medhaya Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-500"
            />
          </a>

          {/* Center Text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-40">
            <h1 className={`font-headings text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider transition-all duration-500 ${isMenuOpen ? 'text-white' : 'text-navy-dark'}`}>
              <span className="relative inline-block">
                <span className="relative z-10">Mazville Medhaya</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue/20 -z-10"></span>
              </span>
            </h1>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex flex-col gap-1 w-7 h-6 z-50 transition-transform duration-300 hover:scale-110 ${isMenuOpen ? 'js-menu__toggle--open' : ''}`}
            aria-label="Toggle menu"
          >
            <span className={`bar bar--top w-full h-0.5 bg-navy-dark transition-all duration-500 ease-out ${isMenuOpen ? 'bg-white rotate-45 translate-y-2' : ''}`}></span>
            <span className={`bar bar--middle w-full h-0.5 bg-navy-dark transition-all duration-500 ease-out ${isMenuOpen ? 'bg-white opacity-0' : ''}`}></span>
            <span className={`bar bar--bottom w-full h-0.5 bg-navy-dark transition-all duration-500 ease-out ${isMenuOpen ? 'bg-white -rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="js-menu__overlay"
        aria-expanded={isMenuOpen}
        className={`fixed inset-0 bg-navy-dark text-white z-40 transition-all duration-700 ease-out ${
          isMenuOpen ? 'opacity-100 backdrop-blur-md' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`flex flex-col items-center justify-center h-screen gap-8 text-fluid-lg font-headings transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="/" onClick={() => setIsMenuOpen(false)} className="transition-all duration-300 hover:text-blue hover:translate-x-2">Home</a>
          <a href="/booking" onClick={() => setIsMenuOpen(false)} className="transition-all duration-300 hover:text-blue hover:translate-x-2">Booking</a>
          <a href="/experience" onClick={() => setIsMenuOpen(false)} className="transition-all duration-300 hover:text-blue hover:translate-x-2">Experience</a>
          <a href="/terms" onClick={() => setIsMenuOpen(false)} className="transition-all duration-300 hover:text-blue hover:translate-x-2">Terms & Conditions</a>
        </div>
      </div>
    </>
  );
};

export default Header;
