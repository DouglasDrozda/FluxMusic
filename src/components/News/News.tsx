import React, { useContext } from 'react';
import context from '../../context';
// import dataImages from '../../dataImages';

function News(): JSX.Element {
  const { isLoading, dataNews } = useContext(context).context;

  return (
    <section>
      {isLoading ? <p>loading....</p> :
        <div>
          {dataNews?.map((data) => (
            <div key={data.id}>
              <a href={data.url} target="_blank">{data.title}</a>
              <p>{data.subtitle}</p>
              <p>{`Escritor: ${data.writer}`}</p>
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