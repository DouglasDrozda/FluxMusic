import React, { useContext } from 'react';
import context from '../../context';
import '../../styles/News.css';


function News(): JSX.Element {
  const { isLoading, dataNews, filterNews } = useContext(context).context;

  return (
    <section className="news-container">
      <h1 className="news-tilte">Notícias</h1>
      {isLoading ? <p className="loading">Carregando...</p> :
        <ul className="news-sub-container">
          {(filterNews === undefined ? dataNews : filterNews)?.map((data) => (
            <li className="news-content-contain" key={data.id}>
              <div className="news-content">
                <div className="img-news">
                  <img src={data.img} alt={data.alt} />
                  <div className="news-infos">
                    <h2>{data.title}</h2>
                    <p>{data.subtitle === '' ? 'Não há dados.' : data.subtitle}</p>
                    <p><strong>Escritor: </strong>{data.writer}</p>
                    <a href={data.url} target="_blank" id="view-more">Ver mais</a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
      <div className="error-message-contain">
        {filterNews?.length === 0 && !isLoading ?
          (<h4 className="error-message">Ops, nenhuma notícia encontrada com esse nome 😥</h4>) : null}
      </div>
    </section>
  );
};

export default News;
