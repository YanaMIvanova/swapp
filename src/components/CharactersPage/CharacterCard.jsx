import React from 'react'

export default function CharacterCard(props) {
    const { characterAvatar, characterName } = props

    return (
        <div className="character-card">
            <img className="character-avatar" src={characterAvatar} alt="Character Avatar" />
            <div className="character-text">
                <span className="character-name">{characterName}</span>
            </div>
        </div>
    )
}
