import React from 'react'
import { Container } from 'react-bootstrap'
import NavBarComponent from './components/NavBarComponent'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <BrowserRouter>
      <Container
        fluid
        className='g-0'
      >
        <NavBarComponent />

        <main className='py-3'>
          <Switch>
            <Route
              path='/'
              exact
            >
              <HomePage />
            </Route>
            <Route
              path='/about'
              exact
            >
              <AboutPage />
            </Route>
            <Route path='/profile/:id'>
              <ProfilePage />
            </Route>
          </Switch>
        </main>
      </Container>
    </BrowserRouter>
  )
}

export default App
