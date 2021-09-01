import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';

debugger;
ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.ts')
        .then(registration => {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope,
          );
        })
        .catch((error: string) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
}

// startServiceWorker();
