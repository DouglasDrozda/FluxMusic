import React, { useContext } from 'react';
import context from '../../context';
import Header from '../Header/Header';
import '../../styles/Artists.css';
import InputSearchArtist from '../InputSearch/InputSearchArtist';
import Footer from '../Footer/Footer';

function Artists(): JSX.Element {
  const { dataArtists, isLoading, filterArtist } = useContext(context).context;

  return (
    <>
      <Header />
      <InputSearchArtist />
      <div className="artists-container">
        <h1 className="artists-tilte">Artistas renomados</h1>
        <ul className="artists-sub-container">
          {isLoading ? <p className="loading">Carregando...</p> :
            (filterArtist === undefined ? dataArtists : filterArtist)?.map((art) =>
              <li className="artists-card" key={art.id}>
                <h2>{art.name}</h2>
                <div className="artists-img">
                  <img src={art.img} alt={art.alt} width="300px" />
                </div>
                <p className="artists-description">{art.description}</p>
                <div className="artists-info">
                  <p><strong>Nascimento: </strong>{art.nascimento === '' ? ' Não há registro' : art.nascimento}</p>
                  <p><strong>Falecimento: </strong>{art.falecimento === '' ? ' Não há registro' : art.falecimento}</p>
                </div>
                <div className="artists-buttom">
                  <a href={art.url} target="_blank">VER MAIS</a>
                </div>
              </li>
            )}
          {filterArtist?.length === 0 && !isLoading ?
            (<h4 className="error-message">Ops, nenhum artista encontrado com esse nome 😥</h4>) : null}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Artists;
