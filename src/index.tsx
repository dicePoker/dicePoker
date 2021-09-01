import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';

function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register('/sw.js');
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}

startServiceWorker();

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
