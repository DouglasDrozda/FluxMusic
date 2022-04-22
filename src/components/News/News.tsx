import React, { useContext } from 'react';
import context from '../../context';
import '../../styles/News.css';


function News(): JSX.Element {
  const { isLoading, dataNews, filterNews } = useContext(context).context;

  return (
    <section className="news-container">
      {isLoading ? <p>loading....</p> :
        <ul className="news-sub-container">
          <h1>Notícias</h1>
          {(filterNews === undefined ? dataNews : filterNews)?.map((data) => (
            <li className="news-content-contain" id="news" key={data.id}>
              <div className="news-content">
                <div className="img-news">
                  <img src={data.img} alt={data.alt} />
                  <div className="news-infos">
                    <a href={data.url} target="_blank">{data.title}</a>
                    <p>{data.subtitle}</p>
                    <p>{`Escritor: ${data.writer}`}</p>
                    <a href={data.url} target="_blank" id="view-more">Ver mais...</a>
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
