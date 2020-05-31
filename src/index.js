import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global-styles/global-styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux/store';
import { Provider} from 'react-redux';

const store = configureStore(window.newsData);

const pageChanged = (latestNews)=> {
    store.dispatch({
        type: 'FETCH_NEWS',
        payload: latestNews
    })
}

ReactDOM.hydrate(
                <Provider store = {store}>
                    <App onPageChange = {pageChanged}/>
                </Provider>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
