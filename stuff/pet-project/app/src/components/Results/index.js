import React from 'react'
import PropTypes from 'prop-types'

import MovieCard from '../MovieCard'
import Pagination from '../../components/Pagination'

const Results = ({
  moviesList: {movies, actualPage, totalPages},
  onSelectPage
}) => {
  if (!movies.length)
    return <div className="not-results">Oops! No results found.</div>

  return (
    <React.Fragment>
      <div className="results">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Pagination
        actualPage={actualPage}
        totalPages={totalPages}
        onSelectPage={onSelectPage}
      />
    </React.Fragment>
  )
}

Results.propTypes = {
  moviesList: PropTypes.object,
  onSelectPage: PropTypes.func
}

export default Results
