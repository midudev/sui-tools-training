import React from 'react'
import Helmet from 'react-helmet'

const Home = () => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <h1>Home test title</h1>
  </React.Fragment>
)

export default Home
