import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import createBrowserHistory from 'history/createBrowserHistory'
import '../css/NoMatch.css'
import noMatchPhoto from '../images/img/404.jpg'

const history = createBrowserHistory()
const NoMatch = () => {
  return (
    <div>
      <Grid>
        <Row className="nomatch-wrap">
          <Col>
            <h1>404 , 抱歉!您要的资源没有找到...</h1>
          </Col>
          <Col xs={12}>
            <div className="nomatch-img"><img src={ noMatchPhoto } alt=""/></div>
          </Col>
          <Col>
            <Link to="/" className="nomatch-tips">返回首页</Link>
            <span> 或者 </span>
            <Link to="/" className="nomatch-tips" onClick={ () => history.goBack() }>返回上一页</Link>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default NoMatch