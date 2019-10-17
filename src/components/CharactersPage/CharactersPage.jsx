import React from 'react'
import CharacterCard from './CharacterCard'

import characterAvatar from './../../assets/character-avatar.jpeg'

import './CharactersPage.scss'

const charactersNames = [
    'Luke Skywalker',
    'Obi-Wan Kenobi',
    'Anakin Skywalker',
    'Wilhuff Tarkin',
    'Chewbacca',
    'Han Solo',
    'Greedo',
    'Jabba Desilijic Tiure',
    'Wedge Antilies',
    'Jek Tono Porkins',
    'C-3PO',
    'Yoda',
]

function CharactersPage() {
    return (
        <div className="characters-page">
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
            <button className="common-button">Load More</button>
        </div>
    )
}

export default CharactersPage
