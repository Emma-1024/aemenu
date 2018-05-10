import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
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
                <NavLink exact to="/" activeClassName="selected"><span>首页</span></NavLink>
              </li>
              <li>
                <NavLink to="/category" activeClassName="selected"><span>分类</span></NavLink>
              </li>
              <li>
                <NavLink to="/diymenu" activeClassName="selected"><span>DIY菜单</span></NavLink>
              </li>
              <li>
                <NavLink to="/login" activeClassName="selected"><span>RedirectExample</span></NavLink>
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
}

export default Nav
