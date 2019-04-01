import React, {useState} from 'react'
import AtomInput from '@s-ui/react-atom-input'
import Button from '@schibstedspain/sui-atom-button'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'
import PropTypes from 'prop-types'
import MoviesList from '../MoviesList'
// import components from '../../../../2-frontend-mv--uilib-components/components'

const SearchPage = props => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.router.push(`/?query=${query}`)
  }

  const showMovies = () => props.movies && props.movies.length > 0

  return (
    <div>
      <h1>SearchPage</h1>
      <form onSubmit={handleSubmit}>
        <AtomInput
          id="movies_list"
          onChange={(e, {value}) => {
            setQuery(value)
          }}
        />
        <Button isSubmit type="primary">
          Search
        </Button>
      </form>
      {showMovies() && <MoviesList movies={props.movies} />}
      {props.error && <span>{props.error}</span>}
    </div>
  )
}
SearchPage.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.string,
  router: PropTypes.object
}

SearchPage.renderLoading = () => <h1>Loading</h1>

SearchPage.getInitialProps = ({routeInfo, context}) => {
  const {
    location: {
      query: {query}
    }
  } = routeInfo
  return domain
    .get('search_movies_use_case')
    .execute({query})
    .then(results => {
      if (query && results.Search) {
        return {movies: results.Search}
      }
      return {error: 'No results Found'}
    })
}

export default SearchPage
