import React from 'react'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className="login-page">
            <text className="big-logo">SWAPP</text>
            <form className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" name="gender" id="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" name="gender" id="password" />
                <br />
            </form>
        </div>
    )
}

export default LoginPage
