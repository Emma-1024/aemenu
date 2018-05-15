import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import '../css/index.css'
import '../css/category.css'
import getUrl from '../common/getUrlSearchKey'

const Category = () => (
  <Router>
    <div>
      <DishLink path="/category/season" label="Season" />
      <DishLink path="/category/day" label="Day" />
      <DishLink path="/category/week" label="Week" />
      <hr />
      <Route path="/category/season" component={Season} />
      <Route path="/category/day" component={Day} />
      <Route path="/category/week" component={Week} />
    </div>
  </Router>
);

const DishLink = ({ label, path }) => {
  return (
    <Route
      path={path}
      children={({ match, location }) => {
        // console.log(location.pathname)
        return (
          <div className={match ? "active" : "a-wrap"}>
            {match ? "> " : ""}
            <Link to={path}>{label}</Link>
          </div>
        )
      }}
    />
  )
}

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
    } else{
      var param = getUrl.getUrlSearchKey(this.props.location.search, "food")
      if(!param){
        this.fetchData('all')
      }else{
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
        <Grid container="true">
          <Row>
            {this.state.seasonData.map(item => {
              return (
                <Col key={item.id} xs={3}>
                  <div className="season-list">
                    <a href="">
                      <img className="season-img" src={item.url} alt="" />
                      <div className="info">
                        <div className="cell">
                          <strong>{item.name}</strong>
                          <span>{item.comment}评论 {item.like}人气</span>
                          <em>{item.user}</em>
                        </div>
                      </div>
                    </a>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Grid>
      </div>
    )
  }
}
const Day = () => (
  <div>
    <h2>Day</h2>
  </div>
)
const Week = () => (
  <div>
    <h2>Week</h2>
  </div>
)
export default Category

