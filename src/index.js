import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the use of 'react-dom/client'
import App from './App';
import './styles/index.css';  // Assuming your CSS is in 'src/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
