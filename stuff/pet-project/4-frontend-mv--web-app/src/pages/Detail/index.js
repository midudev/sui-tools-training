import React from 'react'
import PropTypes from 'prop-types'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'
import AtomImage from '@s-ui/react-atom-image'
import AtomCard from '@s-ui/react-atom-card'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import './index.scss'
import {Link} from 'react-router'

const DetailPage = props => {
  const Spinner = () => {
    return <AtomSpinner type={AtomSpinnerTypes.FULL} />
  }

  const IMAGES = {
    PLACEHOLDER: 'https://picsum.photos/50?image=980'
  }

  const MovieImage = () => (
    <div className="containerImageStyles">
      <AtomImage
        className="imageStyle"
        src={props.movie.Poster}
        spinner={Spinner}
        placeholder={IMAGES.PLACEHOLDER}
        alt="Nice Picture"
      />
    </div>
  )

  const MovieInfo = () => (
    <article>
      <h1>{props.movie.Title}</h1>
      <p>Director: {props.movie.Runtime}</p>
      <p>Director: {props.movie.Director}</p>
      <p>Cast: {props.movie.Actors}</p>
      <p>{props.movie.Plot}</p>
      <p>Rate: {props.movie.imdbRating}</p>
      <Link
        className="movieLink"
        to={props.movie.Website}
        key={props.movie.imdbID}
      >
        {props.movie.Website}
      </Link>
    </article>
  )
  return (
    <div className="detail-container">
      <AtomCard media={MovieImage} content={MovieInfo} />
    </div>
  )
}

DetailPage.propTypes = {
  movie: PropTypes.object
}

DetailPage.renderLoading = () => <h1>Loading</h1>

DetailPage.getInitialProps = ({routeInfo, context}) => {
  const {params} = routeInfo
  const {id} = params

  return domain
    .get('detail_movies_use_case')
    .execute({id})
    .then(results => {
      return {
        movie: results
      }
    })
}

export default DetailPage
