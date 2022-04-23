import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';
import logoFluxMusic from '../../images/logoFluxMusic.svg'
import logoDouglas from '../../images/logoDouglas.svg'

function Footer(): JSX.Element {

  return (
    <footer className="footer-container">
      <div className="footer-sub-container">
        <Link to="/">
          <img src={logoFluxMusic} alt="logo-flux-music" width="185px" />
        </Link>
        <p>Flux Music © 2022 Todos os direitos Reservados.</p>
        <div className="footer-development">
          <p>Desenvolvido por</p>
          <img src={logoDouglas} alt="logo-douglas" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
