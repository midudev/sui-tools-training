import React from 'react'
// import IsomorphicFetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import Button from '@schibstedspain/sui-atom-button'
import MoleculeNotification from '@s-ui/react-molecule-notification'
import AtomImage from '@s-ui/react-atom-image'
import AtomTag from '@schibstedspain/sui-atom-tag'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'
import './index.scss'

const DetailPage = props => {
  return (
    <div>
      <Button onClick={() => props.router.goBack()}> Back </Button>
      <div className="detailPage">
        <h1 className="detailPage-title"> Oriol Escolar's Movie Finder</h1>

        {props.movie && (
          <div className="detail">
            <h1 className="detail-title">{props.movie.Title}</h1>
            <AtomImage src={props.movie.Poster} />
            <p> {'Year: ' + props.movie.Year}</p>
            <p> {'Released: ' + props.movie.Released}</p>
            <p> {'Genre: ' + props.movie.Genre}</p>
            <p> {'Runtime: ' + props.movie.Runtime}</p>
            <p> {'Actors: ' + props.movie.Actors}</p>
            <p>
              IMDB Rating: <AtomTag label={props.movie.imdbRating} />
            </p>
          </div>
        )}
        {props.error && (
          <MoleculeNotification type="warning">
            {props.error}
          </MoleculeNotification>
        )}
      </div>
    </div>
  )
}

DetailPage.propTypes = {
  movie: PropTypes.object,
  error: PropTypes.string,
  router: PropTypes.object
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
