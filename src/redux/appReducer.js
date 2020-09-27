import {FETCH_ANIME_REQUEST, FETCH_ANIME_SUCCESS, FETCH_ANIME_FAILURE} from './actionType'

const initialState = {
  loading:false,
  animeList:[],
  reqUrl:'',
  prevCount:0,
  loadMore:false,
  error:false,
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
        animeList:action.payload,
        prevCount:action.prevCount,
        loadMore:action.loadMore,
        animeName:action.animeName,
        error:false
      }
    case FETCH_ANIME_FAILURE:
       return {
         ...state,
         loading:false,
         animeList:[],
         loadMore:false,
         error:action.error
       }
    }
  return state
}

export default appReducer
