import React from 'react'
import Link from 'react-router/lib/Link'
import PropTypes from 'prop-types'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import AtomImage from '@s-ui/react-atom-image'

const Detail = ({movie}) => {
  return (
    <React.Fragment>
      <Link to="/" className="back">
        Back
      </Link>
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
    </React.Fragment>
  )
}

Detail.propTypes = {
  movie: PropTypes.object
}

Detail.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

Detail.getInitialProps = ({context, routeInfo}) => {
  const id = routeInfo.params.id
  const {domain} = context
  return domain
    .get('detail_movies_use_case')
    .execute({id})
    .then(({movie}) => {
      return {movie}
    })
}

export default Detail
