import React from 'react'
import { Link } from 'react-router-dom'

export default function EpisodeCard(props) {
    const { img, title, summary, id } = props

    return (
        <Link className="episode-card" to={`/episodes/${id}`}>
            <img src={img} alt="Episode Cover" className="episode-cover" />
            <div className="episode-text">
                <span className="episode-title">{title}</span>
                <p className="episode-summary">{summary}</p>
            </div>
        </Link>
    )
}
