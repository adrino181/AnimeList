import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'

const CardView = (props) => {
  console.log(props.animeList)
  const renderContent = () => {
    return <>
            <Row>
            {
              props.animeList.map(item =>
                <Col md={4}>
                  <div>
                     <img src={item.image_url} />
                  </div>
                  <div>
                    <span>{item.title}</span>
                  </div>
                </Col>
                )
            }
          </Row>
    </>
  }
  return <div>{renderContent()}</div>
}

const mapStateToProps = state => {
  return {
    animeList:state.animeList
  }
}


export default connect(mapStateToProps)(CardView)
