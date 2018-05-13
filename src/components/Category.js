import React, { Component } from 'react'
import { Grid, Row, Col, Carousel, Glyphicon } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import '../css/index.css'
import '../css/category.css'

const Category = () => (
  <Router>
    <div>
      <OldSchoolMenuLink path="/category/season/:name" label="Season" />
      <OldSchoolMenuLink path="/category/day" label="Day" />
      <OldSchoolMenuLink path="/category/week" label="Week" />
      <hr />
      <Route path="/category/season/:name" component={Season} />
      <Route path="/category/day" component={Day} />
      <Route path="/category/week" component={Week} />
    </div>
  </Router>
);

const OldSchoolMenuLink = ({ label, path }) => {
  return (
    <Route
      path={path}
      children={({ match, location }) => {
        console.log(location.pathname)
        return(
          <div className={match ? "active" : ""}>
            {match ? "> " : ""}
            <Link to={location.pathname}>{label}</Link>
          </div>
        )
      }}
    />
  )
}

class Season extends Component {
  constructor() {
    super()
    this.state = {
      seasonData: []
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    fetch(`${process.env.REACT_APP_BASEURL}/${this.props.match.params.name}`)
      .then(res => res.json())
      .then(data => {
        console.log('数据', data)
        this.setState({
          seasonData: data
        })
        console.log(this.state.seasonData)
      })
  }
  render() {
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

