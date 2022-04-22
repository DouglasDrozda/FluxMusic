import React, { useContext } from 'react';
import context from '../../context';
import '../../styles/News.css';


function News(): JSX.Element {
  const { isLoading, dataNews, filterNews } = useContext(context).context;

  return (
    <section className="news-container">
      {isLoading ? <p>loading....</p> :
        <div className="news-sub-container">
          <h1>Notícias</h1>
          {(filterNews === undefined ? dataNews : filterNews)?.map((data) => (
            <div className="news-content-contain" id="news" key={data.id}>
              <div className="news-content">
                <a href={data.url} target="_blank">{data.title}</a>
                <div className="img-news">
                  <img src={data.img} alt={data.alt} />
                </div>
                <p>{data.subtitle}</p>
                {/* <div dangerouslySetInnerHTML={{__html: data.content}}>
                  
                </div> */}
                <p>{`Escritor: ${data.writer}`}</p>
                <a href={data.url} target="_blank" id="view-more">Ver mais...</a>
              </div>
            </div>
          ))}
        </div>
      }
    </section>
  );
};

export default News;
