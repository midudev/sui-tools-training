import React from 'react'
import PropTypes from 'prop-types'

import MoleculePagination from '@s-ui/react-molecule-pagination'

const Search = ({router, query, movies, actualPage, totalPages}) => {
  const onSelectPage = (Event, {page}) => {
    router.push(`/search/${query}/${page}`)
  }

  return (
    <div className="content">
      <div className="results">
        {movies.map(movie => (
          <article key={movie.id}>
            <img src={movie.posterPath} alt={movie.title} />
            {movie.title}
          </article>
        ))}
      </div>
      <div className="pagination">
        <MoleculePagination
          totalPages={totalPages}
          page={actualPage}
          showPages={totalPages > 5 ? 5 : totalPages}
          onSelectPage={onSelectPage}
          onSelectNext={onSelectPage}
          onSelectPrev={onSelectPage}
        />
      </div>
    </div>
  )
}

Search.propTypes = {
  router: PropTypes.object,
  query: PropTypes.string,
  movies: PropTypes.array,
  actualPage: PropTypes.number,
  totalPages: PropTypes.number
}

Search.renderLoading = () => <h1>Loading...</h1>

Search.getInitialProps = ({context, routeInfo}) => {
  const query = routeInfo.params.query
  const page = routeInfo.params.page || 1
  const {domain} = context
  return domain
    .get('search_movies_use_case')
    .execute({query, page})
    .then(({movies, actualPage, totalPages}) => {
      return {query, movies, actualPage, totalPages}
    })
}

export default Search
