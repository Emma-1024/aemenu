import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import eventManager from '../common/eventModule'
import Login from './Login'
import Register from './Register'
import User from './User'
import '../css/header.css'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      loginState: false
    }
    this._loginState = this._loginState.bind(this, 'true')
    eventManager.subscribe('isAuthenticated', this._loginState)
  }
  componentWillUnmount() {
    eventManager.removeSubscriber('isAuthenticated', this._loginState)
  }
  render() {
    // console.log('111',this.state.loginState)
    return (
      <div>
        {/* 头部 */}
        <Grid fluid className="wrap">
          <Row className="App-header">
            <Col xs={2}>
              <div className="App-logo" >
                <img src={require("../images/img/logo.jpg")} alt="logo" style={{ width: 50, height: 50, margin: '0 auto' }} />
              </div>
            </Col>
            <Col xs={5}>
              <div className="App-search">
                <input type="text" className="search-info pull-left" placeholder="Search for..." />
                <span>
                  <button className="search-btn pull-right">Go!</button>
                </span>
              </div>
            </Col>
            <Col xs={5}>
              <div className="App-user pull-right" >
                {this.state.loginState ?
                  <User></User>
                  : (<div>
                    <Login></Login>
                    <Register></Register>
                  </div>)
                }
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  _loginState(boole) {
    this.setState({
      loginState: boole
    })
  }
}
export default Header