import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid } from 'react-bootstrap';

import Home from './Home';
import Category from './Category';
import Diymenu from './Diymenu';

class Main extends Component{
  render(){
    return (
      <div>
        <Grid fluid>
          <Route exact path="/" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/diymenu" component={Diymenu}></Route>
        </Grid>
      </div>
    )
  }
}

export default Main