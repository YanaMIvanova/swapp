import React from 'react'
import { Link } from 'react-router-dom'

export default function CharacterCard(props) {
    const { characterAvatar, characterName, id } = props

    return (
        <Link className="character-card" to={`/characters/${id}`}>
            <img className="character-avatar" src={characterAvatar} alt="Character Avatar" />
            <div className="character-text">
                <span className="character-name">{characterName}</span>
            </div>
        </Link>
    )
}
