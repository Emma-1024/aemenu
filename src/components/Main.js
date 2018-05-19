import React, { Component } from 'react'
import { Switch, Route} from "react-router-dom"
import { Grid } from 'react-bootstrap'
import LoginProtect from './LoginProtect'
import isLogin from '../common/IsLogin'

import Home from './Home'
import Category from './Category'
import Diymenu from './Diymenu'
import NoMatch from './NoMatch'
import '../css/main.css'

class Main extends Component{
  render(){
    // let isLoginResult;
    // isLogin().then(result=> {
    //   isLoginResult=result
    //   console.log(isLoginResult)
    // })
    return (
      <div>
        <Grid fluid className="main-margin">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/category" component={Category}></Route>
            {/* <LoginProtect></LoginProtect> */}
            <Route path="/diymenu" component={Diymenu}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Grid>
      </div>
    )
  }
}

export default Main
