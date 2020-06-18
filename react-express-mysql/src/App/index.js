import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import theme from './Theme'
import Layout from './Components/Layout'
import Routes from './Routes'
import Loader from './Components/Loader'
import { GlobalStyles } from './Styles'
import ContentWrapper from './Components/ContentWrapper'

const history = createBrowserHistory()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Layout>
          <React.Suspense fallback={<Loader />}>
            <ContentWrapper>
              <Routes />
            </ContentWrapper>
            <GlobalStyles />
          </React.Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
