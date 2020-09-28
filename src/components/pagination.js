import React from 'react'
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux'
import {fetchList} from '../redux/appAction'

const Pagination = (props) => {

   const handlePageChange = (data) => {
     props.fetchList(props.animeName, data.selected)
   }

   const renderPaginate =  <ReactPaginate
         previousLabel={"←"}
         nextLabel={"→"}
         breakLabel={<span className="gap">...</span>}
         pageCount={props.pagesCount}
         onPageChange={handlePageChange}
         pageRangeDisplayed={2}
         forcePage={props.prevPage}
         containerClassName={"pagination"}
         previousLinkClassName={"previous_page"}
         nextLinkClassName={"next_page"}
         disabledClassName={"disabled"}
         activeClassName={"active"}
       />

    return <>
        {
          props.showPagination?renderPaginate:<></>
        }
    </>

}

const mapStateToProps = state => {
  return {
    showPagination:state.showPagination,
    prevPage:state.prevPage,
    pagesCount:state.pagesCount,
    animeName:state.animeName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchList:(animeName, prevPage) => dispatch(fetchList(animeName,10,prevPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
