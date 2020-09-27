import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from './actionType'

const initialState = {
  loading:false,
  animeList:[],
  currentUrl:'',
  currentFetch:0
}

const appReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_DATA':
      return {
        ...state,
        loading:true
      }
    case FETCH_USER_REQUEST:
      return{
        ...state,
        loading:true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading:false,
        animeList:action.payload
      }
    }
  return state
}

export default appReducer
