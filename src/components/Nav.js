import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Grid, Row } from 'react-bootstrap';
import '../css/nav.css';

// import Home from './Home';
// import Category from './Category';
// import Diymenu from './Diymenu';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      // active: ['active', '', '']
    }
  }
  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="navbar">
            <ul className="navul">
              <li>
                {/* <Link className={this.state.active[0]} onClick={() => this._changeActive(0)} to="/">首页</Link> */}
                <NavLink exact to="/" activeClassName="selected"><span>首页</span></NavLink>
              </li>
              <li>
                {/* <Link className={this.state.active[1]} onClick={() => this._changeActive(1)} to="/category">分类</Link> */}
                <NavLink to="/category" activeClassName="selected"><span>分类</span></NavLink>
              </li>
              <li>
                {/* <Link className={this.state.active[2]} onClick={() => this._changeActive(2)} to="/diymenu">DIY菜单</Link> */}
                <NavLink to="/diymenu" activeClassName="selected"><span>DIY菜单</span></NavLink>
              </li>
            </ul>
          </Row>
          {/* 暂时删除 */}
          {/* <Route exact path="/" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/diymenu" component={Diymenu}></Route> */}
        </Grid>
      </div>
    )
  }
  /*废弃方法*/
  // _changeActive(index) {
  //   var active = this.state.active
  //   active.forEach( (item,index) => {
  //     active[index] = ''
  //   })
  //   active[index] = 'active'
  //   this.setState({ active: active })
  // }
}

export default Nav
