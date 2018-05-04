import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/header.css';
import Login from './Login';

class Header extends Component {
  render() {
    return (
      <div>
        {/* 头部 */}
        <Grid fluid className="wrap">
          <Row className="App-header">
            <Col xs={2}>
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
            <Col xs={5}>
              <div className="App-user pull-right" >
                {/* <span className="login" onClick={ () => this._loginModel() }>登录</span> */}
                <Login></Login>
                <span className="register">注册</span>
              </div>
            </Col>
          </Row>
        </Grid>
        {/* <Login></Login> */}
      </div>
    )
  }
  // _loginModel() {
  // }
}
export default Header