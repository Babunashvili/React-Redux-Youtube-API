import React, { Component } from 'react'

/**
 * Create App Component
 */
class App extends Component {
	render() {
		return (
			<section className="section">
				<div className="columns">
					<div className="column is-6 is-offset-3">
						{ this.props.children }
					</div>
				</div>
			</section>
		)
	}
}

export default App
