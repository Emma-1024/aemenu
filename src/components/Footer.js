import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ScrollTopButton from './ScrollTopButton'
// import Pagination from '../components/PaginationComp'

import '../css/footer.css'
import recruitMe from '../images/img/Spring-me-icon1.png'

function Footer () {
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
                <a href="https://github.com/Emma-1024/aemenu.git">GitHub Front-End</a><br/>
                <a href="https://github.com/Alex-T-1024/aemenu-backend">GitHub Back-End</a>
              </div>
            </Col>
            <Col xs={5}>
              <div className="recruit">
                <img src={ recruitMe } alt=""/>
                <a href="/">Recruit Me</a>
              </div>
            </Col>
          </Row>
        </Grid>
        <ScrollTopButton />
      </div>
    )
}

export default Footer