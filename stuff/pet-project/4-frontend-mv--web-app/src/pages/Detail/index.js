import React from 'react'
// import IsomorphicFetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import './index.scss'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

const DetailPage = props => {
  return (
    <div>
      {props.movie && (
        <div>
          <h1>{props.movie.Title}</h1>
          <img src={props.movie.Poster} />
        </div>
      )}
      {props.error && <h1>{props.error}</h1>}
    </div>
  )
}

DetailPage.propTypes = {
  movie: PropTypes.object,
  error: PropTypes.string
}

DetailPage.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

DetailPage.getInitialProps = ({routeInfo, context}) => {
  const {params} = routeInfo
  const {id} = params

  return domain
    .get('detail_movies_use_case')
    .execute({id})
    .then(response => {
      console.log(response)
      if (!response.Error) return {movie: response}
      else return {error: `Film not available`}
    })
}
export default DetailPage
