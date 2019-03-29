import React from 'react'
import {Link} from 'react-router'
import BarbasCard from 'sktest-barbass-card'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

import PropTypes from 'prop-types'

const HighestRatedMoviesPage = ({results}) => {
  return (
    <div className="wrapper">
      <div className="wrapper-header">
        <h1>Highest Rated Movies</h1>
      </div>
      <div className="wrapper-nav">
        <Link to="/">Go back to Home</Link>
      </div>
      <div className="wrapper-results">
        {!results && <p>No films matching your query!</p>}
        <div className="movie-container">
          {results &&
            !!results.length &&
            results.map((movie, index) => (
              <Link
                to={`/search/${movie.original_title}/detail/${movie.id}`}
                key={index}
                className="movie"
              >
                <BarbasCard
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.original_title}
                  year={`${movie.release_date}`.substring(0, 4)}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

HighestRatedMoviesPage.propTypes = {
  results: PropTypes.array
}

HighestRatedMoviesPage.renderLoading = () => (
  <div className="spinner">
    <i className="fas fa-spinner fa-pulse" />
  </div>
)

HighestRatedMoviesPage.getInitialProps = ({routeInfo, context}) => {
  return domain
    .get('get_highest_rated_movies_use_case')
    .execute()
    .then(({results}) => {
      return {results}
    })
}

export default HighestRatedMoviesPage
