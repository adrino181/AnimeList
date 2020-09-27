import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import {fetchAnimeList} from './urls.js'
import {fetchList} from '../redux/appAction'

const Header = (props) => {
  const [anime, setAnime] = useState('')
  const handleRequest = () => {

    console.log(props.fetchList())
    console.log(props.animeList)
  }
  return <>
  <Navbar expand="lg" sticky="top">
    <Container>
      <Row className="justify-content-center w-100">
        <Col md={10} className="d-flex justify-content-center align-items-center">
          <input className='inputBox' onChange={(e) => {setAnime(e.target.value)}} type="text" placeholder="search for an anime, e.g Naruto"></input>
          <button className='searchButton' onClick={() => handleRequest()}>Go</button>
        </Col>
      </Row>
    </Container>
  </Navbar>
  </>
}

const mapStateToProps = state => {
  return {
    animeList:state.animeList,
    loading:state.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchList:() =>  dispatch(fetchList())
  }
}

export default connect(null, mapDispatchToProps)(Header)
