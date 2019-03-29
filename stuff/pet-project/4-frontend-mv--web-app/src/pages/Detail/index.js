import React from 'react'
import {Link} from 'react-router'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

import PropTypes from 'prop-types'

const DetailPage = ({movie, router}) => {
  return (
    <div className="detail">
      <div className="detail-header">
        <h1>The chosen one...</h1>
      </div>
      <div className="detail-nav">
        <Link to={`/search/${router.params.query}`}>Go back</Link>
      </div>
      <div className="detail-results">
        {movie && (
          <div className="movie">
            <div className="movie-image">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'https://cdn4.iconfinder.com/data/icons/documents-and-bookmarks-2/128/Documents_Bookmarks_checkmark_no-512.png'
                }
              />
            </div>
            <div className="movie-content">
              <h1>{movie.original_title}</h1>
              <p>{movie.overview}</p>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

DetailPage.propTypes = {
  movie: PropTypes.object,
  router: PropTypes.object
}

DetailPage.renderLoading = () => (
  <div className="spinner">
    <i className="fas fa-spinner fa-pulse" />
  </div>
)

DetailPage.getInitialProps = ({routeInfo, context}) => {
  const {
    params: {id}
  } = routeInfo

  return domain
    .get('detail_movies_use_case')
    .execute({id})
    .then(response => {
      return {movie: response}
    })
}

export default DetailPage
