import React, {useState, useEffect} from 'react'
import AtomInput from '@s-ui/react-atom-input'
import Button from '@schibstedspain/sui-atom-button'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'
import PropTypes from 'prop-types'
import MoviesList from '../MoviesList'
import './index.scss'

const SearchPage = props => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  const searchMovie = query => {
    domain
      .get('search_movies_use_case')
      .execute({query})
      .then(results => {
        if (query && results.Search) {
          return setMovies(results.Search)
        } else {
          setMovies([])
        }
        console.log(error)

        return setError('No results Found')
      })
  }
  useEffect(
    () => {
      const {
        location: {
          query: {query}
        }
      } = props
      domain
        .get('search_movies_use_case')
        .execute({query})
        .then(results => {
          if (query && results.Search) {
            setMovies(results.Search)
          } else {
            setMovies([])
          }
        })
    },
    [props]
  )

  const handleChange = value => {
    searchMovie(value)
  }

  const showMovies = () => movies && movies.length > 0

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <AtomInput
          id="movies_list"
          onChange={(e, {value}) => {
            handleChange(value)
          }}
        />
        <Button isSubmit type="primary">
          Search
        </Button>
      </form>
      <div className="moviesSection">
        {showMovies() && <MoviesList movies={movies} />}
        {props.error && <span>{props.error}</span>}
      </div>
    </div>
  )
}
SearchPage.propTypes = {
  error: PropTypes.string,
  router: PropTypes.object
}

SearchPage.renderLoading = () => <h1>Loading</h1>

export default SearchPage
