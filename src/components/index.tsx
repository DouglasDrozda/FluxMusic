import React from 'react';
import Header from './Header/Header';
import News from './News/News';

function Index(): JSX.Element {
  return (
    <main>
      <Header />
      <News />
    </main>
  );
}

export default Index;