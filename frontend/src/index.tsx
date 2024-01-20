import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './scss/tailwind.output.scss'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);
