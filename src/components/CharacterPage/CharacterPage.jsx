import React from 'react'
import characterAvatar from './../../assets/character-avatar.jpeg'
import starshipAvatar from './../../assets/starship.png'
import { Card } from './../Card'

import styles from './CharacterPage.module.scss'

const starshipsNames = [
    'Jedi starfighter',
    'Trade Federation cruiser',
    'Naboo star skiff',
    'Jedi Interceptor',
    'Belbullab-22 starfighter',
]

function CharacterPage() {
    return (
        <div className={styles.page}>
            <h1 className="title blue-text">Obi-Wan Kenobi</h1>
            <div className={styles.card}>
                <img src={characterAvatar} alt="Character avatar" className={styles.avatar} />
                <div>
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
                <div className="title black-text">Piloted Starships</div>
                {starshipsNames.map((starshipName, index) => (
                    <Card key={index} to={`/starships/${index}`} imgSrc={starshipAvatar} mainText={starshipName} />
                ))}
            </div>
        </div>
    )
}

export default CharacterPage
