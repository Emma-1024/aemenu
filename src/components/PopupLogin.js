import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import '../css/popuplogin.css'


class PopupLogin extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <form id="login_form" action="#" method="post">
            <div className="loginitem">
              <input type="text" placeholder="请输入用户名"/>
            </div>
            <div className="loginitem">
              <input type="text" placeholder="请输入密码"/>
            </div>
            <div className="loginitem">
              <label>
                <input type="checkbox" className="check"/>下次自动登录
              </label>
              <a href="">忘记密码?</a>
            </div>
            <div className="loginbtn">
              <Button bsSize="large" bsStyle="info">登录</Button>
            </div>
            <div bssize="xsmall" className="closebtn" onClick={this.props.closePopup}>
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
export default PopupLogin
