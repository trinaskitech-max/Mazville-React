import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white content-info bg-navy-dark transition-all duration-500">
      <h2 className="w-full py-16 text-center">
        <Link className="block" to="/">
          <img 
            src="/images/Mazvilla_pics/mazvilla_logo.jpeg" 
            alt="Mazville Medhaya" 
            className="h-16 sm:h-20 w-auto mx-auto object-contain transition-all duration-500 hover:scale-105"
          />
          <span className="sr-only">Mazville Medhaya - Home</span>
        </Link>
      </h2>
      
      <div className="flex flex-col gap-16 pb-16 mx-auto px-fluid-sm md:flex-row max-w-7xl">
        {/* Contact */}
        <div className="space-y-5 text-center md:text-left contact">
          <h3 className="text-2xl">Contact</h3>
          <p>
            <a href="tel:+918123456789" className="transition-all duration-300 hover:text-blue hover:translate-x-1 inline-block">+91 81234 56789</a><br />
            <em><a className="transition-all duration-500 hover:text-blue hover:translate-x-1 inline-block" href="mailto:info@mazvillemedhaya.com">info@mazvillemedhaya.com</a></em>
          </p>
          <p>
            Check-in: 2PM<br />
            Check-out: 12PM
          </p>
        </div>

        {/* Visit */}
        <div className="space-y-5 text-center md:text-left address">
          <h3 className="text-2xl">Visit</h3>
          <p className="">
            Thottam Beach Road, Thottam<br />
            Badanidiyoor, Udupi<br />
            Karnataka 576108
          </p>
          <p className="">
            <a href="https://maps.app.goo.gl/YzavfZ18H8VVZ8eR6" className="block" target="_blank" rel="noopener noreferrer">
              <span className="font-mono transition-colors duration-500 hover:text-blue">Get Directions</span>
            </a>
            <Link to="/booking" className="block">
              <span className="font-mono transition-colors duration-500 hover:text-blue">Make a Reservation</span>
            </Link>
            <Link to="/experience" className="block">
              <span className="font-mono transition-colors duration-500 hover:text-blue">Our Experience</span>
            </Link>
          </p>
        </div>

        {/* Mailing List */}
        <div className="px-4 space-y-5 text-center md:ml-auto mailing-list md:text-left sm:px-0">
          <h3 className="text-2xl">Stay Updated</h3>
          <form
            action="#subscribe"
            method="post"
            className="flex"
          >
            <input
              type="email"
              placeholder="Email Address"
              name="EMAIL"
              className="px-6 py-3 font-mono text-white text-fluid-sm bg-white/10 scooped scooped--left"
              required
            />
            <input
              type="submit"
              value="Join"
              className="w-full px-6 py-3 font-mono transition-all duration-500 ease-out bg-white cursor-pointer button text-fluid-sm text-navy-dark hover:bg-blue hover:border-blue hover:shadow-lg hover:scale-105 transform scooped scooped--right"
            />
          </form>
          
          {/* Social Media */}
          <nav className="w-full">
            <ul className="flex items-center justify-center sm:justify-start gap-6 pt-4">
              <li>
                <a target="_blank" href="https://www.instagram.com/stagecoachsalado/" rel="noopener noreferrer">
                  <span className="sr-only">Stagecoach Inn on Instagram</span>
                  {/* Instagram Icon */}
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/stagecoachsaladotx/" rel="noopener noreferrer">
                  <span className="sr-only">Stagecoach Inn on Facebook</span>
                  {/* Facebook Icon */}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy">
        <div className="flex flex-col justify-between gap-4 px-8 py-8 mx-auto text-center sm:flex-row max-w-7xl">
          <div className="flex justify-center gap-fluid-sm sm:justify-start">
            {/* Affiliate Logos */}
          </div>
          <div className="flex flex-wrap items-center justify-center font-mono text-xs gap-x-4 gap-y-8 sm:justify-end sm:flex-row text-blue">
            <nav className="w-full sm:order-0">
              <ul className="flex flex-wrap justify-center sm:justify-end gap-6 items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </nav>
            <p className="sm:order-3">Crafted with ❤️ in Karnataka</p>
            <p className="sm:order-1">&copy; 2025 Mazville Medhaya.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
