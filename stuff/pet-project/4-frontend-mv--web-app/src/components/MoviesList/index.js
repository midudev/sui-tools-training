import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import SearchMoviePreview from '@2-frontend-mv--uilib-components/sui-search-movie-preview/src'

const MoviesList = props => {
  return props.movies.map(movie => {
    return (
      <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
        <SearchMoviePreview movie={movie} key={movie.imdbID} />
      </Link>
    )
  })
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

export default MoviesList
