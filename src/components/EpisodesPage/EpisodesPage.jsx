import React from 'react'
import img from '../../assets/episode-cover.jpeg'
import EpisodeCard from './EpisodeCard'
import './EpisodesPage.scss'

const episodeTitles = [
    'The Phantom Menace',
    'Attack of the Clones',
    'Revenge of the Sith',
    'A new Hope',
    'The Empire Returns',
    'Return of the Jedi',
]

function EpisodesPage() {
    return episodeTitles.forEach(title => (
        <EpisodeCard
            img={img}
            title={title}
            summary="Lorem Ipsum is just a dummy text with a lot of unknown words. Here we go again! Lorem Ipsum is just
                    a dummy text with a lot of unknown words. Here we go again - Lorem Ipsum is just a dummy text with a
                    lot of unknown words. Here we go again! Lorem Ipsum is just a dummy text with a lot of unknown
                    words. Here we go again"
        />
    ))
}

export default EpisodesPage
