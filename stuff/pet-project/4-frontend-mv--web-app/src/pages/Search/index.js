import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import useDebounce from '../Debounce'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'
import AtomInput from '@s-ui/react-atom-input'
import Button from '@schibstedspain/sui-atom-button'
import MoviesList from '../MoviesList'
import './index.scss'

const SearchPage = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  console.log(isSearching)
  console.log(results)

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        searchCharacters(debouncedSearchTerm).then(results => {
          if (results) {
            setIsSearching(false)
            setResults(results.Search)
          }
        })
      } else {
        setResults([])
      }
    },
    [debouncedSearchTerm]
  )

  const handleSubmit = e => {
    e.preventDefault()
  }

  const searchCharacters = query => {
    return domain
      .get('search_movies_use_case')
      .execute({query})
      .then(results => {
        if (query && results.Search) {
          setResults(results.Search)
        } else {
          setResults([])
        }
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <AtomInput
          id="movies_list"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button isSubmit type="primary">
          Search
        </Button>
      </form>
      <div className="moviesSection">
        {results && <MoviesList movies={results} />}
        {props.error && <span>{props.error}</span>}
      </div>
    </div>
  )
}

SearchPage.propTypes = {
  error: PropTypes.string,
  router: PropTypes.object
}
export default SearchPage
