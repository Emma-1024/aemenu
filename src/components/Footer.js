import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ScrollTopButton from './ScrollTopButton'
// import Pagination from '../components/PaginationComp'

import '../css/footer.css';

function Footer () {
    return (
      <div>
        <Grid fluid>
          <Row className="footer">
            <Col xs={4}>
              <h4>About us</h4>
            </Col>
            <Col xs={8}>
              <div className="link pull-left">
                {/* <a href="https://github.com/Emma-1024">GitHub of Emma</a><br />
                <a href="https://github.com/Alex-T-1024">GitHub of Alex</a><br /> */}
                <a href="https://github.com/Emma-1024/aemenu.git">Project GitHub</a><br/>
                <a href="https://github.com/Alex-T-1024/aemenu-backend">Project GitHub</a>
              </div>
              <div className="recruit pull-right">recruit me</div>
            </Col>
          </Row>
        </Grid>
        <ScrollTopButton />
      </div>
    )
}

export default Footer