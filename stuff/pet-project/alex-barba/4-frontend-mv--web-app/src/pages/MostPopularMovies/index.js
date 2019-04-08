import React from 'react'
import {Link} from 'react-router'
import BarbasCard from 'sktest-barbass-card'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

import PropTypes from 'prop-types'

const MostPopularMoviesPage = ({results}) => {
  return (
    <div className="wrapper">
      <div className="wrapper-header">
        <h1>Most Popular Movies</h1>
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
                to={`/search/${movie.title}/detail/${movie.id}`}
                key={index}
                className="movie"
              >
                <BarbasCard
                  image={movie.image}
                  title={movie.title}
                  year={movie.year}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

MostPopularMoviesPage.propTypes = {
  results: PropTypes.array
}

MostPopularMoviesPage.renderLoading = () => (
  <div className="spinner">
    <i className="fas fa-spinner fa-pulse" />
  </div>
)

MostPopularMoviesPage.getInitialProps = ({routeInfo, context}) => {
  return domain
    .get('get_most_popular_movies_use_case')
    .execute()
    .then(results => {
      return {results}
    })
}

export default MostPopularMoviesPage
