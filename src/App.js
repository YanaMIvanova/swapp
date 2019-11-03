import React, { useState } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { gql } from 'apollo-boost'
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
    const [isLoggedIn, logIn] = useState(true)

    const cache = new InMemoryCache()
    const client = new ApolloClient({
        cache,
        uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql',
        // uri: 'https://48p1r2roz4.sse.codesandbox.io',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })

    cache.writeData({
        data: {
            isLoggedIn: !!localStorage.getItem('token'),
            cartItems: [],
        },
    })

    // client
    //     .query({
    //         query: gql`
    //             {
    //                 rates(currency: "USD") {
    //                     currency
    //                 }
    //             }
    //         `,
    //     })
    //     .then(result => console.log(result))

    client
        .query({
            query: gql`
                {
                    allPeople(first: 2) {
                        edges {
                            node {
                                name
                            }
                        }
                    }
                }
            `,
        })
        .then(result => console.log(result))

    return (
        <div className={theme}>
            <ApolloProvider client={client}>
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
            </ApolloProvider>
        </div>
    )
}

export default App
