import React from 'react';
import ReactDOM from 'react-dom';
import {  
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom';  
import './index.css';
import Home from './components/Home/Home';
import Welcome from './components/Welcome/Welcome';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'element-theme-default';
import {Provider} from 'react-redux';
import {store} from './store';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div style={{display:'flex', justifyContent:'center'}}>
        <div id="mainPage" style={{width:'1000px'}}>
          <div className="head">
              <h1>中医电子病历系统</h1>
          </div>
          <div className="body">
            <Route path='/' component={Home} />
            <Route path='/welcome' component={Welcome} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
