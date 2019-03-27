import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router'

const HomePage = props => {
  return (
    <div>
      <h1>HomePage</h1>
      {props.results.map((movie, index) => (
        <div key={index}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} />
        </div>
      ))}
      <Link to="/detail">Ir al detalle</Link>
    </div>
  )
}

HomePage.propTypes = {
  results: PropTypes.array
}

/**
 *  fetch('http://www.omdbapi.com/?apikey=4287ad07&s=avengers')
      .then(res => res.json())
      .then(result => {
        const {Search} = result
        setResults(Search)
      })
 */

HomePage.renderLoading = () => <h1>Estoy haciendo un muñecooouuu</h1>

HomePage.getInitialProps = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve({
        results: [
          {
            Title: 'Avengers',
            Poster: 'https://i.ytimg.com/vi/l4HBq452_W8/hqdefault.jpg'
          }
        ]
      })
    }, 500)
  })
}

export default HomePage
