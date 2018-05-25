import React, { Component } from 'react'
import { Grid, Row, Pagination } from 'react-bootstrap'


class PaginationComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 1,
      indexObj: { param: 'all', start: 0, end: 0 }
    }
  }

  render() {
    this._forItems()
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

  _forItems() {
    this.items = []
    let obj = this.props.data
    let totalData = obj.seasonAllData.length
    let param = obj.seasonParam
    let onePage = obj.end
    let pageNumber = Math.ceil(totalData / onePage)
    for (let number = 1; number <= pageNumber; number++) {
      this.items.push(
        <Pagination.Item
          onClick={() => this._pageClick(param, number, onePage)}
          active={number === this.state.active}
          key={number}
        >
          {number}
        </Pagination.Item>
      )
    }
  }

  _pageClick(param, pageNumber, onePage) {
    // console.log(param)
    let start = (pageNumber - 1) * onePage
    let end = start + onePage
    let obj = { param: param, start: start, end: end }
    this.setState({
      indexObj: obj,
      active: pageNumber
    }, () => {
      this.props.getPageIndex(this.state.indexObj)
    })
  }
}

export default PaginationComp
