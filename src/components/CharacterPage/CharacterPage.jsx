import React from 'react'
import characterAvatar from './../../assets/character-avatar.jpeg'
import starshipAvatar from './../../assets/starship.png'
import { Card } from './../Card'

import './CharacterPage.scss'

const starshipsNames = [
    'Jedi starfighter',
    'Trade Federation cruiser',
    'Naboo star skiff',
    'Jedi Interceptor',
    'Belbullab-22 starfighter',
]

function CharacterPage() {
    return (
        <div className="character-page">
            <div className="character-page-name blue-text">Obi-Wan Kenobi</div>
            <div className="character-page-card">
                <div>Obi-Wan Kenobi</div>
                <img src={characterAvatar} alt="Character avatar" />
                <div className="character-page-info">
                    <b>Height: </b>
                    <span className="blue-text">182</span>
                    <br />
                    <b>Weight: </b>
                    <span className="blue-text">77</span>
                    <br />
                    <b>Species: </b>
                    <span className="blue-text">Human</span>
                    <br />
                    <b>Home World: </b>
                    <span className="blue-text">Stewjon</span>
                </div>
            </div>
            <div>
                <div className="character-page-name black-text">Piloted Starships</div>
                {starshipsNames.map((starshipName, index) => (
                    <Card key={index} to={`/starships/${index}`} imgSrc={starshipAvatar} mainText={starshipName} />
                ))}
            </div>
        </div>
    )
}

export default CharacterPage
