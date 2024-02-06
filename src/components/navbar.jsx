import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/" className={location.pathname === '/' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  Home
                </Link>
              ) : (
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={location.pathname === '/' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              )}
            
            </li>
            <li className="nav_item">
              {isMoreInfoPage ? (
                <Link to="/" className={location.pathname === '/event' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  Event
                </Link>
              ) : (
                <a
                  href='#event'
                  className={location.pathname === '/#event' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  Event
                </a>
              )}
              
            </li>
            <li className="nav_item">
            {isMoreInfoPage ? (
                <Link to="/" className={location.pathname === '/team' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  Our Team
                </Link>
              ) : (
                <a
                  href='#team'
                  className={location.pathname === '/#team' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  Our Team
                </a>
              )}
              
            </li>
            <li className="nav_item">
            {isMoreInfoPage ? (
                <Link to="/" className={location.pathname === '/aboutus' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  About Us
                </Link>
              ) : (
                <a
                  href='#about'
                  className={location.pathname === '/#about' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  About Us
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
