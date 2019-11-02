import React, { useState } from 'react'
import classnames from 'classnames'

import styles from './LoginPage.module.scss'

function LoginPage({ logIn }) {
    const [formState, setFormState] = useState({ username: '', password: '' })
    const [invalidFields, setInvalidFields] = useState({ username: false, password: false })

    const isInvalid = () => Object.values(invalidFields).includes(true)
    const hasEmptyFields = () => Object.values(formState).includes('')

    const login = e => {
        e.preventDefault()

        if (isInvalid() || hasEmptyFields()) {
            return
        }

        logIn(true)
        setFormState({ username: '', password: '' })
    }

    const validate = e => {
        if (e.target.value.length <= 3) {
            setInvalidFields({ ...invalidFields, [e.target.id]: true })
        } else {
            setInvalidFields({ ...invalidFields, [e.target.id]: false })
        }
    }

    const change = e => {
        e.preventDefault()
        setFormState({ ...formState, ...{ [e.target.id]: e.target.value } })
    }

    return (
        <div className={styles.page}>
            <span className={styles.logo}>SWAPP</span>
            <form onSubmit={login} className={styles.form}>
                {isInvalid() && <strong className={styles.errorText}>Invalid Credentials</strong>}
                <input
                    required
                    onBlur={validate}
                    onChange={change}
                    value={formState.username}
                    className={classnames(styles.input, { [styles.invalid]: invalidFields.username === true })}
                    placeholder="Username"
                    type="text"
                    id="username"
                />
                <br />
                <input
                    required
                    onBlur={validate}
                    onChange={change}
                    value={formState.password}
                    className={classnames(styles.input, { [styles.invalid]: invalidFields.password === true })}
                    placeholder="Password"
                    type="text"
                    id="password"
                />
                <br />
                <input
                    className={classnames(styles.submitButton, {
                        [styles.disabled]: isInvalid() || hasEmptyFields(),
                    })}
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    )
}

export default LoginPage
