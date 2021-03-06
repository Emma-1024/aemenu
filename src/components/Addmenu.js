import React, { Component } from 'react';
import { Button, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../css/diymenu.css'
import PopupLogin from './PopupLogin'
import eventManager from '../common/eventModule'

// TODO TEST
import CreateBasketListJson from '../test/basketListJson'


class Addmenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      dish: '',
      ingredientName: '',
      ingredientNum: '',
      ingredientList: [],
    }
    this.basketListObj = CreateBasketListJson()
  }
  render() {
    return (
      <div>
        <Button onClick={() => this._toggleShow()}>点击添加菜单</Button>
        {this.state.showForm ?
          <div className="formlist">
            <form action="#" id="menuform">
              <span>(注意:输入框不能为空!)</span>
              <label htmlFor="dishes">菜名:
                    <input type="text" id="dishes" placeholder="请输入一个菜名" value={this.state.dish}
                  onChange={(e) => this._handleDish(e)} />
              </label>
              <label htmlFor="ingredient">食材:
                    <input type="text" name="ingredient" placeholder="请输入食材" value={this.state.ingredientName}
                  onChange={(e) => this._handleIngredientName(e)} />
              </label>
              <label htmlFor="num">数量:
                    <input type="text" name="num" placeholder="请输入数量" value={this.state.ingredientNum}
                  onChange={(e) => this._handleIngredientNum(e)} />
              </label>
              <ButtonToolbar>
                <OverlayTrigger placement="right" overlay={tooltip}>
                  <Button className="glyphicon glyphicon-plus" onClick={() => this._addList()}>添加到列表</Button>
                </OverlayTrigger>
              </ButtonToolbar>
              <div className="inputlist">
                {this._showList()}
              </div>
              <Button bsStyle="success" onClick={this._add2basket.bind(this)}>完成->加入菜篮</Button>
            </form>
          </div>
          : null}
        </div>
    )
  }
  _toggleShow() {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  _handleDish(e) {
    this.setState({
      dish: e.target.value
    })
  }
  _handleIngredientName(e) {
    this.setState({
      ingredientName: e.target.value
    })
  }
  _handleIngredientNum(e) {
    this.setState({
      ingredientNum: e.target.value
    })
  }
  _addList() {
    if (this.state.ingredientName.trim() === '' || this.state.ingredientNum.trim() === '') {
      return
    }
    this.state.ingredientList.push({ ingredientName: this.state.ingredientName, ingredientNum: this.state.ingredientNum })
    this.setState({ ingredientList: this.state.ingredientList })
  }
  _showList() {
    var arr = []
    this.state.ingredientList.forEach((item, index) => {
      arr.push(<ListItem key={index} name={item.ingredientName} num={item.ingredientNum}
        callback={() => this._removeItem(index)} />)
    })
    return arr
  }
  _removeItem(index) {
    this.state.ingredientList.splice(index, 1)
    this.setState({
      ingredientList: this.state.ingredientList
    })
  }
  _add2basket() {
    console.log('dish', this.basketListObj)
    if (this.state.dish.trim() === '' || this.state.ingredientName.trim() === '' || this.state.ingredientNum === '') {
      return
    }
    if (this.basketListObj.hasOwnProperty(this.state.dish)) {
      this.basketListObj[this.state.dish].push({ ingredientName: this.state.ingredientName, ingredientNum: this.state.ingredientNum })
    } else {
      this.basketListObj[this.state.dish] = this.state.ingredientList
    }
    this.setState({
      ingredientList: []
    })
    this.setState({
      ingredientName: '',
      ingredientNum: ''
    })
    this.props.passBasketList(this.basketListObj)
  }
}
const tooltip = (
  <Tooltip id="tooltip">
    <strong>可以继续添加食材!</strong> 食材添加结束后点击完成加入菜篮.
  </Tooltip>
)

class ListItem extends Component {
  render() {
    return (
      <div className="listbox">
        <span className="listitem">{this.props.name}:{this.props.num}</span>
        <span className="glyphicon glyphicon-remove" onClick={this.props.callback}></span>
      </div>
    )
  }
}

export default Addmenu
