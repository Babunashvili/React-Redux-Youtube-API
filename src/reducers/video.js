const video = (state = { isLoading: false, video: [] }, action) => {
    switch (action.type) {
    case 'REQUEST_VIDEO':
        return Object.assign({}, state, {
            isLoading: true,
            video: []
        })
        break
    case 'RECEIVE_VIDEO':
        return Object.assign({}, state, {
            isLoading: false,
            video: action.payload
        })
        break
    default:
        return state
    }
}
export default video