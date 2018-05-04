import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button, Grid, Row, Col, Carousel} from 'react-bootstrap';
import Header from './Header';
import Nav from './Nav';
// import Main from './Main';
import Home from './Home';
import Category from './Category';
import Diymenu from './Diymenu';
import Footer from './Footer';
// import '../css/index.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* 头部 */}
            <Header></Header>
          {/* 导航 */}
            <Nav></Nav>
          {/* 主体内容区域 */}
            {/* <Main></Main> */}
          {/* 尾部 */}
            <Footer></Footer>
        </div>
      </Router>
    )
  }

}

export default App