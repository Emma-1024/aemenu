import React, { Component } from 'react'
import { Grid, Row, Col, Carousel, Glyphicon, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'
import '../css/home.css'

// for temporal use
import week1 from '../images/img/week1.png'
import week2 from '../images/img/week2.png'
import week3 from '../images/img/week3.png'
import mongo from '../images/img/Mango.jpg'
import strawberry from '../images/img/strawberry.jpg'
import cabbage from '../images/img/cabbage.jpg'
import mushroom from '../images/img/mushroom.jpg'


class Home extends Component {
  constructor() {
    super()
    this.carouselData = []
    this.seasonData = []
    this.span = {}
    this.state = {
      category: 'fruit',
      active: ['active', '']
    }

    this.carouselData = [
      // { id: 1, url: "http://192.168.1.44:8080/img/witcher.jpg", name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。" },
      { id: 1, url: week1, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。" },
      { id: 2, url: week2, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。" },
      { id: 3, url: week3, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。" },
    ]
    this.seasonData = {
      fruit: [
        { id: 1, url: mongo, name: "mongo" },
        { id: 2, url: strawberry, name: "strawberry" },
      ],
      vegetable: [
        { id: 1, url: cabbage, name: "cabbage" },
        { id: 2, url: mushroom, name: "mushroom" },
      ]
    }
    this._changePhotos = this._changePhotos.bind(this)
  }
  render() {
    return (
      <div>
        {/* test按钮 */}
        <Button onClick={this._test.bind(this)}>test</Button>
        <Button onClick={this._logout.bind(this)}>logout</Button>
        {/* 轮播图 */}
        <Grid container="true">
          <Row>
            <Carousel className="Carousel">
              {this._renderCarouselItem()}
            </Carousel>
          </Row>
        </Grid>
        {/* 时令瓜果蔬菜 */}
        <Grid container="true">
          <Row className="season">
            <Col xs={6}>
              <div className="desc">
                <h4>时令蔬菜瓜果</h4>
              </div>
            </Col>
            <Col xs={6}>
              <div className="toggleBtn pull-left">
                <span className={this.state.active[0]} onClick={() => this._changePhotos('fruit', 0)}>水果</span>
                <span className={this.state.active[1]} onClick={() => this._changePhotos('vegetable', 1)}>蔬菜</span>
              </div>
            </Col>
            <Col xs={12}>
              <div className="toggleList">
                <Row>
                  {this._renderFruitData(this.state.category)}
                </Row>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  // 轮播图方法
  _renderCarouselItem() {
    return this.carouselData.map(item => {
      return (
        <Carousel.Item key={item.id}>
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

  //时令瓜果蔬菜
  _renderFruitData(category) {
    return this.seasonData[category].map(item => {
      return (
        <Col xs={3} key={item.id}>
          <Link to={`/category/season?food=${item.name}`}>
            <img src={item.url} />
            <div className="cover">
              {/* <div className="itemname"> */}
              <Glyphicon glyph="gift" className="gifticon" />
              <span className="itemname"> {item.name}</span>
              {/* </div> */}
            </div>
          </Link>
        </Col>
      )
    })
  }

  _changePhotos(category, index) {
    this.setState({ category: category })
    var active = this.state.active
    active.forEach((item, index) => {
      active[index] = ''
    })
    active[index] = 'active'
    this.setState({ active: active })
  }

  _test() {
    fetch(`${process.env.REACT_APP_BACKENDURL}/test`,
      {
        method: 'GET',
        credentials: 'include',
        // body: JSON.stringify(data),
        // headers: new Headers({
        //   'Content-Type': 'application/json'
        // })
      })
      .then(res => res.json())
      .then(info => {
        console.log(info)
      })
  }
  _logout() {
    fetch(`${process.env.REACT_APP_BACKENDURL}/logout`,
      {
        method: 'GET',
        credentials: 'include',
        // body: JSON.stringify(data),
        // headers: new Headers({
        //   'Content-Type': 'application/json'
        // })
      })
      .then(res => res.json())
      .then(info => {
        console.log(info)
      })
  }
  // _test() {
  //   var url = `${process.env.REACT_APP_BACKENDURL}/test`
  //   axios.get(url)
  //   .then(info => {
  //     console.log(info)
  //   })
  // }
}

export default Home
