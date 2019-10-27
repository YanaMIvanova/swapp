import React, { useState } from 'react'

import styles from './LoginPage.module.scss'

function LoginPage() {
    const [formState, setFormState] = useState({ username: '', password: '' })

    const login = e => {
        e.preventDefault()
        console.log(formState)
        setFormState({ username: '', password: '' })
    }

    const change = e => {
        e.preventDefault()
        setFormState({ ...formState, ...{ [e.target.id]: e.target.value } })
    }

    return (
        <div className={styles.page}>
            <span className={styles.logo}>SWAPP</span>
            <form onSubmit={login} className={styles.form}>
                <input
                    onChange={change}
                    value={formState.username}
                    className={styles.input}
                    placeholder="Username"
                    type="text"
                    id="username"
                />
                <br />
                <input
                    onChange={change}
                    value={formState.password}
                    className={styles.input}
                    placeholder="Password"
                    type="text"
                    id="password"
                />
                <br />
                <input className={styles.submitButton} type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginPage
