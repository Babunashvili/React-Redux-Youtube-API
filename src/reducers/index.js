import { combineReducers } from 'redux'
import searchResults from './searchResults'
import video from './video'
/**
 * Combine Reducers In One Object
 */
export default combineReducers({
    searchResults: searchResults,
    video: video
})