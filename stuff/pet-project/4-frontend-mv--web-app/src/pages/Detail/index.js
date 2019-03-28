import React from 'react'
import IsomorphicFetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import './index.scss'

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

DetailPage.getInitialProps = ({
  routeInfo: {
    params: {id}
  }
}) => {
  if (id === undefined) id = 'avengers'
  return IsomorphicFetch(`http://www.omdbapi.com/?apikey=ab2734dd&i=${id}`)
    .then(res => res.json())
    .then(result => {
      if (!result.Error) return {movie: result}
      else return {error: `Film not available`}
    })
}

export default DetailPage
