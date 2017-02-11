import React  from 'react'
import { Link } from 'react-router'

const SearchResult = (props) => {
    return (
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <Link to={`/watch/${props.result.id.videoId}`}>
                        <img src={props.result.snippet.thumbnails.default.url} alt="Image" />
                    </Link>
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <Link to={`/watch/${props.result.id.videoId}`}>
                            <strong>{props.result.snippet.title}</strong>
                        </Link>
                        <br />
                        <small>{props.result.snippet.description}</small>
                    </p>
                </div>
                <nav className="level">
                    <div className="level-left">
                        <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                        </a>
                    </div>
                </nav>
            </div>
        </article>
    )
}

export default SearchResult