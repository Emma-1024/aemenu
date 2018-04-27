import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button, Grid, Row, Col, Carousel} from 'react-bootstrap';
import Header from './Header';
import Nav from './Nav';
import '../css/index.css';

// for temporal use
import week1 from '../images/img/week1.png'
import week2 from '../images/img/week2.png'
import week3 from '../images/img/week3.png'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* 头部 */}
            <Header></Header>
          {/* 导航 */}
            <Nav></Nav>
        </div>
      </Router>
    )
  }

}

export default App