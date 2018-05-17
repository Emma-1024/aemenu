import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import '../css/user.css'
import defaultPhoto from '../images/img/default.png'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUserList: false
    }
  }
  render() {
    return (
      <div>
        <div className="user-wrap">
          <div className="avatar pull-left">
            <img src={defaultPhoto} alt="" />
          </div>
          <div className="userinfo pull-left">
            <span onClick={this._showUserList.bind(this)}>个人中心</span>
          </div>
        </div>
        {this.state.showUserList ?
          <div className="info-list">
            <div>
              <Glyphicon glyph="user" /><span>我的资料</span>
            </div>
            <div>
              <Glyphicon glyph="heart" /><span>我的喜欢</span>
            </div>
            <div>
              <Glyphicon glyph="th-list" /><span>我的收藏</span>
            </div>
            <div>
              <Glyphicon glyph="cog" /><span>设置</span>
            </div>
            <div>
              <Glyphicon glyph="info-sign" /><span>关于</span>
            </div>
            <div>
              <Glyphicon glyph="log-out" onClick={this._logout.bind(this)} /><span>登出</span>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
  _showUserList() {
    this.setState({
      showUserList: !this.state.showUserList
    })
  }
  _logout() {
    
  }
}

export default User