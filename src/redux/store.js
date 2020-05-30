import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';
 /* eslint-disable */
const initialState = {
    news: {
        hits: []
    }
}

export const configureStore = (initialState = initialState) => createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        global.devToolsExtension ? global.devToolsExtension() : f => f
    )
);