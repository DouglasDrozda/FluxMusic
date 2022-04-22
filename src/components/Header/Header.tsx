import React from 'react';
import '../../styles/Header.css';
import logoFluxMusic from '../../images/logoFluxMusic.svg'

function Header(): JSX.Element {

  return (
    <header className="header-container">
      <div className="header-sub-container">
        <img src={logoFluxMusic} alt="logo-flux-music" width="185px" />
        <nav className="header-nav-container">
          <ul>
            <li><a href="#news">Notícias</a></li>
            <li>Artistas</li>
            <li>Disco</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
