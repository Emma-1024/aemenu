import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import ShowCategoryData from '../components/ShowCategoryData'
import PaginationComp from '../components/PaginationComp'
import getUrl from '../common/getUrlSearchKey'


class Season extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seasonData: {
        seasonAllData: [],
        onePageData: [],
        seasonParam: 'all',
        end: 8,
        start: 0
      },
    }
    this.prevFetchState = null
    this.date = new Date()
  }

  _detectData() {
    if (this.props.location.search === '') {
      if (this.prevFetchState === '' && Date.now() - this.date < 600000) return
      this.prevFetchState = ''
      this.date = new Date()
      this._fetchData('all', this.state.start, this.state.seasonData.end)
    } else {
      var param = getUrl.getUrlSearchKey(this.props.location.search, "food")
      if (!param) {
        this._fetchData('all', this.state.start, this.tate.seasonData.renderNum)
      } else {
        if (this.prevFetchState === param && Date.now() - this.date < 600000) return
        this.prevFetchState = param
        this.date = new Date()
        this._fetchData(param, this.state.start, this.state.seasonData.end)
      }
    }
  }

  _fetchData(param, start, end) {
    fetch(`${process.env.REACT_APP_BASEURL}/${param}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          seasonData: {
            onePageData: data.slice(start, end),
            seasonAllData: data,
            seasonParam: param,
            start: 0,
            end: 8,
          }
        })
      })
  }

  render() {
    this._detectData()
    return (
      <div>
        <ShowCategoryData seasonData={this.state.seasonData.onePageData}></ShowCategoryData>
        <Grid container="true">
          <Row>
            <PaginationComp getPageIndex={this._getPageIndex.bind(this)} data={this.state.seasonData}></PaginationComp>
          </Row>
        </Grid>
      </div>
    )
  }

  _getPageIndex(obj) {
    console.log(obj)
    // this.setState({
    //   seasonData: {
    //     seasonAllData: [],
    //     onePageData: [],
    //     seasonParam: obj.param,
    //     end: obj.end,
    //     start: obj.start
    //   }
    // })
    this._fetchData(obj.param, obj.start, obj.end)
  }
}

export default Season
