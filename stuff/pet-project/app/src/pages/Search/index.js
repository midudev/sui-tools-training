import React from 'react'
import PropTypes from 'prop-types'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

import Results from '../../components/Results'
import Pagination from '../../components/Pagination'

const Search = ({router, query, movies, actualPage, totalPages}) => {
  const onSelectPage = (Event, {page}) => {
    router.push(`/search/${query}/${page}`)
  }

  return (
    <React.Fragment>
      <Results movies={movies} />
      <Pagination
        actualPage={actualPage}
        totalPages={totalPages}
        onSelectPage={onSelectPage}
      />
    </React.Fragment>
  )
}

Search.propTypes = {
  router: PropTypes.object,
  query: PropTypes.string,
  movies: PropTypes.array,
  actualPage: PropTypes.number,
  totalPages: PropTypes.number
}

Search.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

Search.getInitialProps = ({context, routeInfo}) => {
  const query = routeInfo.params.query
  const page = routeInfo.params.page || 1
  const {domain} = context
  return domain
    .get('search_movies_use_case')
    .execute({query, page})
    .then(({movies, actualPage, totalPages}) => {
      return {query, movies, actualPage, totalPages}
    })
}

export default Search
