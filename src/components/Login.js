import React, { Component } from 'react'
import PopupLogin from './PopupLogin'
import '../css/login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      showPopup: false
    }
  }
  _togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
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
}

export default Login