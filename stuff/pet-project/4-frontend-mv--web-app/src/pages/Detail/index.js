import React from 'react'
import PropTypes from 'prop-types'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'
import {Link} from 'react-router'
import SearchMovieDetail from '@2-frontend-mv--uilib-components/sui-search-movie-detail/src'

const DetailPage = props => {
  return (
    <section>
      <div className="detail-container">
        <SearchMovieDetail movie={props.movie} />
      </div>
      <Link to={`/`} key="home">
        Home
      </Link>
    </section>
  )
}

DetailPage.propTypes = {
  movie: PropTypes.object
}

DetailPage.renderLoading = () => <h1>Loading</h1>

DetailPage.getInitialProps = ({routeInfo}) => {
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
