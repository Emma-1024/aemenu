import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
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
    }
  }
  render() {
    return (
      <div className="register_popup">
        <div className="register_popup_inner">
          <form id="register_form" action="#" method="post">
            <div className="registeritem">
              <input name="username" type="text" value={ this.state.username } onChange={ (e)=>this._handleUsername(e) } placeholder="请输入用户名"/>
            </div>
            <div className="registeritem">
              <input name="password" type="password" value={ this.state.password } onChange={ (e)=>this._handlePassword(e) } placeholder="请输入密码"/>
            </div>
            <div className="registeritem">
              <input type="password" value={ this.state.repassword } onChange={ (e)=>this._handleRepassword(e) } placeholder="请再次输入密码"/>
            </div>
            <div className="registeritem">
              <label>
                <input type="checkbox" className="check" value={ this.state.checked } onChange={ (e)=>this._handleCheck(e) } /> 已阅读协议 <a className="alink" href="">协议内容</a>
              </label>
            </div>
            <div className="registerbtn">
              <Button bsSize="large" bsStyle="danger" onClick={ ()=> this._submit() }>注册</Button>
            </div>
            <div bssize="xsmall" className="closebtn" onClick={this.props.closePopup}>
              <Glyphicon glyph="remove"/>
            </div>
          </form>
          {/* 提示信息 */}
          <div className="tips">
            <p>{ this.state.tips }</p>
          </div>
        </div>
      </div>
    )
  }
  _handleUsername(e) {
    this.setState({username: e.target.value})
  }
  _handlePassword(e) {
    this.setState({password: e.target.value})
  }
  _handleRepassword(e) {
    this.setState({repassword: e.target.value})
  }
  _handleCheck(e) {
    this.setState({checked: !this.state.checked})
  }

  _submit() {
  //简单验证
  //#region
    if(this.state.username === ''){
      this.setState({tips: '用户名不能为空'})
      this._animate()
      return
    }
    if(this.state.password === '' || this.state.repassword === ''){
      this.setState({tips: '密码不能为空'})
      this._animate()
      return
    }
    if(this.state.repassword !== this.state.password){
      this.setState({tips: '密码输入不一致,请重新输入'})
      this.setState({repassword: ''})
      this._animate()
      return
    }
    if(!this.state.checked){
      this.setState({tips: '同意请勾选!'})
      this._animate()
      return
    }
    //#endregion

    //发送请求
    var data = {username: this.state.username, password: this.state.password, repassword: this.state.repassword}
    fetch('http://192.168.1.44:8080/regist',{
      method: 'POST',
      body:JSON.stringify(data),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    })
    .then(responce => console.log('success', responce))
  }


  /*2秒动画消失*/
  _animate() {
    setTimeout(()=>{
      this.setState({tips: ''})
    },2000)
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

