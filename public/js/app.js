import React from 'react';
import Counter from './counter'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import counterReducer from './reducers';
import {Provider} from 'react-redux'

let store = createStore(counterReducer)

ReactDom.render(
    <Provider store={store}>
        <Counter/>
    </Provider>
    ,document.getElementById('app')
)