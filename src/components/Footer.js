import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ScrollTopButton from './ScrollTopButton'
import Resume from './Resume'
import '../css/footer.css'
import recruitMe from '../images/img/Spring-me-icon1.png'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumePopup: false
    }
  }
  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="footer">
            <Col xs={3}>
              <h4>ABOUT US</h4>
            </Col>
            <Col xs={4}>
              <div className="link">
                {/* <a href="https://github.com/Emma-1024">GitHub of Emma</a><br />
                <a href="https://github.com/Alex-T-1024">GitHub of Alex</a><br /> */}
                <a href="https://github.com/Emma-1024/aemenu.git">GitHub Front-End</a><br />
                <a href="https://github.com/Alex-T-1024/aemenu-backend">GitHub Back-End</a>
              </div>
            </Col>
            <Col xs={5}>
              <div className="recruit">
                <img src={recruitMe} alt="" />
                <span onClick={this._resumePopup.bind(this)}>Recruit Me</span>
                {
                  this.state.resumePopup ?
                    <div>
                      <Resume closePopup={this._togglePopup.bind(this)} ></Resume>
                    </div>
                    : null
                }
              </div>
            </Col>
          </Row>
        </Grid>
        <ScrollTopButton />
      </div>
    )
  }
  _resumePopup() {
    this.setState({
      resumePopup: !this.state.resumePopup
    })
  }
  _togglePopup() {
    this.setState({
      resumePopup: !this.state.resumePopup
    })
  }
}

export default Footer