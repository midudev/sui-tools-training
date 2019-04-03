import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'
import AtomCard from '@s-ui/react-atom-card'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import './index.scss'

const MoviesList = props => {
  const Spinner = () => {
    return <AtomSpinner type={AtomSpinnerTypes.FULL} />
  }

  const IMAGES = {
    PLACEHOLDER: 'https://picsum.photos/50?image=980'
  }
  return props.movies.map(movie => {
    const MovieImage = () => (
      <div className="containerImageStyles">
        <AtomImage
          className="imageStyle"
          src={movie.Poster}
          spinner={Spinner}
          placeholder={IMAGES.PLACEHOLDER}
          alt="Nice Picture"
        />
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
