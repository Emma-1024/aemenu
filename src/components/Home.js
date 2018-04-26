import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid, Row, Col, Carousel} from 'react-bootstrap';
import '../css/Home.css'

import week1 from '../images/img/week1.png'
import week2 from '../images/img/week2.png'
import week3 from '../images/img/week3.png'

class Home extends Component {
    constructor (){
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

    render(){
        return (
            <div>
                {/* 轮播图 */}
                <Grid container="true">
                    <Carousel className="Carousel">
                        { this.renderCarouselItem() }
                    </Carousel>
                </Grid>
            </div>
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

export default Home
