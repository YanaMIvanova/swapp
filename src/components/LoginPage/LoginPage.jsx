import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import classnames from 'classnames'

import styles from './LoginPage.module.scss'

const LOGIN_USER = gql`
    mutation login($email: String!) {
        login(email: $email)
    }
`

function LoginPage({ logIn }) {
    const [formState, setFormState] = useState({ username: '', password: '' })
    const [invalidFields, setInvalidFields] = useState({ username: false, password: false })

    const client = useApolloClient()
    const [login, { loading, error }] = useMutation(LOGIN_USER, {
        onCompleted({ login }) {
            localStorage.setItem('token', login)
            client.writeData({ data: { isLoggedIn: true } })
        },
    })

    if (loading) return <p>LOADING...</p>
    if (error) return <p>An error occurred</p>

    const isInvalid = () => Object.values(invalidFields).includes(true)
    const hasEmptyFields = () => Object.values(formState).includes('')

    const handleLogin = e => {
        e.preventDefault()

        if (isInvalid() || hasEmptyFields()) {
            return
        }

        logIn(true)
        setFormState({ username: '', password: '' })
    }

    const handleValidate = e => {
        if (e.target.value.length <= 3) {
            setInvalidFields({ ...invalidFields, [e.target.id]: true })
        } else {
            setInvalidFields({ ...invalidFields, [e.target.id]: false })
        }
    }

    const handleChange = e => {
        e.preventDefault()
        setFormState({ ...formState, ...{ [e.target.id]: e.target.value } })
    }

    return (
        <div className={styles.page}>
            <span className={styles.logo}>SWAPP</span>
            <form onSubmit={handleLogin} className={styles.form}>
                {isInvalid() && <strong className={styles.errorText}>Invalid Credentials</strong>}
                <input
                    required
                    onBlur={handleValidate}
                    onChange={handleChange}
                    value={formState.username}
                    className={classnames(styles.input, { [styles.invalid]: invalidFields.username === true })}
                    placeholder="Username"
                    type="text"
                    id="username"
                />
                <br />
                <input
                    required
                    onBlur={handleValidate}
                    onChange={handleChange}
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
