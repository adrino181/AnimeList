import {FETCH_ANIME_REQUEST, FETCH_ANIME_SUCCESS, FETCH_ANIME_FAILURE} from './actionType'
import axios from 'axios'
import {fetchAnimeList} from '../components/urls'

export const fetchAnimeRequest = () => {
    return {
      type:FETCH_ANIME_REQUEST
    }
}

export const fetchAnimeSuccess = (animeList, reqUrl,prevCount,loadMore, animeName, showPagination=false, prevPage=0, pagesCount) => {
  return {
    type:FETCH_ANIME_SUCCESS,
    payload:animeList,
    reqUrl:reqUrl,
    prevCount:prevCount,
    animeName:animeName,
    loadMore:loadMore,
    error:false,
    showPagination:showPagination,
    prevPage:prevPage,
    pagesCount:pagesCount
  }
}

export const fetchAnimeFailure = (error) => {
  return {
    type:FETCH_ANIME_FAILURE,
    error:error
  }
}

export const fetchList = (animeName, length=10, prevPage=0) => {
   return (dispatch) => {
     dispatch(fetchAnimeRequest())
     let reqUrl = fetchAnimeList(animeName, length, prevPage+1)
     axios.get(reqUrl)
      .then(res => {
         const animeList = res.data.results
         const loadMore  = length === animeList.length
         const showPagination = res.data.last_page > 1
         const pagesCount = res.data.last_page?res.data.last_page:0
         dispatch(fetchAnimeSuccess(animeList, reqUrl, animeList.length, loadMore, animeName, showPagination, prevPage, pagesCount))
      }).catch(err=> {
        dispatch(fetchAnimeFailure(true))
      })
   }
}
