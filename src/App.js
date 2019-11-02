import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { EpisodesPage } from './components/EpisodesPage'
import { EpisodePage } from './components/EpisodePage'
import { CharactersPage } from './components/CharactersPage'
import { CharacterPage } from './components/CharacterPage'
import { StarshipPage } from './components/StarshipPage'
import { Header } from './components/Header'

import './App.scss'

function App({ theme = 'light' }) {
    const [isLoggedIn, logIn] = useState(false)

    return (
        <div className={theme}>
            <Router>
                {isLoggedIn && <Header />}
                <main>
                    {isLoggedIn ? (
                        <Switch>
                            <Route path="/episodes/:episodeId">
                                <EpisodePage />
                            </Route>
                            <Route path="/characters/:characterId">
                                <CharacterPage />
                            </Route>
                            <Route path="/starships/:starshipId">
                                <StarshipPage />
                            </Route>
                            <Route path="/episodes">
                                <EpisodesPage />
                            </Route>
                            <Route path="/characters">
                                <CharactersPage />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/episodes" />
                            </Route>
                        </Switch>
                    ) : (
                        <>
                            <Redirect to="/" />
                            <LoginPage logIn={logIn} />
                        </>
                    )}
                </main>
            </Router>
        </div>
    )
}

export default App
