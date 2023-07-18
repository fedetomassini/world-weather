import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Assets/Styles/Index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);