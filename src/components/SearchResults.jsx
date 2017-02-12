import React, { Component } from 'react'

import SearchResult from './SearchResult'

class SearchResults extends Component {

    render() {
        let video = this.props.results.map((result) => {
            return <SearchResult key={result.id.videoId} result={result} />
        })

        return (<div> {((this.props.results.length)) ?
            <div>
                {video}
                <br/>
                <br/>
                <center>
                    <button className="button is-default" 
                         onClick={ () => { this.props.loadMore() }}>
                         Load More
                    </button>
                </center>
            </div>
            : <div> <center>No Results</center> </div>} </div>)
    }
}

SearchResult.PropTypes = {
    results: React.PropTypes.array,
    totalResults: React.PropTypes.num
}

export default SearchResults