import {FETCH_ANIME_REQUEST, FETCH_ANIME_SUCCESS} from './actionType'
import axios from 'axios'
import {fetchAnimeList} from '../components/urls'

export const fetchAnimeRequest = () => {
    return {
      type:FETCH_ANIME_REQUEST
    }
}

export const fetchAnimeSuccess = (animeList, reqUrl,prevCount,loadMore, animeName) => {
  return {
    type:FETCH_ANIME_SUCCESS,
    payload:animeList,
    reqUrl:reqUrl,
    prevCount:prevCount,
    animeName:animeName,
    loadMore:loadMore
  }
}

export const fetchList = (animeName, length=10) => {
   return (dispatch) => {
     dispatch(fetchAnimeRequest())
     let reqUrl = fetchAnimeList(animeName, length)
     axios.get(reqUrl)
      .then(res => {
         const animeList = res.data.results
         const loadMore  = length === animeList.length
         dispatch(fetchAnimeSuccess(animeList, reqUrl, animeList.length, loadMore, animeName))
      })
   }
}
