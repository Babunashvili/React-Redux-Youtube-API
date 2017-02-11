import store from '../store'
import axios from 'axios'
/**
 * Create Default Action
 */
const getResults = (query, token = '') => {
    return dispatch => {
        dispatch({
            type: 'REQUEST_RESULTS',
            query: query
        })
        let key = 'AIzaSyD_9xVcB8Uj-uZSLNKe9VELLE_nJyJXBqg'
        let nextPageToken = (token.length) ? `&pageToken=${token}` : ''

        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet${nextPageToken}&order=rating&type=video&videoDefinition=high&q=${query}&maxResults=10&key=${key}`)
            .then(response => response.data)
            .then(results => {
                dispatch({
                    type: 'RECEIVE_RESULTS',
                    payload: results.items,
                    totalResults: results.pageInfo.totalResults,
                    query: query,
                    nextPageToken: (results.nextPageToken) ? results.nextPageToken : ''
                })
            })
    }
}

export default getResults