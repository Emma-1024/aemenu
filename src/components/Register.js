import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import md5 from '../utility/md5'
import eventManager,{ events } from '../common/eventModule'
import getData from '../common/getData'
import '../css/register.css'

class Popup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      repassword: '',
      tips: '',
      checked: false,
      resinfo: '',
    }
  }
  render() {
    return (
      <div className="register_popup">
        <div className="register_popup_inner">
          <form id="register_form" action="#" method="post">
            <div className="registeritem">
              <input name="username" type="text" value={this.state.username} onChange={(e) => this._handleUsername(e)} placeholder="请输入用户名" />
            </div>
            <div className="registeritem">
              <input name="password" type="password" value={this.state.password} onChange={(e) => this._handlePassword(e)} placeholder="请输入密码" />
            </div>
            <div className="registeritem">
              <input type="password" value={this.state.repassword} onChange={(e) => this._handleRepassword(e)} placeholder="请再次输入密码" />
            </div>
            <div className="registeritem">
              <label>
                <input type="checkbox" className="check" value={this.state.checked} onChange={(e) => this._handleCheck(e)} /> 已阅读协议 <a className="alink" href="">协议内容</a>
              </label>
            </div>
            <div className="registerbtn">
              <Button bsSize="large" bsStyle="danger" onClick={() => this._submit()}>注册</Button>
            </div>
            <div bssize="xsmall" className="closebtn" onClick={this.props.closePopup}>
              <Glyphicon glyph="remove" />
            </div>
          </form>
          {/* 提示信息 */}
          <div className="tips">
            <p>{this.state.tips}</p>
          </div>
        </div>
      </div>
    )
  }
  // 避免关闭model的时候，动画还没完成。卸载动画
  componentWillUnmount() {
    clearTimeout(this._animateId)
  }
  _handleUsername(e) {
    this.setState({ username: e.target.value })
  }
  _handlePassword(e) {
    this.setState({ password: e.target.value })
  }
  _handleRepassword(e) {
    this.setState({ repassword: e.target.value })
  }
  _handleCheck(e) {
    this.setState({ checked: !this.state.checked })
  }

  _submit() {
    //简单验证
    //#region
    if (this.state.username === '') {
      this.setState({ tips: '用户名不能为空' })
      this._animate()
      return
    }
    if (this.state.password === '' || this.state.repassword === '') {
      this.setState({ tips: '密码不能为空' })
      this._animate()
      return
    }
    if (this.state.repassword !== this.state.password) {
      this.setState({ tips: '密码输入不一致,请重新输入' })
      this.setState({ repassword: '' })
      this._animate()
      return
    }
    if (!this.state.checked) {
      this.setState({ tips: '同意请勾选!' })
      this._animate()
      return
    }
    //#endregion

    //发送请求
    let data = { username: this.state.username, password: md5(this.state.password) }
    getData.call(this, data, 'regist').then((info) => {
      // console.log(info)
      if (info.success) {
        this.setState({ tips: '恭喜注册成功!3秒后跳转页面' })
        this._animate(this.props.closePopup)
      }
      if (info.code === 1003) {
        this.setState({ tips: '用户名已存在，请重新注册' })
        this._animate()
        this.setState({
          username: '',
          password: '',
          repassword: '',
        })
      }
    })

    // fetch(`${process.env.REACT_APP_BACKENDURL}/regist`, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // })
    //   .then(res => res.json())
    //   .then(info => {
    //     if (info.success) {
    //       this.setState({ tips: '恭喜注册成功!3秒后跳转页面' })
    //       this._animate(this.props.closePopup)
    //     }
    //   })
    // async function reqRegist(data) {
    //   let result = fetch(`${process.env.REACT_APP_BACKENDURL}/regist`, {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: new Headers({
    //       'Content-Type': 'application/json'
    //     })
    //   })
    //   let info = await ((await result).json())
    //   if (info.success) {
    //     this.setState({ tips: '恭喜注册成功!3秒后跳转页面' })
    //     this._animate(this.props.closePopup)
    //     // this._closePopup(this.props.closePopup)
    //   }
    //   if (info.code === 1003) {
    //     this.setState({ tips: '用户名已存在，请重新注册' })
    //     this._animate()
    //     this.setState({
    //       username: '',
    //       password: '',
    //       repassword: '',
    //     })
    //   }
    // }

    //注册成功跳转home页，显示头像？？？？
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
}

class Register extends Component {
  constructor() {
    super()
    this.state = {
      showPopup: false
    }
    this._showRejester = this._showRejester.bind(this, 'true')
    eventManager.subscribe(events.jump2register, this._showRejester)
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
  componentWillUnmount() {
    eventManager.removeSubscriber(events.jump2register, this._showRejester)
  }
  _togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
  _showRejester(boole) {
    this.setState({
      showPopup: boole
    })
  }
}

export default Register
