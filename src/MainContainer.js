import React from 'react';
import {Navbar, Container, Row, Col} from 'react-bootstrap'

const fetchAnimeList = (name, limit=10) => `https://api.jikan.moe/v3/search/anime?q=${name}&limit=${limit}`

const Header = () => {
  return <>
  <Navbar expand="lg" sticky="top">
    <Container>
      <Row className="justify-content-center w-100">
        <Col md={10} className="d-flex justify-content-center align-items-center">
          <input className='inputBox' type="text" placeholder="search for an anime, e.g Naruto"></input>
          <button className='searchButton'>Go</button>
        </Col>
      </Row>
    </Container>
  </Navbar>
  </>
}

const RequestContainer = () => {
  return <>
          <div className="lw1">Requesting:<span style={{color:'white'}}> API Request URL will appear here</span></div>
        </>
}

const CardView = () => {
  return <div>Card View</div>
}
class MainContainer extends React.Component{

  render(){
    return <>
        <Header />
        <Container>
          <Row className="justify-content-center w-100">
            <Col md={10}>
              <RequestContainer />
              <CardView />
            </Col>
          </Row>
        </Container>
    </>
  }
}


export default MainContainer;
