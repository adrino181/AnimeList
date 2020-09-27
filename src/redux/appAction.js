import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from './actionType'
import axios from 'axios'
import {fetchAnimeList} from '../components/urls'

export const fetchUserRequest = () => {
    return {
      type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
  return {
    type:FETCH_USER_SUCCESS,
    payload:users
  }
}

export const getAction = () => {
   return {
     type:'GET_DATA'
   }
}

export const fetchList = () => {
   return (dispatch) => {
     axios.get(fetchAnimeList('naruto'))
      .then(res => {
         const animeList = res.results
         dispatch(fetchUserSuccess(animeList))
      })
   }
}
