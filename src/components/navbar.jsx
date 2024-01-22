import React, { useState } from 'react';
import { Link as RouterLink, Link as ScrollLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    handleMenuToggle();
  };

  const location = useLocation();

  const isMoreInfoPage = location.pathname.includes('/moreInfo');

  return (
    <>
      {console.log(location)}
      <nav className={`navbarr ${isMenuOpen ? 'open' : ''}`}>
        <div className="">
          <div className="nav_container">
            <div className="logo">
              <img src={require('../assets/logo.jpeg')} className="logo" alt="" />
            </div>
            <div className="hamburger-menu" onClick={handleMenuToggle}>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="links">
          <ul>
            <li className="nav_item">
              {isMoreInfoPage ? (
                <RouterLink to="/" className={location.pathname === '/' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  Home
                </RouterLink>
              ) : (
                <ScrollLink
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={location.pathname === '/' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  Home
                </ScrollLink>
              )}
            </li>
            <li className="nav_item">
              {isMoreInfoPage ? (
                <RouterLink to="/#event" className={location.pathname === '/event' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  Event
                </RouterLink>
              ) : (
                <ScrollLink
                  to="event"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={location.pathname === '/event' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  Event
                </ScrollLink>
              )}
            </li>
            <li className="nav_item">
              {isMoreInfoPage ? (
                <RouterLink to="/#team" className={location.pathname === '/team' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  Our Team
                </RouterLink>
              ) : (
                <ScrollLink
                  to="team"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={location.pathname === '/team' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  Our Team
                </ScrollLink>
              )}
            </li>
            <li className="nav_item">
              {isMoreInfoPage ? (
                <RouterLink to="/#about" className={location.pathname === '/about' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  About Us
                </RouterLink>
              ) : (
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={location.pathname === '/about' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  About Us
                </ScrollLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
