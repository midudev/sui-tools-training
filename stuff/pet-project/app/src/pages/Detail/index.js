import React from 'react'
import PropTypes from 'prop-types'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

import MovieDetailCard from '../../components/MovieDetailCard'

const Detail = ({movie}) => {
  return (
    <React.Fragment>
      <MovieDetailCard movie={movie} />
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
