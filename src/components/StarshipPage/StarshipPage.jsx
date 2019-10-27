import React from 'react'
import starshipAvatar from './../../assets/starship.png'
import { Title } from './../Title'

import styles from './StarshipPage.module.scss'

function StarshipPage() {
    return (
        <div className={styles.page}>
            <Title mainTitle="Jedi starfighter" subtitle="(Delta-7 Aethersprite-class interceptor)" />
            <div className={styles.card}>
                <img src={starshipAvatar} alt="Starship avatar" className={styles.avatar} />
                <div>
                    <b>Class: </b>
                    <span className="blue-text">starfighter</span>
                    <br />
                    <b>Cost: </b>
                    <span className="blue-text">180000 credits</span>
                    <br />
                    <b>Crew: </b>
                    <span className="blue-text">1</span>
                    <br />
                    <b>Max Atmospheric Speed: </b>
                    <span className="blue-text">1150</span>
                    <br />
                    <b>Hyperdrive Rating: </b>
                    <span className="blue-text">1</span>
                </div>
            </div>
            <div className={styles.classMax}>
                <h4>Compared to Starship Class Max</h4>
            </div>
        </div>
    )
}

export default StarshipPage
