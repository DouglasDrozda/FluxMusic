import React from 'react';
import Header from '../Header/Header';
import InputSearch from '../InputSearch/InputSearch';
import News from '../News/News';
import Footer from '../Footer/Footer';

function Feed(): JSX.Element {
  return (
    <main>
      <Header />
      <InputSearch />
      <News />
      <Footer />
    </main>
  );
}

export default Feed;