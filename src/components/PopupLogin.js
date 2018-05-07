import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import '../css/popuplogin.css'


class PopupLogin extends Component {
  constructor() {
    super()
    this.state={
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <form id="login_form" action="#" method="post">
            <div className="loginitem">
              <input type="text" value={ this.state.username } onChange={ (e)=>this._handleUsername(e) } placeholder="请输入用户名"/>
            </div>
            <div className="loginitem">
              <input type="text" value={ this.state.password } onChange={ (e)=>this._handlePassword(e) } placeholder="请输入密码"/>
            </div>
            <div className="loginitem">
              <label>
                <input type="checkbox" className="check"/>下次自动登录
              </label>
              <a href="">忘记密码?</a>
            </div>
            <div className="loginbtn">
              <Button bsSize="large" bsStyle="info" onClick={ ()=>this._submit() }>登录</Button>
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
          {/* 提示信息 */}
          <div className="tips">
            <p>{ this.state.tips }</p>
          </div>
        </div>
      </div>
    )
  }
  componentWillUnmount() {
    clearTimeout(this._animateId)
  }
  _handleUsername(e){
    this.setState({username: e.target.value})
  }
  _handlePassword(e){
    this.setState({password: e.target.value})
  }
  _submit(){
    //简单验证
    //#region
    if(this.state.username === ''){
      this.setState({tips: '用户名不能为空'})
      this._animate()
      return
    }
    if(this.state.password === ''){
      this.setState({tips: '密码不能为空'})
      this._animate()
      return
    }
    //#endregion

    //发送fetch请求
    // 当选择了下次自动登录的时候，判断如果登录成功，就将用户名密码存入cookie中
    //TODO
  }

  /*2秒动画消失*/
  _animate() {
    this._animateId=setTimeout(()=>{
      this.setState({tips: ''})
    },2000)
  }

}
export default PopupLogin
