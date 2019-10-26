import React from 'react'
import { Link } from 'react-router-dom'
import { string, bool } from 'prop-types'

import './Card.scss'

export default function Card(props) {
    const { imgSrc, mainText, subText, to, small } = props

    return (
        <Link className="card" to={to}>
            <img className="image" src={imgSrc} alt="Character Avatar" />
            <div className={`text${small ? ' small' : ''}`}>
                <span className="main">{mainText}</span>
                {subText && <span className="sub">{subText}</span>}
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
