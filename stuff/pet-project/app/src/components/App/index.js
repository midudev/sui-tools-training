import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import SearchForm from '../SearchForm'

const App = ({router, children}) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Movie Search</title>
    </Helmet>
    <header>
      <SearchForm router={router} />
    </header>
    <main>{children}</main>
    <footer>
      <p>Build with love by robertz</p>
    </footer>
  </React.Fragment>
)

App.propTypes = {
  children: PropTypes.element,
  router: PropTypes.object
}

export default App
