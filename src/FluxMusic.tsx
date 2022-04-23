import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './components/Pages/Feed';
import Artists from './components/Pages/Artists';
import Discs from './components/Pages/Discs';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/discs" element={<Discs />}></Route>
      </Routes>
    </div>
  )
}

export default App
