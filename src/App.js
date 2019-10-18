import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { EpisodesPage } from './components/EpisodesPage'
import { EpisodePage } from './components/EpisodePage'
import { CharactersPage } from './components/CharactersPage'
import { CharacterPage } from './components/CharacterPage'
import { StarshipPage } from './components/StarshipPage'
import Header from './components/Header/Header'

import './App.scss'

function App({ theme = 'light' }) {
    const loggedIn = true

    return (
        <div className={theme}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        {loggedIn ? <Redirect to="/episodes" /> : <LoginPage />}
                    </Route>
                    <Route exact path="/episodes">
                        {loggedIn ? <EpisodesPage /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/characters">
                        <CharactersPage />
                    </Route>
                    <Route path="/episodes/:episodeId">
                        <EpisodePage />
                    </Route>
                    <Route path="/characters/:characterId">
                        <CharacterPage />
                    </Route>
                    <Route path="/starships/:starshipId ">
                        <StarshipPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
