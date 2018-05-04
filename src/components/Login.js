import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap';
import '../css/index.css'
import '../css/login.css'

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <form id="login_form" action="#" method="post">
            <div className="loginitem">
              <input type="text" placeholder="&nbsp;&nbsp;请输入邮箱或用户名"/>
            </div>
            <div className="loginitem">
              <input type="text" placeholder="&nbsp;&nbsp;请输入密码"/>
            </div>
            <div className="loginitem">
              <label>
                <input type="checkbox" className="check"/>下次自动登录
              </label>
              <a href="">忘记密码?</a>
            </div>
            <div className="loginbtn">
              <Button bsStyle="info">登录</Button>
            </div>
            <div bsSize="xsmall" className="closebtn" onClick={this.props.closePopup}>
              <Glyphicon glyph="remove"/>
            </div>
          </form>
          <div className="line">
            <div className="bar bartop"></div>
            <div className="login-or">OR</div>
            <div className="bar barbottom"></div>
          </div>
          <div className="login-social-buttons">
            <a href="" className="social">
              <div className="bmg"></div>
              <span>Login with Wechat</span>
            </a>
            <a href="" className="social">
              <div className="bmg"></div>
              <span>Login with QQ</span>
            </a>
            <a href="" className="social">
              <div className="bmg"></div>
              <span>Login with Weibo</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

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
          <Popup
            closePopup={this._togglePopup.bind(this)}
          ></Popup>
          : null
        }
      </div>
    )
  }
}

export default Login