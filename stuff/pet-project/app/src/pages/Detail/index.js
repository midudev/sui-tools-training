import React from 'react'
import PropTypes from 'prop-types'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

import MovieDetailCard from '../../components/MovieDetailCard'
import BackLink from '../../components/BackLink'

const Detail = ({router, movie}) => {
  return (
    <div className="movie-detail-container">
      <BackLink router={router} />
      <MovieDetailCard movie={movie} />
    </div>
  )
}

Detail.propTypes = {
  router: PropTypes.object,
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
