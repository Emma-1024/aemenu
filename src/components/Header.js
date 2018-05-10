import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import '../css/header.css'

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
                <Login></Login>
                <Register></Register>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Header