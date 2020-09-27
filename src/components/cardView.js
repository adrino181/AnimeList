import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {fetchList} from '../redux/appAction'

const SingleCard = () => {
    return <Col></Col>
}


const CardView = (props) => {
  const fetchMore = () => {
    props.fetchList(props.animeName, props.prevCount+10)
  }
  const renderContent = () => {
    return <>
            <Row className="mt-3 pt-2">
            {
              props.animeList.map((item, key) =>
                <Col md={4} className="cardContainer mt-4 pt-2" key={key}>
                  <div>
                     <img className="cardImg w-100" src={item.image_url} />
                  </div>
                  <div className="cardText">
                    <span>{item.title}</span>
                  </div>
                </Col>
                )
            }
          </Row>
          <div className="mb-5">
             {
               props.loadMore && <button onClick={()=> fetchMore()}>Load more</button>
              }
          </div>
    </>
  }
  return <div>{renderContent()}</div>
}

const mapStateToProps = state => {
  return {
    animeList:state.animeList,
    prevCount:state.prevCount,
    loadMore:state.loadMore,
    animeName:state.animeName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchList:(animeName, length) =>  dispatch(fetchList(animeName, length))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardView)
