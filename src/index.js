import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetDisplay from './components/GetData';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <GetDisplay />
  </React.StrictMode>
);

