import React, { Component } from 'react';
// import Nav from './components/Nav/Nav';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Goods from './components/Goods/Goods';
import SlideBar from './components/SlideBar/SlideBar';
import Home from './components/Home/Home';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';


const list = [{
  text: 'welcome',
  url: '/welcome'
}, {
  text: 'goods',
  url: '/goods'
}];

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="App">
        {/* <div className="nav_bar">
          <SlideBar list= {list} />
        </div> */}
        <div className="content">
        <Link to="/home/" >aa</Link>
        <Link to="/welcome/" >bb</Link>
          {/* <Route path='/welcome' component = {Welcome} />
          <Route path='/goods' component = {Goods} /> */}
          {/* <Home /> */}
        </div>
      </div>
    );
  }
}

export default App;
