import React from 'react'
import PropTypes from 'prop-types'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import MoleculeNotification from '@s-ui/react-molecule-notification'

import Results from '../../components/Results'

const Search = ({router, error, query, moviesList}) => {
  const onSelectPage = (Event, {page}) => {
    router.push(`/search/${query}/${page}`)
  }

  if (error)
    return (
      <MoleculeNotification
        children={error.message}
        type="error"
        variation="negative"
        position="bottom"
      />
    )

  return (
    <React.Fragment>
      <Results moviesList={moviesList} onSelectPage={onSelectPage} />
    </React.Fragment>
  )
}

Search.propTypes = {
  router: PropTypes.object,
  query: PropTypes.string,
  moviesList: PropTypes.object,
  error: PropTypes.object
}

Search.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

Search.getInitialProps = ({context, routeInfo}) => {
  const query = routeInfo.params.query
  const page = routeInfo.params.page || 1
  const {domain} = context
  return domain
    .get('search_movies_use_case')
    .execute({query, page})
    .then(moviesList => {
      return {query, moviesList}
    })
    .catch(error => {
      return {error}
    })
}

export default Search
