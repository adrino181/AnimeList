import {FETCH_ANIME_REQUEST, FETCH_ANIME_SUCCESS} from './actionType'

const initialState = {
  loading:false,
  animeList:[],
  reqUrl:'',
  currentFetch:0
}

const appReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_ANIME_REQUEST:
      return{
        ...state,
        loading:true
      }
    case FETCH_ANIME_SUCCESS:
      return {
        ...state,
        loading:false,
        reqUrl:action.reqUrl,
        animeList:action.payload
      }
    }
  return state
}

export default appReducer
