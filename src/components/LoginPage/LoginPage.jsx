import React, { useState } from 'react'
import './LoginPage.scss'

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
        <div className="login-page">
            <span className="big-logo">SWAPP</span>
            <form onSubmit={login} className="login-form">
                <input
                    onChange={change}
                    value={formState.username}
                    className="input"
                    placeholder="Username"
                    type="text"
                    id="username"
                />
                <br />
                <input
                    onChange={change}
                    value={formState.password}
                    className="input"
                    placeholder="Password"
                    type="text"
                    id="password"
                />
                <br />
                <input className="submit-button" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginPage
