import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {fetchList} from '../redux/appAction'

const CardView = (props) => {
  const fetchMore = () => {
    props.fetchList(props.animeName, props.prevCount+10)
  }
  const renderContent = () => {
    return <>
            <Row>
            {
              props.animeList.map(item =>
                <Col md={3}>
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
