import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router'
import fetch from 'isomorphic-fetch'

const HomePage = props => {
  return (
    <div>
      <h1>HomePage</h1>
      {props.results.map((movie, index) => (
        <Link to={`/detail/${movie.imdbID}`} key={index}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} />
        </Link>
      ))}
      <Link to="/detail">Ir al detalle</Link>
    </div>
  )
}

HomePage.propTypes = {
  results: PropTypes.array
}

HomePage.renderLoading = () => <span>Friendo el 🥓</span>

HomePage.getInitialProps = (routeInfo, context) => {
  return fetch('http://www.omdbapi.com/?apikey=4287ad07&s=avengers')
    .then(res => res.json())
    .then(result => {
      const {Search} = result
      return {results: Search}
    })
}

export default HomePage
