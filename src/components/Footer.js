import React, { Component } from 'react';
import {Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import ScrollTopButton from './ScrollTopButton'

import '../css/footer.css';

class Footer extends Component {
  constructor() {
    super()
    this.state ={scrollTop: 0}
  }
  componentWillMount() {
    this._goTop = this._goTop.bind(this)
  }
  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="footer">
            <Col xs={3} className="pull-right">
              <h4>About me</h4>
              <a href="https://github.com/Emma-1024">GitHub of Emma</a><br/>
              <a href="https://github.com/Alex-T-1024">GitHub of Alex</a><br/>
              <a href="https://github.com/Emma-1024/aemenu.git">Project GitHub</a>
            </Col>
          </Row>
        </Grid>
        {/* <div className="gotop" onClick={()=> this._goTop()}>
          <Glyphicon glyph="circle-arrow-up" />
        </div> */}
        <ScrollTopButton />
      </div>
    )
  }
  //返回顶部
  _goTop() {
    window.scrollTo(0,0)
  }
}

export default Footer