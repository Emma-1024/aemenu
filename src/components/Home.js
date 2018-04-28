import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid, Row, Col, Carousel, Glyphicon } from 'react-bootstrap';
import '../css/home.css'

// for temporal use
import week1 from '../images/img/week1.png'
import week2 from '../images/img/week2.png'
import week3 from '../images/img/week3.png'
import mongo from '../images/img/Mango.jpg'
import cabbage from '../images/img/cabbage.jpg'


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
  }
  componentWillMount() {
    this.carouselData = [
      { id: 1, url: week1, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。" },
      { id: 2, url: week2, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。" },
      { id: 3, url: week3, name: "超级烹饪大蛋糕", description: "香浓诱人的巧克力口味；柔软的口感、甜蜜的味道,完美的全巧克力蛋糕经得起各种口味的挑剔.表面富有曲线美的巧克力花纹与蛋糕的名称相得益彰。" },
    ],
      this.seasonData = {
        fruit: [
          { id: 1, url: mongo, name: "mongo" },
          { id: 2, url: mongo, name: "mongo" },
        ],

        vegetable: [
          { id: 1, url: cabbage, name: "cabbage" },
          { id: 2, url: cabbage, name: "cabbage" },
        ]
      },

      this._changePhotos = this._changePhotos.bind(this)
  }

  render() {
    return (
      <div>
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
          <a href="#">
            <img src={item.url} heigth={150} />
            <div className="cover">
              <div className="itemname">
                <Glyphicon glyph="gift" className="gifticon"/>
                <span>{item.name}</span>
              </div>
            </div>
          </a>
        </Col>
      )
    })
  }

  _changePhotos(category, index) {
    this.setState({ category: category })
    var active = this.state.active
    active[index] = 'active'
    active[(index + 1) % 2] = ''
    this.setState({ active: active })
  }
}

export default Home
