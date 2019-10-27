import React from 'react'
import { Link } from 'react-router-dom'

import styles from './EpisodesPage.module.scss'

export default function EpisodeCard(props) {
    const { img, title, summary, id } = props

    return (
        <Link className={styles.card} to={`/episodes/${id}`}>
            <img src={img} alt="Episode Cover" className={styles.cover} />
            <div className={styles.text}>
                <span className={styles.title}>{title}</span>
                <p className={styles.summary}>{summary}</p>
            </div>
        </Link>
    )
}
