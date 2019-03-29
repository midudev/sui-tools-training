import React, {useState} from 'react'
import {Link} from 'react-router'
import BarbasCard from 'sktest-barbass-card'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

import PropTypes from 'prop-types'

const SearchPage = ({results, router}) => {
  const [query, setQuery] = useState(router.params.query)

  return (
    <div className="search">
      <div className="search-header">
        <h1>Look for your movies!</h1>
      </div>
      <div className="search-nav">
        <Link to="/">Go back to Home</Link>
      </div>
      <div className="search-search">
        <div className="sktest-BarbasSearchBar">
          <form
            className="sktest-BarbasSearchBar-wrapper"
            onSubmit={e => {
              e.preventDefault()
              router.push(`/search/${query}`)
            }}
          >
            <input
              className="sktest-BarbasSearchBar-input"
              name="input"
              type="text"
              placeholder="Type in your query!"
              onChange={e => setQuery(e.target.value)}
            />
            <button className="sktest-BarbasSearchBar-button">Search</button>
          </form>
        </div>
      </div>
      <div className="search-results">
        {!results.length && <p>No films matching your query!</p>}
        <div className="movie-container">
          {results &&
            !!results.length &&
            results.map((movie, index) => (
              <Link
                to={`/search/${query}/detail/${movie.id}`}
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

SearchPage.propTypes = {
  results: PropTypes.array,
  router: PropTypes.object
}

SearchPage.renderLoading = () => (
  <div className="spinner">
    <i className="fas fa-spinner fa-pulse" />
  </div>
)

SearchPage.getInitialProps = ({routeInfo, context}) => {
  const {
    params: {query}
  } = routeInfo

  return domain
    .get('search_movies_use_case')
    .execute({query})
    .then(({results}) => {
      return {results}
    })
}

export default SearchPage
