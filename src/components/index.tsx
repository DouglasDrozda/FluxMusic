import React from 'react';
import Header from './Header/Header';
import InputSearch from './InputSearch/InputSearch';
import News from './News/News';

function Index(): JSX.Element {
  return (
    <main>
      <Header />
      <InputSearch />
      <News />
    </main>
  );
}

export default Index;