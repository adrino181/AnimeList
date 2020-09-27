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
          <div className="lw1 mt-2">Requesting :
              <span className="ml-1" style={{color:'white', display:'inline-block'}}>
                {renderContent()}
              </span>
          </div>
          {props.error && <div className="lw1 mt-2">
              Error :
              <span className="ml-1" style={{color:'red', display:'inline-block'}}>
                 No result found
              </span>
          </div>}
        </>
}

const mapStateToProps = state => {
  return {
    loading:state.loading,
    reqUrl:state.reqUrl,
    error:state.error
  }
}

export default connect(mapStateToProps, null)(RequestContainer)
