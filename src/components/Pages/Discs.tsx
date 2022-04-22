import React, { useContext } from 'react';
import context from '../../context';
import Header from '../Header/Header';
import '../../styles/Discs.css';
import InputSearchDisc from '../InputSearch/InputSearchDisc';

function Discs(): JSX.Element {
  const { dataDiscs, isLoading, filterDiscs } = useContext(context).context;

  return (
    <>
      <Header />
      <InputSearchDisc />
      <ul className="discs-container">
        {isLoading ? <p>Loading...</p> :
          (filterDiscs === undefined ? dataDiscs: filterDiscs)?.map((disc) =>
            <li className="discs-card" key={disc.id}>
              <h1>{disc.title}</h1>
              <div className="discs-img">
                <img src={disc.img} alt={disc.alt} width="300px" />
              </div>
              <p className="discs-description">{disc.description}</p>
              <p>{`Data de lançamento: ${disc.release_date}`}</p>
              <div className="discs-buttom">
                <a href={disc.link} target="_blank">SAIBA MAIS...</a>
              </div>
            </li>
          )}
      </ul>
    </>
  );
};

export default Discs;
