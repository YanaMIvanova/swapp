import React from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'

import styles from './Header.module.scss'

function Header() {
    let history = useHistory()

    function handleGoBack() {
        history.goBack()
    }
    return (
        <header className={styles.header}>
            <Link className={styles.logo} to="/">
                SWAPP
            </Link>
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.active} to="/episodes">
                            Episodes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to="/characters">
                            Characters
                        </NavLink>
                    </li>
                </ul>
                <button className={styles.backButton} onClick={handleGoBack}>
                    Back
                </button>
            </div>
        </header>
    )
}

export default Header
