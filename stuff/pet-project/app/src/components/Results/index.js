import React from 'react'
import PropTypes from 'prop-types'

import AtomCard from '@s-ui/react-atom-card'
import AtomImage from '@s-ui/react-atom-image'

const Results = ({movies}) => {
  return (
    <div className="results">
      {movies.map(movie => {
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
          <article key={movie.id} className="movie">
            <AtomCard
              media={movieImage}
              content={movieInfo}
              href={`/movie/${movie.id}`}
              vertical
            />
          </article>
        )
      })}
    </div>
  )
}

Results.propTypes = {
  movies: PropTypes.array
}

export default Results
