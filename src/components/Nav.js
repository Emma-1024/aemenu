import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Row } from 'react-bootstrap';
import '../css/nav.css';

// import Home from './Home';
// import Category from './Category';
// import Diymenu from './Diymenu';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      active: ['active', '', '']
    }
  }
  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="navbar">
            <ul className="navul">
              <li>
                <Link className={this.state.active[0]} onClick={() => this._changeActive(0)} to="/">首页</Link>
              </li>
              <li>
                <Link className={this.state.active[1]} onClick={() => this._changeActive(1)} to="/category">分类</Link>
              </li>
              <li>
                <Link className={this.state.active[2]} onClick={() => this._changeActive(2)} to="/diymenu">DIY菜单</Link>
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
  _changeActive(index) {
    var active = this.state.active
    active.forEach( (item,index) => {
      active[index] = ''
    })
    active[index] = 'active'
    this.setState({ active: active })
  }
}

export default Nav
