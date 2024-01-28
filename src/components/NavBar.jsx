import React, { useState } from 'react';
import '../styles/navbar.css';

const HeaderComponent = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const animateAndOpenMenuIcon = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <header className="header-navbar">
      <h1 className="header-title">Xavi Fernández</h1>
      <div className="ham-menu" onClick={animateAndOpenMenuIcon}>
        <span className={`line1-ham-menu ${isMenuActive ? 'active-line1-ham-menu' : ''}`}></span>
        <span className={`line2-ham-menu ${isMenuActive ? 'active-line2-ham-menu' : ''}`}></span>
        <span className={`line3-ham-menu ${isMenuActive ? 'active-line3-ham-menu' : ''}`}></span>
      </div>
      <nav className={`nav ${isMenuActive ? 'active' : ''}`}>
        <ul className="ul">
          <li className="li"><a href="/" className="a">Desarrollo</a></li>
          <li className="li"><a href="/about" className="a">Literatura</a></li>
          <li className="li"><a href="/" className="a">Artes Visuales</a></li>
          <li className="li"><a href="/" className="a">Home</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
