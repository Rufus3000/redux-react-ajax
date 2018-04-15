import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {Provider} from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const storeMW = applyMiddleware(promiseMiddleware())(createStore)(reducer, DEFAULT_STATE);
const DEFAULT_STATE = {
    polls: [],
    options: [],
    selected: false,

};
render(
    <Provider store={storeMW}>
        <App/>
    </Provider>,
    document.getElementById('root')
)