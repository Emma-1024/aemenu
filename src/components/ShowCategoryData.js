import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class ShowCategoryData extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  static defaultProps={
    seasonData: []
  }

  render(){
    return(
      <Grid container="true">
          <Row>
            {this.props.seasonData.map((item,index) => {
              if(index>7){return null}
              return (
                <Col key={item.id} xs={3}>
                  <div className="season-list">
                    <a href="">
                      <img className="season-img" src={item.url} alt="" />
                      <div className="info">
                        <div className="cell">
                          <strong>{item.name}</strong>
                          <span>{item.comment}评论 {item.like}人气</span>
                          <em>{item.user}</em>
                        </div>
                      </div>
                    </a>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Grid>
    )
  }
}
export default ShowCategoryData

