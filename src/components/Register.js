import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import '../css/register.css'

class Popup extends Component {
  render() {
    return (
      <div className="register_popup">
        <div className="register_popup_inner">
          <form id="register_form" action="#" method="post">
            <div className="registeritem">
              <input type="text" placeholder="请输入用户名"/>
            </div>
            <div className="registeritem">
              <input type="text" placeholder="请输入密码"/>
            </div>
            <div className="registeritem">
              <input type="text" placeholder="请再次输入密码"/>
            </div>
            <div className="registeritem">
              <label>
                <input type="checkbox" className="check"/> 已阅读协议 <a className="alink" href="">协议内容</a>
              </label>
            </div>
            <div className="registerbtn">
              <Button bsSize="large" bsStyle="danger">注册</Button>
            </div>
            <div bssize="xsmall" className="closebtn" onClick={this.props.closePopup}>
              <Glyphicon glyph="remove"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

class Register extends Component {
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
      <div className="registermodel">
        <span className="login" onClick={this._togglePopup.bind(this)}>注册</span>
        {this.state.showPopup ?
          <Popup
            closePopup={this._togglePopup.bind(this)}
          ></Popup>
          : null
        }
      </div>
    )
  }
}

export default Register

