import React from 'react'
import PropTypes from 'prop-types'

const Search = ({movies}) => (
  <div className="content">
    <div className="results">
      {movies.map(movie => (
        <article key={movie.id}>
          <img src={movie.posterPath} alt={movie.title} />
          {movie.title}
        </article>
      ))}
    </div>
  </div>
)

Search.propTypes = {
  movies: PropTypes.array
}

Search.renderLoading = () => <h1>Loading...</h1>

Search.getInitialProps = ({context, routeInfo}) => {
  const query = routeInfo.params.query
  const page = routeInfo.params.page || 1

  const {domain} = context
  return domain
    .get('search_movies_use_case')
    .execute({query, page})
    .then(({movies}) => {
      return {movies}
    })
}

export default Search
