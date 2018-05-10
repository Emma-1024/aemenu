import React, { Component } from 'react'
import { Route} from "react-router-dom"
import { Grid } from 'react-bootstrap'

import Home from './Home'
import Category from './Category'
import Diymenu from './Diymenu'
import RedirectExample from './test'
// import PopupLogin from './PopupLogin'

class Main extends Component{
  render(){
    return (
      <div>
        <Grid fluid>
          <Route exact path="/" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/diymenu" component={Diymenu}></Route>
          {/* <Route path="/login" component={PopupLogin}></Route> */}
          <Route path="/login" component={RedirectExample}></Route>
        </Grid>
      </div>
    )
  }
}

export default Main
