import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { MoviesProvider } from './components/Movies/MoviesContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoviesProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </MoviesProvider>
  </React.StrictMode>
);
