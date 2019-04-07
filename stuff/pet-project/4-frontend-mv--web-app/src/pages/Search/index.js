import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import useDebounce from '../../components/Debounce'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'
import AtomInput from '@s-ui/react-atom-input'
import MoviesList from '../../components/MoviesList'
import './index.scss'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

const SearchPage = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  const [moviesCache, setMoviesCache] = useState({})

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchMovies(debouncedSearchTerm)
      } else {
        setResults([])
      }
    },
    [debouncedSearchTerm]
  )

  const handleSubmit = e => {
    e.preventDefault()
  }

  const searchMoviesOnServer = query =>
    domain.get('search_movies_use_case').execute({query})

  const searchMoviesOnCache = query => moviesCache[query]

  const saveMoviesOnCache = (query, result) => {
    setMoviesCache({...moviesCache, [query]: result})
  }

  const showNoResults = () =>
    debouncedSearchTerm.length > 0 && results.length === 0 && !isLoading

  const searchMovies = query => {
    const movieFromCache = searchMoviesOnCache(query)
    setIsLoading(true)
    if (movieFromCache) {
      setResults(movieFromCache)
      setIsLoading(false)
    } else {
      searchMoviesOnServer(query).then(results => {
        const searchResults = results.Search
        if (query && searchResults) {
          setResults(searchResults)
          saveMoviesOnCache(query, searchResults)
          setIsLoading(false)
        } else {
          setResults([])
          setIsLoading(false)
        }
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <AtomInput
          id="movies_list"
          onChange={e => setSearchTerm(e.target.value)}
          placeholder={'Search movies'}
        />
      </form>
      <div className="moviesSection">
        {results && <MoviesList movies={results} />}
        {isLoading ? <AtomSpinner type={AtomSpinnerTypes.FULL} /> : ''}
        {showNoResults() && (
          <div className="noResults">
            <p>No results</p>
            <p>😞</p>
          </div>
        )}
      </div>
    </div>
  )
}

SearchPage.propTypes = {
  error: PropTypes.string,
  router: PropTypes.object
}
export default SearchPage
