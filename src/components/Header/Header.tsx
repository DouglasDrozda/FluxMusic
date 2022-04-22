import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';
import logoFluxMusic from '../../images/logoFluxMusic.svg'

function Header(): JSX.Element {

  return (
    <header className="header-container">
      <div className="header-sub-container">
        <img src={logoFluxMusic} alt="logo-flux-music" width="185px" />
        <nav className="header-nav-container">
          <ul>
            <li><Link to="/">Notícias</Link></li>
            <li><Link to="/artists">Artistas</Link></li>
            <li><Link to="/disc">Disco</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
