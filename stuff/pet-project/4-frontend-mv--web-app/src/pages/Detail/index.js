import React from 'react'
import PropTypes from 'prop-types'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'
import AtomImage from '@s-ui/react-atom-image'
import AtomCard from '@s-ui/react-atom-card'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import './index.scss'
import {Link} from 'react-router'
import Button from '@schibstedspain/sui-atom-button'

const DetailPage = props => {
  const {
    Poster,
    Title,
    Runtime,
    Director,
    Actors,
    Plot,
    imdbRating,
    Website,
    imdbID
  } = props.movie
  const Spinner = () => {
    return <AtomSpinner type={AtomSpinnerTypes.FULL} />
  }

  const IMAGES = {
    PLACEHOLDER: 'https://picsum.photos/50?image=980'
  }

  const MovieImage = () => (
    <div className="containerImageStyles">
      {Poster === 'N/A' ? (
        <AtomImage
          className="imageStyle"
          src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
          spinner={Spinner}
          placeholder={IMAGES.PLACEHOLDER}
          alt="Nice Picture"
        />
      ) : (
        <AtomImage
          className="imageStyle"
          src={Poster}
          spinner={Spinner}
          placeholder={IMAGES.PLACEHOLDER}
          alt="Nice Picture"
        />
      )}
    </div>
  )

  const MovieInfo = () => (
    <article className="movieDetail">
      <h1>{Title}</h1>
      {Runtime === 'N/A' ? '' : <p>Duration: {Runtime}</p>}
      {Director === 'N/A' ? '' : <p>Director: {Director}</p>}
      {Actors === 'N/A' ? '' : <p>Cast: {Actors}</p>}
      {Plot === 'N/A' ? '' : <p>{Plot}</p>}
      {imdbRating === 'N/A' ? '' : <p>Rate: {imdbRating}</p>}
      {Website === 'N/A' ? (
        ''
      ) : (
        <Link className="movieLink" to={Website} key={imdbID}>
          {Website}
        </Link>
      )}
    </article>
  )
  return (
    <section>
      <div className="detail-container">
        <AtomCard media={MovieImage} content={MovieInfo} />
      </div>
      <Button isSubmit type="primary">
        <Link to={`/`} key="home">
          Home
        </Link>
      </Button>
    </section>
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
