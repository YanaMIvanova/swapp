import React from 'react'
import { Link } from 'react-router-dom'
import { string } from 'prop-types'

import './Card.scss'

export default function Card(props) {
    const { imgSrc, mainText, subText, to } = props

    return (
        <Link className="card" to={to}>
            <img className="image" src={imgSrc} alt="Character Avatar" />
            <div className="text">
                <span className="main">{mainText}</span>
                {subText && <span className="sub">{subText}</span>}
            </div>
        </Link>
    )
}

Card.propTypes = {
    imgSrc: string.isRequired,
    mainText: string.isRequired,
    subText: string,
    to: string.isRequired,
}
