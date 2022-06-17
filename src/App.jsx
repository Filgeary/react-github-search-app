import React from 'react'
import { Container } from 'react-bootstrap'
import NavBarComponent from './components/NavBarComponent'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 60 * 60 * 1000,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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

      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
