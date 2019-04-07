import React from 'react'
import PropTypes from 'prop-types'

import AtomCard from '@s-ui/react-atom-card'
import AtomImage from '@s-ui/react-atom-image'

const MovieCard = ({movie}) => {
  const movieImage = () => (
    <AtomImage src={movie.posterPath} alt={movie.title} />
  )
  const movieInfo = () => (
    <header>
      <span className="date">{movie.releaseDate}</span>
      <h1>{movie.title}</h1>
    </header>
  )
  return (
    <article className="movie">
      <AtomCard
        media={movieImage}
        content={movieInfo}
        href={`/movie/${movie.id}`}
        vertical
      />
    </article>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object
}

export default MovieCard
