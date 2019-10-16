import React from 'react'

export default function EpisodeCard(props) {
    const { img, title, summary } = props

    return (
        <div className="episode-card">
            <img src={img} alt="Episode Cover" className="episode-cover" />
            <div className="episode-text">
                <span className="episode-title">{title}</span>
                <p className="episode-summary">{summary}</p>
            </div>
        </div>
    )
}
