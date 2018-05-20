import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import PopupLogin from './PopupLogin'
import eventManager,{ events } from '../common/eventModule'
import '../css/login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      showPopup: false
    }
    this._showPopup = this._showPopup.bind(this,'true')
    eventManager.subscribe(events.showLoginPopup,this._showPopup)
  }
  render() {
    return (
      <div className="loginmodel">
        <span className="login" onClick={this._togglePopup.bind(this)}>登录</span>
        {this.state.showPopup ?
          <div>
            <PopupLogin closePopup={ this._togglePopup.bind(this) }></PopupLogin>
          </div>
          : null
        }
      </div>
    )
  }
  componentWillUnmount(){
    eventManager.removeSubscriber(events.showLoginPopup, this._showPopup)
  }
  _togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
  _showPopup(boole){
    this.setState({
      showPopup: boole
    })
  }
}

export default Login