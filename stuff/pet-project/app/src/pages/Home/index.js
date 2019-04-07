import React from 'react'
import PropTypes from 'prop-types'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import MoleculeNotification from '@s-ui/react-molecule-notification'

import Results from '../../components/Results'

const Home = ({router, error, moviesList}) => {
  const onSelectPage = (Event, {page}) => {
    router.push(`/popular/${page}`)
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

Home.propTypes = {
  router: PropTypes.object,
  moviesList: PropTypes.object,
  error: PropTypes.object
}

Home.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

Home.getInitialProps = ({context, routeInfo}) => {
  const page = routeInfo.params.page || 1
  const {domain} = context
  return domain
    .get('most_popular_movies_use_case')
    .execute({page})
    .then(moviesList => {
      return {moviesList}
    })
    .catch(error => {
      return {error}
    })
}

export default Home
