import React, { useContext } from 'react';
import context from '../../context';
import Header from '../Header/Header';
import '../../styles/Discs.css';
import InputSearchDisc from '../InputSearch/InputSearchDisc';
import Footer from '../Footer/Footer';

function Discs(): JSX.Element {
  const { dataDiscs, isLoading, filterDiscs } = useContext(context).context;

  return (
    <>
      <Header />
      <InputSearchDisc />
      <div className="discs-container">
        <h1 className="discs-tilte">Discos</h1>
        <ul className="discs-sub-container">
          {isLoading ? <p className="loading">Carregando...</p> :
            (filterDiscs === undefined ? dataDiscs : filterDiscs)?.map((disc) =>
              <li className="discs-card" key={disc.id}>
                <h2>{disc.title}</h2>
                <div className="discs-img">
                  <img src={disc.img} alt={disc.alt} width="300px" />
                </div>
                <p className="discs-description">{disc.description}</p>
                <p><strong>Data de lançamento:</strong> {`${disc.release_date}`}</p>
                <div className="discs-buttom">
                  <a href={disc.link} target="_blank">VER MAIS</a>
                </div>
              </li>
            )}
          {filterDiscs?.length === 0 && !isLoading ?
            (<h4 className="error-message">Ops, nenhum disco encontrado com esse nome 😥</h4>) : null}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Discs;
