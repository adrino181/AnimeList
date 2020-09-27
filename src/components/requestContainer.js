import React from 'react'
import {connect} from 'react-redux'
const RequestContainer = (props) => {
  return <>
          <div className="lw1">Requesting:<span style={{color:'white'}}> API Request URL will appear here</span></div>
          <div className='lw1'>Store state {props.loading?'loading..':'not loading'}</div>
        </>
}


const mapStateToProps = state => {
  return {
    loading:state.loading
  }
}

export default connect(mapStateToProps, null)(RequestContainer)
