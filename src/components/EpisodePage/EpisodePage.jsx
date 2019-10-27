import React from 'react'
import { Card } from '../Card'
import { Title } from '../Title'

import episodeCover from './../../assets/episode-cover.jpeg'
import characterAvatar from '../../assets/character-avatar.jpeg'

import styles from './EpisodePage.module.scss'

const charactersNames = ['Luke Skywalker', 'Obi-Wan Kenobi', 'Anakin Skywalker', 'Wilhuff Tarkin', 'Chewbacca']

function EpisodePage() {
    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <img className={styles.cover} src={episodeCover} alt="Episode Cover" />
                <div className={styles.text}>
                    <Title underline={false} mainTitle="Star Wars: Episode I" subtitle="The Phantom Menace" />
                </div>
            </div>
            <section className={styles.info}>
                <p className={styles.summary}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div>
                    <b>Director: </b>
                    <span className="blue-text">George Lucas</span>
                </div>
                <div>
                    <b>Release Date: </b>
                    <span className="blue-text">1999-05-19</span>
                </div>
            </section>
            <div className={styles.cards}>
                {charactersNames.map((characterName, index) => {
                    return (
                        <Card
                            small
                            key={index}
                            imgSrc={characterAvatar}
                            mainText={characterName}
                            to={`/characters/${index}`}
                        />
                    )
                })}
            </div>
            <button className="common-button">Load More</button>
        </div>
    )
}

export default EpisodePage
