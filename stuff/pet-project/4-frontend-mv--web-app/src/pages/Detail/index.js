import React from 'react'
import PropTypes from 'prop-types'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

const DetailPage = props => {
  return (
    <div>
      <h1>Detail</h1>
      <article>
        <img src={props.movie.Poster} />
        <h1>{props.movie.Title}</h1>
      </article>
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
