import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <header>
            <Link className="big-logo" to="/">
                SWAPP
            </Link>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/episodes">Episodes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/characters">Characters</NavLink>
                    </li>
                </ul>
                <button>Back</button>
            </div>
        </header>
    )
}

export default Header
