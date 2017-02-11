import store from '../store'
import axios from 'axios'
/**
 * Create Default Action
 */
const getVideo = (id) => {
    return dispatch => {
        dispatch({
            type: 'REQUEST_VIDEO'
        })
        let key = 'AIzaSyD_9xVcB8Uj-uZSLNKe9VELLE_nJyJXBqg'
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`)
            .then(response => response.data)
            .then(results => {
                dispatch({
                    type: 'RECEIVE_VIDEO',
                    payload: results.items
                })
            })
    }
}

export default getVideo