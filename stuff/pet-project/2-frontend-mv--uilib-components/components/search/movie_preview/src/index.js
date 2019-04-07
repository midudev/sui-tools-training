import React, {Component} from 'react'
import AtomImage from '@s-ui/react-atom-image'
import AtomCard from '@s-ui/react-atom-card'
import PropTypes from 'prop-types'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import './index.scss'
class SearchMoviePreview extends Component {
  render() {
    const {movie} = this.props
    const errorImg = 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image'

    const Spinner = () => {
      return <AtomSpinner type={AtomSpinnerTypes.FULL} />
    }

    const MovieImage = () => (
      <div className="sui-SearchMoviePreview__containerImage">
        {movie.Poster === 'N/A' ? (
          <AtomImage
            className="sui-SearchMoviePreview__image"
            src={errorImg}
            spinner={Spinner}
            alt="Nice Picture"
          />
        ) : (
          <AtomImage
            className="sui-SearchMoviePreview__image"
            src={movie.Poster}
            spinner={Spinner}
            alt="Nice Picture"
          />
        )}
      </div>
    )
    const MovieInfo = () => (
      <article>
        <h2 className={'sui-SearchMoviePreview__title'}>{movie.Title}</h2>
      </article>
    )
    return (
      <div className={'sui-SearchMoviePreview'}>
        <AtomCard media={MovieImage} content={MovieInfo} vertical />
      </div>
    )
  }
}

SearchMoviePreview.displayName = 'SearchMoviePreview'

// Remove these comments if you need
SearchMoviePreview.contextTypes = {}

SearchMoviePreview.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Type: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string
  })
}
// SearchMoviePreview.defaultProps = {}

export default SearchMoviePreview
