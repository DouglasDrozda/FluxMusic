import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './components';
import Artists from './components/Pages/Artists';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
      </Routes>
    </div>
  )
}

export default App
