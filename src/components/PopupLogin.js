import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
// import createHistory from "history/createBrowserHistory"
import md5 from '../utility/md5'
import eventManager from '../common/eventModule'
import getData from '../common/getData'
import '../css/popuplogin.css'

// const history = createHistory()
class PopupLogin extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          {/* from表单部分 */}
          <form id="login_form" action="#" method="post">
            <div className="loginitem">
              <input name="username" type="text" value={this.state.username} onChange={(e) => this._handleUsername(e)} placeholder="请输入用户名" />
            </div>
            <div className="loginitem">
              <input name="password" type="password" value={this.state.password} onChange={(e) => this._handlePassword(e)} placeholder="请输入密码" />
            </div>
            <div className="loginitem">
              <label>
                <input type="checkbox" className="check" />下次自动登录
              </label>
              <a href="">忘记密码?</a>
            </div>
            <div className="middle">
              <Button bsSize="large" bsStyle="info" onClick={() => this._submit()}>登录</Button>
            </div>
            <p className="middle" onClick={this._jump2register.bind(this)}>还没有账户?请先注册</p>
            <div bssize="xsmall" className="closebtn" onClick={this.props.closePopup}>
              <Glyphicon glyph="remove" />
            </div>
          </form>
          {/* 中间线 */}
          <div className="line">
            <div className="bar bartop"></div>
            <div className="login-or">OR</div>
            <div className="bar barbottom"></div>
          </div>
          {/* TODO，第三方登录部分具体功能还未开始实现 */}
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
          {/* 提示信息 */}
          <div className="tips">
            <p>{this.state.tips}</p>
          </div>
        </div>
      </div>
    )
  }
  componentWillUnmount() {
    clearTimeout(this._animateId)
  }
  _handleUsername(e) {
    this.setState({ username: e.target.value })
  }
  _handlePassword(e) {
    this.setState({ password: e.target.value })
  }
  _submit() {
    //简单验证
    //#region
    if (this.state.username === '') {
      this.setState({ tips: '用户名不能为空' })
      this._animate()
      return
    }
    var uPattern = /^[a-zA-Z0-9_]{4,20}$/
    if (!uPattern.test(this.state.username)) {
      this.setState({ tips: '用户名必须4-16位并且包含字母,数字,下划线' })
      this._animate()
      return
    }
    if (this.state.password === '') {
      this.setState({ tips: '密码不能为空' })
      this._animate()
      return
    }
    //#endregion
    // 发送请求
    let data = { username: this.state.username, password: md5(this.state.password) }
    getData.call(this, data, 'login').then((info) => {
      console.log('222',info)
      if (info.success) {
        this.setState({ tips: '登录成功!3秒后跳转页面' })
        this._animate(this.props.closePopup)
        isLogin.call(this)
      }
    })
    function isLogin(){
      eventManager.publish('isAuthenticated')
    }


    // fetch(`${process.env.REACT_APP_BASEURL}/login`)
    // .then(res => res.json())
    // .then( data => {
    //   if(data.success){
    //     console.log('已经登录了')
    //     this.props.closePopup()
    //   }
    // })
    //确定用户名是否存在，其他返回信息的话返回一个未知错误页面
    //发送fetch请求
    // 当选择了下次自动登录的时候，判断如果登录成功，就将用户名密码存入cookie中
    //TODO

  }

  /*2秒动画消失*/
  _animate(callback) {
    this._animateId = setTimeout(() => {
      this.setState({ tips: '' })
      if (callback) {
        callback()
      } else {
        return null
      }
    }, 3000)
  }
  // _togglePopup(){
  //   history.goBack()
  // }
  //TODO
  //当点击登录按钮之后，若登陆成功则返回用户信息  ？？？


  _jump2register() {
    eventManager.publish('jump2register')
    this.props.closePopup()
  }


}
export default PopupLogin
