import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../css/diymenu.css'
import eventManager, { events } from '../common/eventModule'
import Addmenu from '../components/Addmenu'
import isAuthenticated from '../common/auth'

// TODO TEST
// import CreateBasketListJson from '../test/basketListJson'

class Diymenu extends Component {
  constructor() {
    super()
    this.state = {
      showForm: false,
      showBasket: false,
      dish: '',
      ingredientName: '',
      ingredientNum: '',
      ingredientList: [],
      isLoginResult: false,
      basketListObj: {}
    }
    this._isLoginOrNot()
  }
  render() {
    return (
      <div>
        {this.state.isLoginResult
          ?
          <div>
            <Addmenu passBasketList={this._getBasketListObj.bind(this)}></Addmenu>
            <div className="basket">
              <Button bsStyle="info" onClick={this._checkBasket.bind(this)}>查看菜篮</Button>
              {this.state.showBasket ?
                <div>
                  <ShowBasketList data={this.state.basketListObj}></ShowBasketList>
                </div>
                : null}
            </div>
          </div>
          :
          <div onClick={this._showLoginPopup.bind(this)}>定制菜单需登录,Clike me~~~</div>
        }
      </div>
    )
  }
  _showLoginPopup() {
    eventManager.publish(events.showLoginPopup)
    // this.setState({
    //   isLoginResult: true
    // })
    // console.log('333', this.state.isLoginResult)
  }
  _getBasketListObj(param) {
    this.setState({
      basketListObj: param
    })
    // console.log('basketListObj', param)
  }
  _checkBasket() {
    this.setState({
      showBasket: !this.state.showBasket
    })
    /* 可以使用localStorage存储 */
    // localStorage.setItem('basketListObj', JSON.stringify(this.basketListObj))
    // console.log(this.basketListObj)
  }
  _isLoginOrNot() {
    isAuthenticated().then(result => {
      this.setState({
        isLoginResult: result.success
      })
      console.log('isLogin', result)
    })
  }
}

class ShowBasketList extends Component {
  constructor(props) {
    super(props)
    // console.log(props.data)
    this.state = {
      data: props.data
    }
  }
  render() {
    return (
      <div>
        {this._renderBasket(this.state.data)}
      </div>
    )
  }
  _renderBasket(data) {
    var newArr = []
    var i = 0
    for (var k in data) {
      let keyprop = k
      var arr = []
      arr.push(
        <div key={i++}>
          <span className="dishName">{k}</span>
          <span className="ingredientDlete" onClick={() => { this._deleteDish(keyprop) }}> 删除</span>
        </div>
      )
      arr.push(data[k].map((item, index) => {
        return (
          <div className="ingredientBox" key={index}>
            <span className="ingredientStyle">{item.ingredientName}</span>
            <span className="ingredientStyle">{item.ingredientNum}</span>
            <span className="ingredientDlete" onClick={() => { this._deleteItem(keyprop, index) }}> 删除</span>
          </div>
        )
      }))
      newArr.push(<div key={i++} className="listItem">{arr}</div>)
    }
    return newArr
  }
  _deleteDish(keyprop) {
    delete this.state.data[keyprop]
    this.setState({
      data: this.state.data
    })
  }
  _deleteItem(keyprop, index) {
    this.state.data[keyprop].splice(index, 1)
    this.setState({
      data: this.state.data
    })
  }
}
export default Diymenu
