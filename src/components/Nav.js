import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button, Grid, Row, Col, Image} from 'react-bootstrap';
import '../css/App.css';

import App from './App';
import Category from './Category';
import Diymenu from './Diymenu';

const Nav = () => (
    <div>
        <ul>
            <li>
                <Link to="/">App</Link>
            </li>
            <li>
                <Link to="/category">Category</Link>
            </li>
            <li>
                <Link to="/diymenu">Diymenu</Link>
            </li>
        </ul>
        <Route path="/category" component={Category}></Route>
        <Route path="/diymenu" component={Diymenu}></Route>
    </div>
)

export default Nav
