import React, { Component } from 'react'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: this.props.query
        }
    }
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.onSubmit(this.state.query)
            }}>
                <p className="control has-addons">
                    <input className="input is-expanded" type="text" placeholder="Find a video" value={this.state.query} onChange={(e) => { this.setState({ query: e.target.value }) }} />
                    <button type="submit" className="button is-info">Search</button>
                </p>
            </form>
        )
    }
}

SearchForm.propTypes= {
   query:React.PropTypes.string.isRequired
}

export default SearchForm