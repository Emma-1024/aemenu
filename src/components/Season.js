import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ShowCategoryData from '../components/ShowCategoryData'
import PaginationComp from '../components/PaginationComp'
import getUrl from '../common/getUrlSearchKey'


class Season extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seasonData: []
    }
    this.prevFetchState = null
    this.date = new Date()
  }

  detectData(objKey) {
    if (this.props.location.search === '') {
      if (this.prevFetchState === '' && Date.now() - this.date < 600000) return
      this.prevFetchState = ''
      this.date = new Date()
      this.fetchData('all')
    } else {
      var param = getUrl.getUrlSearchKey(this.props.location.search, "food")
      if (!param) {
        this.fetchData('all')
      } else {
        if (this.prevFetchState === param && Date.now() - this.date < 600000) return
        this.prevFetchState = param
        this.date = new Date()
        this.fetchData(param)
      }
    }
  }
  fetchData(param) {
    // console.log('fetch')
    fetch(`${process.env.REACT_APP_BASEURL}/${param}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          seasonData: data
        })
        // console.log(this.state.seasonData)
      })
  }

  render() {
    this.detectData()
    return (
      <div>
        <ShowCategoryData seasonData={this.state.seasonData}></ShowCategoryData>
        <Grid container="true">
            <Row>
              <PaginationComp></PaginationComp>
            </Row>
        </Grid>
      </div>
    )
  }
}

export default Season
