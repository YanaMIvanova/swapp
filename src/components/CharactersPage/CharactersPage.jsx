import React from 'react'
import characterAvatar from './../../assets/character-avatar.jpeg'
import CharacterCard from './CharacterCard'
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
                return <CharacterCard key={index} characterName={characterName} characterAvatar={characterAvatar} />
            })}
        </div>
    )
}

export default CharactersPage
