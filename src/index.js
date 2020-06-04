import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global-styles/global-styles.scss';
import App from './App';
import { configureStore } from './redux/store';
import { Provider} from 'react-redux';

const store = configureStore(window.newsData);

ReactDOM.hydrate(<Provider store = {store}><App /></Provider>,document.getElementById('root'))