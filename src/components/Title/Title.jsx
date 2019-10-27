import React from 'react'
import classnames from 'classnames'
import { string, bool } from 'prop-types'

import styles from './Title.module.scss'

export default function Title(props) {
    const { mainTitle, subtitle, underline } = props

    return (
        <div className={classnames(styles.title, { [styles.underline]: underline })}>
            {mainTitle && <h1 className={`blue-text ${styles.mainTitle}`}>{mainTitle}</h1>}
            {subtitle && <h2 className={`black-text ${styles.subtitle}`}>{subtitle}</h2>}
        </div>
    )
}

Title.propTypes = {
    underline: bool,
    mainTitle: string,
    subtitle: string,
}

Title.defaultProps = {
    underline: true,
}
