import React from 'react'
import img from '../../assets/episode-cover.jpeg'
import './EpisodesPage.scss'

function EpisodesPage() {
    return (
        <div className="episode-card">
            <img src={img} alt="Episode Cover" className="episode-cover" />
            <div className="episode-text">
                <span className="episode-title">Episode Name</span>
                <p>
                    Lorem Ipsum is just a dummy text with a lot of unknown words. Here we go again! Lorem Ipsum is just
                    a dummy text with a lot of unknown words. Here we go again
                </p>
            </div>
        </div>
    )
}

export default EpisodesPage
