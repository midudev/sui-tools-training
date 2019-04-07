import React, {Component} from 'react'
import AtomImage from '@s-ui/react-atom-image'
import AtomCard from '@s-ui/react-atom-card'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import PropTypes from 'prop-types'
import './index.scss'

class SearchMovieDetail extends Component {
  render() {
    const {
      Poster,
      Title,
      Runtime,
      Director,
      Actors,
      Plot,
      imdbRating,
      Website
    } = this.props.movie
    const Spinner = () => {
      return <AtomSpinner type={AtomSpinnerTypes.FULL} />
    }

    const IMAGES = {
      PLACEHOLDER: 'https://picsum.photos/50?image=980'
    }

    const MovieImage = () => {
      const posterImg =
        Poster !== 'N/A'
          ? Poster
          : 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image'

      return (
        <div className="sui-SearchMovieDetail__image-container">
          <AtomImage
            className="sui-SearchMovieDetail__image"
            src={posterImg}
            spinner={Spinner}
            placeholder={IMAGES.PLACEHOLDER}
            alt="Nice Picture"
          />
        </div>
      )
    }

    const MovieInfo = () => (
      <article className="sui-SearchMovieDetail__info">
        <h1>{Title}</h1>
        {Runtime === 'N/A' ? '' : <p>Duration: {Runtime}</p>}
        {Director === 'N/A' ? '' : <p>Director: {Director}</p>}
        {Actors === 'N/A' ? '' : <p>Cast: {Actors}</p>}
        {Plot === 'N/A' ? '' : <p>{Plot}</p>}
        {imdbRating === 'N/A' ? '' : <p>Rate: {imdbRating}</p>}
        {Website === 'N/A' ? (
          ''
        ) : (
          <a className="sui-SearchMovieDetail__link" href={Website}>
            {Website}
          </a>
        )}
      </article>
    )
    return (
      <div className="sui-SearchMovieDetail">
        <AtomCard media={MovieImage} content={MovieInfo} />
      </div>
    )
  }
}

SearchMovieDetail.displayName = 'SearchMovieDetail'

// Remove these comments if you need
// SearchMovieDetail.contextTypes = {i18n: PropTypes.object}
SearchMovieDetail.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Type: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Runtime: PropTypes.string,
    Director: PropTypes.string,
    Actors: PropTypes.string,
    Plot: PropTypes.string,
    imdbRating: PropTypes.string,
    Website: PropTypes.string
  })
}
// SearchMovieDetail.defaultProps = {}

export default SearchMovieDetail
