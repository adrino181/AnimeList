import React from 'react'
import {connect} from 'react-redux'

const RequestContainer = (props) => {

  const renderContent = () => {
    if(props.loading){
      return 'fetching....'
    }
    if(props.reqUrl){
        return props.reqUrl
    }
    return `API Request URL will appear here`
  }

  return <>
          <div className="lw1">Requesting:
              <span style={{color:'white'}}>
                {renderContent()}
              </span>
          </div>
        </>
}

const mapStateToProps = state => {
  return {
    loading:state.loading,
    reqUrl:state.reqUrl
  }
}

export default connect(mapStateToProps, null)(RequestContainer)
