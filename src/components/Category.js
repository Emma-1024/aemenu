import React, { Component } from 'react'
import { Grid, Row, Col, Carousel, Glyphicon } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Category = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/category/season" label="Season" />
      <OldSchoolMenuLink to="/category/day" label="Day" />
      <OldSchoolMenuLink to="/category/week" label="Week" />
      <hr />
      <Route exact path="/category/season" component={Season} />
      <Route path="/category/day" component={Day} />
      <Route path="/category/week" component={Week} />
    </div>
  </Router>
);

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
)

const Season = () => (
  <div>
    <Grid container="true">
      <Row>
        <Col xs={4}>
          <div>
            <a href="">
              <img src="" alt=""/>
              <div></div>
            </a>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)
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

