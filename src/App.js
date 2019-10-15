import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { EpisodesPage } from './components/EpisodesPage'
import { CharactersPage } from './components/CharactersPage'
import { EpisodePage } from './components/EpisodePage'
import { StarshipPage } from './components/StarshipPage'
import Header from './components/Header'
import './App.scss'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route path="/episodes">
                    <EpisodesPage />
                </Route>
                <Route path="/characters">
                    <CharactersPage />
                </Route>
                <Route path="/episodes/:episodeId">
                    <EpisodePage />
                </Route>
                <Route path="/starships/:starshipId ">
                    <StarshipPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
