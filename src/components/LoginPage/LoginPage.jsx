import React from 'react'
import './LoginPage.scss'

function LoginPage() {
    return (
        <div className="login-page">
            <text className="big-logo">SWAPP</text>
            <form className="login-form">
                <input placeholder="Username" type="text" name="gender" id="username" />
                <br />
                <input placeholder="Password" type="text" name="gender" id="password" />
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
