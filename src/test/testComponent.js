import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Ttest from './ttest'

class TestComponent extends Component {
  render() {
    return (
      <div>
        <Button onClick={this._test.bind(this)}>test</Button>
        <Button onClick={this._logout.bind(this)}>logout</Button>
        {/* <Ttest></Ttest> */}
      </div>
    )
  }

  _test() {
    fetch(`${process.env.REACT_APP_BACKENDURL}/test`,
      {
        method: 'GET',
        credentials: 'include',
        // body: JSON.stringify(data),
        // headers: new Headers({
        //   'Content-Type': 'application/json'
        // })
      })
      .then(res => res.json())
      .then(info => {
        console.log(info)
      })
  }

  _logout() {
    fetch(`${process.env.REACT_APP_BACKENDURL}/logout`,
      {
        method: 'GET',
        credentials: 'include',
        // body: JSON.stringify(data),
        // headers: new Headers({
        //   'Content-Type': 'application/json'
        // })
      })
      .then(res => res.json())
      .then(info => {
        console.log(info)
      })
  }
}

export default TestComponent
