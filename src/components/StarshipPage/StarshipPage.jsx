import React from 'react'
import starshipAvatar from './../../assets/starship.png'
import { Title } from './../Title'
import Chart from './Chart'

import styles from './StarshipPage.module.scss'

const starship = {
    name: 'Jedi starfighter',
    type: '(Delta-7 Aethersprite-class interceptor)',
    starshipClass: 'starfighter',
    cost: 180000,
    crew: 1,
    speed: 1150,
    rating: 1,
}

function StarshipPage() {
    return (
        <div className={styles.page}>
            <Title mainTitle={starship.name} subtitle={starship.type} />
            <div className={styles.card}>
                <img src={starshipAvatar} alt="Starship avatar" className={styles.avatar} />
                <div>
                    <b>Class: </b>
                    <span className="blue-text">{starship.starshipClass}</span>
                    <br />
                    <b>Cost: </b>
                    <span className="blue-text">{starship.cost}</span>
                    <br />
                    <b>Crew: </b>
                    <span className="blue-text">{starship.crew}</span>
                    <br />
                    <b>Max Atmospheric Speed: </b>
                    <span className="blue-text">{starship.speed}</span>
                    <br />
                    <b>Hyperdrive Rating: </b>
                    <span className="blue-text">{starship.rating}</span>
                </div>
            </div>
            <div className={styles.classMax}>
                <h4>Compared to Starship Class Max</h4>
                <Chart {...starship} />
            </div>
        </div>
    )
}

export default StarshipPage
