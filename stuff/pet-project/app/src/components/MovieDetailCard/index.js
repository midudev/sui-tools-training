import React from 'react'
import PropTypes from 'prop-types'

import AtomImage from '@s-ui/react-atom-image'

const MovieDetailCard = ({movie}) => {
  return (
    <div className="movie-detail">
      <div className="movie-detail-image">
        <AtomImage src={movie.posterPath} alt={movie.title} />
      </div>
      <div className="movie-detail-info">
        <header>
          <div className="movie-detail-vote-average">
            <span>{movie.voteAverage}</span>/10
          </div>
          <h2>{movie.title}</h2>
        </header>
        {movie.overview}
      </div>
    </div>
  )
}

MovieDetailCard.propTypes = {
  movie: PropTypes.object
}

export default MovieDetailCard
