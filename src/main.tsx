import React from 'react'
import ReactDOM from 'react-dom/client'
import FluxMusic from './FluxMusic'
import { Provider } from './context/Provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <FluxMusic />
    </Provider>
  </React.StrictMode>
)
