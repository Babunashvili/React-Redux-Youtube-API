const searchResults = (state = { isLoading: false, results: [], query: '', totalResults: 0, nextPageToken: '' }, action) => {
    switch (action.type) {
    case 'REQUEST_RESULTS':
        let currentResults = (state.query === action.query) ? state.results : []
        return Object.assign({}, state, {
            isLoading: true,
            results: currentResults,
            query: action.query,
            totalResults: state.totalResults,
            nextPageToken: state.nextPageToken
        })
        break
    case 'RECEIVE_RESULTS':
        let newResults = state.results

        action.payload.map((item) => {
            newResults.push(item)
        })

        return Object.assign({}, state, {
            isLoading: false,
            results: newResults,
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