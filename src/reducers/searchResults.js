const searchResults = (state = { isLoading: false, results: [], query: '', totalResults: 0, nextPageToken: '' }, action) => {
    switch (action.type) {
    case 'REQUEST_RESULTS':
        return Object.assign({}, state, {
            isLoading: true,
            results: state.results,
            query: action.query,
            totalResults: state.totalResults,
            nextPageToken: state.nextPageToken
        })
        break
    case 'RECEIVE_RESULTS':
        let currentResults = state.results

        action.payload.map((item) => {
            currentResults.push(item)
        })

        return Object.assign({}, state, {
            isLoading: false,
            results: currentResults,
            query: action.query,
            totalResults: action.totalResults,
            nextPageToken: action.nextPageToken
        })
        break
    default:
        return state
    }
}
export default searchResults