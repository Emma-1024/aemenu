import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button, Grid, Row, Col, Image} from 'react-bootstrap';
import Nav from './Nav';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Grid fluid>
          {/* 头部 */}
            <Row className="App-header">
              <Col xs={2} >
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
          <Grid container>
            <Nav />
          </Grid>
          <h3>111</h3>
          
        </div>
      </Router>

      
       
       
    )
  }
}

export default App