import React from 'react'
import { Card } from './../Card'

import characterAvatar from './../../assets/character-avatar.jpeg'

import styles from './CharactersPage.module.scss'

const charactersNames = [
    'Luke Skywalker',
    'Obi-Wan Kenobi',
    'Anakin Skywalker',
    'Wilhuff Tarkin',
    'Chewbacca',
    'Han Solo',
    'Greedo',
    'Jabba Desilijic Tiure',
    'Jabba Desilijic Tiure',
    'Wedge Antilies',
    'Jek Tono Porkins',
    'C-3PO',
    'Yoda',
]

function CharactersPage() {
    return (
        <div className={styles.page}>
            <div className={styles.cards}>
                {charactersNames.map((characterName, index) => {
                    return (
                        <Card
                            small
                            key={index}
                            imgSrc={characterAvatar}
                            to={`/characters/${index}`}
                            mainText={characterName}
                        />
                    )
                })}
            </div>
            <button className="common-button">Load More</button>
        </div>
    )
}

export default CharactersPage
