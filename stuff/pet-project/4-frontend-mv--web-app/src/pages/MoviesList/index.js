import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'
import AtomCard from '@s-ui/react-atom-card'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import './index.scss'

const MoviesList = props => {
  console.log(props)

  const Spinner = () => {
    return <AtomSpinner type={AtomSpinnerTypes.FULL} />
  }

  const errorImg = 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image'

  return props.movies.map(movie => {
    const MovieImage = () => (
      <div className="containerImageStyles">
        {movie.Poster === 'N/A' ? (
          <AtomImage
            className="imageStyle"
            src={errorImg}
            spinner={Spinner}
            alt="Nice Picture"
          />
        ) : (
          <AtomImage
            className="imageStyle"
            src={movie.Poster}
            spinner={Spinner}
            alt="Nice Picture"
          />
        )}
      </div>
    )

    const MovieInfo = () => (
      <article>
        <h2>{movie.Title}</h2>
      </article>
    )
    return (
      <Link
        className="movieLink"
        to={`/movie/${movie.imdbID}`}
        key={movie.imdbID}
      >
        <AtomCard
          className="movieCard"
          media={MovieImage}
          content={MovieInfo}
          vertical
        />
      </Link>
    )
  })
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

export default MoviesList
