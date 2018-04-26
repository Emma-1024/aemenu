import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button, Grid, Row, Col, Carousel} from 'react-bootstrap';
import Nav from './Nav';
import '../css/App.css';
// for temporal use
import week1 from '../images/img/week1.png'
import week2 from '../images/img/week2.png'
import week3 from '../images/img/week3.png'

class App extends Component {
  constructor() {
    super()
    this.carouselData=[]
  }

  componentWillMount() {
    this.carouselData = [
      { id: 1, url: week1, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。"},
      { id: 2, url: week2, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。"},
      { id: 3, url: week3, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。"},
    ]
  }

  render() {
    return (
      <Router>
        <div>
           {/* 头部 */}
          <Grid fluid className="wrap">
            <Row className="App-header">
              <Col xs={2} sm={2} md={2}>
                <div className="App-logo" >
                  <img src={require("../images/img/logo.jpg")} alt="logo" style={{width: 50, height: 50, margin:'0 auto'}}/>
                </div>
              </Col> 
              <Col xs={5}>
                <div className="App-search">
                  <input type="text" className="search-info pull-left" placeholder="Search for..."/>
                  <span>
                    <button className="search-btn pull-right">Go!</button>
                  </span>
                </div>
              </Col>
              <Col xm={5}>
                <div className="App-user pull-right" >
                  <span className="login">登录</span>
                  <span className="register">注册</span>
                </div>
              </Col>
            </Row>
          </Grid>
          {/* 导航 */}
          <Grid fluid>
            <Row >
              <Nav />
            </Row>
          </Grid>
          {/* 轮播图 */}
          <Grid container="true">
            <Carousel className="Carousel">
              { this.renderCarouselItem() }
            </Carousel>
          </Grid>
        </div>
      </Router>
    )
  }

  renderCarouselItem(){
    return this.carouselData.map(item => {
      return (
        <Carousel.Item key={ item.id }>
          {/* <img width={900} height={500} alt="900x500" src={item.url} /> */}
          <img width={900} height={500} src={item.url} />
            <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
  }
}

export default App