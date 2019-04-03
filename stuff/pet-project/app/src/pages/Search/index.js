import React from 'react'
import PropTypes from 'prop-types'

const Search = ({movies}) => (
  <React.Fragment>
    <h1>Home test title</h1>
    <div className="results">
      {movies.map(movie => (
        <article key={movie.id}>
          <img src={movie.posterPath} alt={movie.title} />
          {movie.title}
        </article>
      ))}
    </div>
  </React.Fragment>
)

Search.propTypes = {
  movies: PropTypes.array
}

Search.renderLoading = () => <h1>Loading...</h1>

Search.getInitialProps = ({context, routeInfo}) => {
  const query = routeInfo.params.query
  const {domain} = context
  return domain
    .get('search_movies_use_case')
    .execute({query, page: 1})
    .then(({movies}) => {
      return {movies}
    })
}

export default Search
