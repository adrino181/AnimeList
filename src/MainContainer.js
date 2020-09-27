import React, {useState} from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import Header from './components/header'
import RequestContainer from './components/requestContainer'
import CardView from './components/cardView'

class MainContainer extends React.Component{
  render(){
    return <>
      <Provider store={store}>
        <Header />
        <Container>
          <Row className="justify-content-center w-100">
            <Col md={10}>
              <RequestContainer />
              <CardView />
            </Col>
          </Row>
        </Container>
      </Provider>
    </>
  }
}


export default MainContainer;
