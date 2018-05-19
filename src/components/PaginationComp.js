import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { Pagination } from "react-bootstrap";

class PaginationComp extends Component {
  constructor() {
    super()
    this.state = {
      active: 1
    }
    this._forItems()
  }
  render() {
    return (
      <div>
        <Grid container="true">
            <Row>
              <Pagination bsSize="large">{this.items}</Pagination>
              <br />
            </Row>
        </Grid>
      </div>
    )
  }
  _forItems(page) {
    this.items = []
    fetch(`${process.env.REACT_APP_BASEURL}/all`)
      .then(res => res.json())
      .then(info => {
        let onePage = 8
        let totalData = info.length
        let pageNumber = Math.ceil(totalData / onePage)
        for (let number = 1; number <= pageNumber; number++) {
          this.items.push(
            <Pagination.Item onClick={ ()=>this._pageClick(totalData, pageNumber, onePage, number)} active={number === this.state.active} key={number}>{number}</Pagination.Item>
          )
        }
        this.setState({
          active: 1
        })
      })
  }
  _pageClick(totalData, pageNumber, onePage, number){
    //1--7 2--13 3--23
    //如果是第二页那么25-（2-1）*8=17   25/3=4
  }
}

export default PaginationComp
