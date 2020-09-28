import React, {useState} from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import Header from './components/header'
import RequestContainer from './components/requestContainer'
import CardView from './components/cardView'
import Pagination from './components/pagination'

class MainContainer extends React.Component{
  render(){
    return <>
      <Provider store={store}>
        <Header />
        <Container>
          <Row className="justify-content-center w-100 m-0">
            <Col md={10} className='p-0'>
              <RequestContainer />
              <CardView />
              <Pagination />
            </Col>
          </Row>
        </Container>
      </Provider>
    </>
  }
}


export default MainContainer;
