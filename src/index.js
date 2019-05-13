import React from 'react';
import ReactDOM from 'react-dom';
import {  
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom';  
import './index.css';
import Home from './components/Home/Home';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'element-theme-default';
import {Provider} from 'react-redux';
import {store} from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
