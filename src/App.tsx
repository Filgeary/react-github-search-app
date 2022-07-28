import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import NavBarComponent from './components/NavBarComponent'
import NotFound404 from './components/NotFound404'
import { CACHE_TIME_IN_MS } from './constants'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: CACHE_TIME_IN_MS,
    },
  },
})

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Container
          fluid
          className='g-0 min-vh-100 d-flex flex-column bg-light'
        >
          <NavBarComponent />

          <main className='py-4 px-3 px-md-4'>
            <Switch>
              <Route
                path='/about'
                exact
              >
                <AboutPage />
              </Route>
              <Route path='/profile/:id'>
                <ProfilePage />
              </Route>
              <Route
                path='/'
                exact
              >
                <HomePage />
              </Route>
              <Route>
                <NotFound404 />
              </Route>
            </Switch>
          </main>

          <Footer />
        </Container>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
