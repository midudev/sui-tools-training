import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'

const App = ({router, children}) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Movie Search</title>
    </Helmet>
    <div className="container">
      <Header router={router} />
      <main>
        <div className="content">{children}</div>
      </main>
      <Footer />
    </div>
  </React.Fragment>
)

App.propTypes = {
  children: PropTypes.element,
  router: PropTypes.object
}

export default App
