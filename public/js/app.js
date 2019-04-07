import React from 'react';
import Hello from './Hello';
import Counter from './counter';
import ReactDom from 'react-dom'
import {createStore, combineReducers} from 'redux'
import counterReducer from './reducers';
import {Provider} from 'react-redux'
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';
import {syncHistoryWithStore , routerReducer  } from "react-router-redux";
import MainComponent from './MainComponent'

let store = createStore(combineReducers({
    number:counterReducer,
    routing:routerReducer
}))

const history = syncHistoryWithStore(browserHistory,store)
ReactDom.render(
    <Provider store={store}>
       <Router history={history}>
          <Route path="/" component={MainComponent}>
             <IndexRoute component={Counter}/>
             <Route path='welcome' component={Hello}/>
          </Route>
       </Router>
    </Provider>
    ,document.getElementById('app')
)