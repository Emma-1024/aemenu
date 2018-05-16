import React, { Component } from 'react'
import PopupLogin from './PopupLogin'
import '../css/popuplogin.css'

class LoginProtect extends Component {
  constructor() {
    super()
    this.state = {
      showPopup: true
    }
  }
  render() {
    if (this.state.showPopup) {
      return (
        <div>
          {this._LoginProtect() ? null : <PopupLogin closePopup={this._togglePopup.bind(this)}></PopupLogin>}
        </div>
      )
    } else {
      return null
    }
  }
  _togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
  _LoginProtect() {
    fetch(`${process.env.REACT_APP_BASEURL}/login`)
      .then(res => res.json())
      .then(data => {
        if (!data.success) {
          //未登录
          return false
        }
        return true
      })
  }
}

export default LoginProtect