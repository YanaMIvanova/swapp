import React from 'react'
import episodeCover from './../../assets/episode-cover.jpeg'
import CharacterCard from '../CharactersPage/CharacterCard'

import characterAvatar from '../../assets/character-avatar.jpeg'

import './EpisodePage.scss'

const charactersNames = ['Luke Skywalker', 'Obi-Wan Kenobi', 'Anakin Skywalker', 'Wilhuff Tarkin', 'Chewbacca']

function EpisodePage() {
    return (
        <div className="episode-page">
            <div className="episode-side-card">
                <img className="episode-cover" src={episodeCover} alt="Episode Cover" />
                <div className="episode-text">
                    <span className="episode-title">Star Wars: Episode I</span>
                    <span className="episode-subtitle">The Phantom Menace</span>
                </div>
            </div>
            <section className="episode-info">
                <p className="episode-summary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div>
                    <span>Director:</span>
                    <span>George Lucas</span>
                </div>
                <div>
                    <span>Release Date:</span>
                    <span>1999-05-19</span>
                </div>
            </section>
            <div className="characters-cards">
                {charactersNames.map((characterName, index) => {
                    return (
                        <CharacterCard
                            key={index}
                            id={index}
                            characterName={characterName}
                            characterAvatar={characterAvatar}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default EpisodePage
