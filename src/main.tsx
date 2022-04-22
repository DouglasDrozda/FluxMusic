import React from 'react'
import ReactDOM from 'react-dom/client'
import FluxMusic from './FluxMusic'
import { Provider } from './context/Provider';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <FluxMusic />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
