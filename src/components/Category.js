import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import '../css/index.css'
import '../css/category.css'
import Season from '../components/Season'

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

