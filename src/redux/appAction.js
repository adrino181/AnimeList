import {FETCH_ANIME_REQUEST, FETCH_ANIME_SUCCESS} from './actionType'
import axios from 'axios'
import {fetchAnimeList} from '../components/urls'

export const fetchAnimeRequest = () => {
    return {
      type:FETCH_ANIME_REQUEST
    }
}

export const fetchAnimeSuccess = (animeList, reqUrl) => {
  return {
    type:FETCH_ANIME_SUCCESS,
    payload:animeList,
    reqUrl:reqUrl
  }
}

export const fetchList = (animeName, length=10) => {
   return (dispatch) => {
     dispatch(fetchAnimeRequest())
     let reqUrl = fetchAnimeList(animeName, length)
     axios.get(reqUrl)
      .then(res => {
         const animeList = res.data.results
         dispatch(fetchAnimeSuccess(animeList, reqUrl))
      })
   }
}
