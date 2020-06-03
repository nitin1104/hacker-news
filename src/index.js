import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global-styles/global-styles.scss';
import App from './App';
import { configureStore } from './redux/store';
import { Provider} from 'react-redux';

const store = configureStore(window.newsData);

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/sw.js').then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }

ReactDOM.hydrate(<Provider store = {store}><App /></Provider>,document.getElementById('root'))