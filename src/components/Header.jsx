import React from 'react';
import '../styles/Header.module.css';

const Header = () => {
 
  return (
    <header className='header'>
        <div className="title-container">
            <h1 className='title-header-h1'>Header</h1>
        </div>
        <div className='main-banner'>
            Esto es un banner
        </div>
    </header>
  );
};

export default Header;
