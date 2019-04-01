import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

const MoviesList = props => {
  return props.movies.map(movie => (
    <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
      <article>
        <img src={movie.Poster} />
        <h1>{movie.Title}</h1>
      </article>
    </Link>
  ))
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

export default MoviesList
