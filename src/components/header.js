import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import {fetchList} from '../redux/appAction'

const Header = (props) => {
  const [anime, setAnime] = useState('')
  const handleRequest = () => {
      props.fetchList(anime)
  }
  const enterPressed = (e) => {
      let code = e.keyCode || e.which;
      if(code === 13) { //13 is the enter keycode
          handleRequest()
      }
  }
  return <>
  <Navbar expand="lg" sticky="top" className="mainNav">
    <Container>
      <Row className="justify-content-center w-100 m-0">
        <Col md={10} className="d-flex justify-content-center align-items-center p-0">
         <input className='inputBox' onChange={(e) => {setAnime(e.target.value)}} type="text" onKeyPress={enterPressed} placeholder="search for an anime, e.g Naruto">
          </input>
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
    fetchList:(animeName) =>  dispatch(fetchList(animeName))
  }
}

export default connect(null, mapDispatchToProps)(Header)
