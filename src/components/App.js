import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button, Grid, Row, Col, Carousel} from 'react-bootstrap';
import Nav from './Nav';
import '../css/App.css';
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
          <Grid fluid className="wrap">
            <Row className="App-header">
              <Col xs={2} sm={2} md={2}>
                <div className="App-logo" >
                  <img src={require("../images/img/logo.jpg")} alt="logo" style={{width: 50, height: 50, margin:'0 auto'}}/>
                </div>
              </Col> 
              <Col xs={5}>
                <div className="App-search">
                  <input type="text" className="search-info pull-left" placeholder="Search for..."/>
                  <span>
                    <button className="search-btn pull-right">Go!</button>
                  </span>
                </div>
              </Col>
              <Col xm={5}>
                <div className="App-user pull-right" >
                  <span className="login">登录</span>
                  <span className="register">注册</span>
                </div>
              </Col>
            </Row>
          </Grid>
          {/* 导航 */}
          <Grid fluid>
            <Row >
              <Nav />
            </Row>
          </Grid>
         
        </div>
      </Router>
    )
  }

}

export default App