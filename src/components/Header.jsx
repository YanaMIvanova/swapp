import React from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import './Header.scss'

function Header() {
    let history = useHistory()

    function handleGoBack() {
        history.goBack()
    }
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
                <button onClick={handleGoBack}>Back</button>
            </div>
        </header>
    )
}

export default Header
