import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
// import fetch from 'isomorphic-fetch'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

const DetailPage = ({movie}) => (
  <div>
    <h2>{movie.Title}</h2>
    <img width="150" src={movie.Poster} />
    <Link to="/">Ir a la home</Link>
  </div>
)
DetailPage.propTypes = {
  movie: PropTypes.object
}

DetailPage.getInitialProps = ({routeInfo, context}) => {
  const {params} = routeInfo
  const {id} = params

  return domain
    .get('detail_movies_use_case')
    .execute({id})
    .then(response => {
      console.log(response)
      return {movie: response}
    })
}

export default DetailPage
