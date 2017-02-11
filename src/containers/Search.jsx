import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import getResults from '../actions/getResults'
/**
 * Create Default Container
 */
class Search extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }
  onSubmit(query) {
    const { dispatch } = this.props
    if (query.length) dispatch(getResults(query))
  }
  loadMore() {
    const { dispatch } = this.props
    if (this.props.query.length) dispatch(getResults(this.props.query, this.props.nextPageToken))
  }
  render() {
    return (
      <div>
        <SearchForm onSubmit={this.onSubmit} query={this.props.query} />
        <hr />
        <SearchResults results={this.props.results} loadMore={this.loadMore} totalResults={this.props.totalResults} />
      </div>
    )
  }
}
/**
 * Insert Props Into Component
 */

const stateProps = (state) => {
  return {
    results: state.searchResults.results,
    query: state.searchResults.query,
    totalResults: state.searchResults.totalResults,
    nextPageToken: state.searchResults.nextPageToken
  }
}

Search.PropTypes = {
  results: React.PropTypes.array,
  query: React.PropTypes.string.isRequired,
  totalResults: React.PropTypes.num,
  nextPageToken: React.PropTypes.string
}

export default connect(stateProps)(Search)
