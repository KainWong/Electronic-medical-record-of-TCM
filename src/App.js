import React, { Component } from 'react';
// import Nav from './components/Nav/Nav';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Goods from './components/Goods/Goods';
import SlideBar from './components/SlideBar/SlideBar';
import Home from './components/Home/Home';
import {Route} from 'react-router-dom';

const list = [{
  text: 'welcome',
  url: '/welcome'
}, {
  text: 'goods',
  url: '/goods'
}];

function App() {
  return (
    <div className="App">
      <div className="nav_bar">
        <SlideBar list= {list} />
      </div>
      <div className="content">
        <Route path='/welcome' component = {Welcome} />
        <Route path='/goods' component = {Goods} />
        <Home />
      </div>
    </div>
  );
}

export default App;
