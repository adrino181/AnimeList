import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {fetchList} from '../redux/appAction'

const SingleCard = ({img, title}) => {
    return <Col xs={6} md={4} className="cardContainer mb-4 pb-2" >
      <div>
         <img className="cardImg w-100" src={img} />
      </div>
      <div className="cardText">
        <span>{title}</span>
      </div>
    </Col>
}

const LoadMoreCard = ({fetchMore, loading}) => {
  const style={
    cursor:'pointer',
    minHeight:'300px',
  }
  return <Col md={4} xs={6} style={style} onClick={fetchMore} className="cardContainer mb-4 pb-2" >
    <div className={`cardText ${loading?'loader':''}`} style={{borderRadius:'8px'}}>
      <span>{loading?'fetching...' :'Load More'}</span>
    </div>
  </Col>
}


const CardView = (props) => {
  const fetchMore = () => {
    props.fetchList(props.animeName, props.prevCount+10, props.prevPage)
  }
  const renderContent = () => {
    return <>
            <Row className="mt-3 pt-2 mb-4">
            {
              props.animeList.map((item, key) =>
                  <SingleCard key={key} img={item.image_url} title={item.title} />
                )
            }
           {props.loadMore && <LoadMoreCard fetchMore={fetchMore} loading={props.loading}/>}
          </Row>
    </>
  }
  return <div>{renderContent()}</div>
}

const mapStateToProps = state => {
  return {
    animeList:state.animeList,
    prevCount:state.prevCount,
    loadMore:state.loadMore,
    animeName:state.animeName,
    loading:state.loading,
    prevPage:state.prevPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchList:(animeName, length, prevPage) =>  dispatch(fetchList(animeName, length, prevPage))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardView)
