import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const defaultState = {
    news: {
        hits: []
    }
}

export const configureStore = (initialState = defaultState) => createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        global.devToolsExtension ? global.devToolsExtension() : f => f
    )
);