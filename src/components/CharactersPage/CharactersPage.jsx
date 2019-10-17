import React from 'react'
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
            {charactersNames.map((characterName, index) => {
                return (
                    <div key={index} className="character-card">
                        <img className="character-avatar" src={characterAvatar} alt="Character Avatar" />
                        <div className="character-text">
                            <span className="character-name">{characterName}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CharactersPage
