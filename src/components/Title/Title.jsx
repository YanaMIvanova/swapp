import React from 'react'
import { string } from 'prop-types'

import styles from './Title.module.scss'

export default function Title(props) {
    const { mainTitle, subtitle } = props

    return (
        <div className={styles.title}>
            <h1 className={`blue-text ${styles.mainTitle}`}>{mainTitle}</h1>
            {subtitle && <h2 className={`black-text ${styles.subtitle}`}>{subtitle}</h2>}
        </div>
    )
}

Title.propTypes = {
    mainTitle: string.isRequired,
    subtitle: string,
}
