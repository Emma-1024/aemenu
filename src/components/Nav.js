import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button, Grid, Row, Col, Image} from 'react-bootstrap';
import '../css/nav.css';

import Home from './Home';
import Category from './Category';
import Diymenu from './Diymenu';

const Nav = () => (
    <div className="navbar">
        <ul className="navul">
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/category">分类</Link>
            </li>
            <li>
                <Link to="/diymenu">DIY菜单</Link>
            </li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route path="/category" component={Category}></Route>
        <Route path="/diymenu" component={Diymenu}></Route>
    </div>
)

export default Nav
