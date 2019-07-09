import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Detail from './components/detail';
import './style/responsive.css';
import Footer from './components/footer';

class App extends Component {
  render () {

    return(
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Route exact path="/:category" component={Home} />
        <Route path="/item/:address" component={Detail} />
        
        <Footer />
      </Router>
    </React.Fragment>
  )
  }
}

export default App;
