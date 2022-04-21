import React, { useContext } from 'react';
import context from '../../context';
import '../../styles/News.css';
// import dataImages from '../../dataImages';

function News(): JSX.Element {
  const { isLoading, dataNews } = useContext(context).context;

  return (
    <section className="news-container">
      {isLoading ? <p>loading....</p> :
        <div className="news-sub-container">
          <h1>Notícias</h1>
          {dataNews?.map((data) => (
            <div className="news-content-contain" key={data.id}>
              <div className="news-content">
                <a href={data.url} target="_blank">{data.title}</a>
                <p>{data.subtitle}</p>
                <p>{`Escritor: ${data.writer}`}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </section>
  );
};

export default News;
// {dataImages?.map((img) => (
//   <img src={img.url} alt="test" width="300px" height="200px" />
// ))}