import React, { Component } from 'react'
import getVideo from '../actions/getVideo'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Watch extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getVideo(this.props.params.id))
    }

    render() {
        return (
            <div>
                <Link to="/">&larr; Back To Search</Link>
                <br />
                <br />
                {this.props.video.video.map((video) => {

                    return (<div key={video.id}>
                        <iframe width="100%" height="350" src={`https://www.youtube.com/embed/${video.id}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
                        <br />
                        <br />
                        <h4 className="title is-4">{video.snippet.title}</h4>
                        <p>{video.snippet.description}</p>
                    </div>)
                })}
            </div>
        )
    }
}

/**
 * Insert Props Into Component
 */
const stateProps = (state) => {
    return {
        video: state.video
    }
}


Watch.propTypes = {
    video: React.PropTypes.object.isRequired
}

export default connect(stateProps)(Watch)