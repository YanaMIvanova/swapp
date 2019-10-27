import React from 'react'
import { Link } from 'react-router-dom'
import { string, bool } from 'prop-types'

import styles from './Card.module.scss'

export default function Card(props) {
    const { imgSrc, mainText, subText, to, small } = props

    return (
        <Link className={styles.card} to={to}>
            <img className={styles.image} src={imgSrc} alt="Character Avatar" />
            <div className={`${styles.text}${small ? ` ${styles.small}` : ''}`}>
                <span className={styles.main}>{mainText}</span>
                {subText && <span className={styles.sub}>{subText}</span>}
            </div>
        </Link>
    )
}

Card.propTypes = {
    small: bool,
    imgSrc: string.isRequired,
    mainText: string.isRequired,
    subText: string,
    to: string.isRequired,
}
