import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IsomorphicFetch from 'isomorphic-fetch'
import './index.scss'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

const HomePage = props => {
  const [query, setQuery] = useState([])

  const setQueryValue = event => {
    setQuery(event.target.value)
  }

  const onSearch = event => {
    event.preventDefault()

    props.router.push(`/?query=${query}`)
  }

  return (
    <div>
      <form className="searchForm" onSubmit={onSearch}>
        <input
          className="searchForm-input"
          onChange={event => setQueryValue(event)}
        />
        <button className="searchForm-button"> Search </button>
      </form>
      {!props.error &&
        props.results.map((movie, index) => (
          <a href={`/detail/${movie.imdbID}`} key={index}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} />
          </a>
        ))}
      {props.error && <h1>{`${props.error}`}</h1>}
    </div>
  )
}
HomePage.propTypes = {
  results: PropTypes.array,
  router: PropTypes.object,
  error: PropTypes.string
}
HomePage.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

HomePage.getInitialProps = ({
  routeInfo: {
    location: {
      query: {query}
    }
  }
}) => {
  if (query === undefined) query = 'avengers'
  return IsomorphicFetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=ab2734dd&s=${query}`
  )
    .then(res => res.json())
    .then(result => {
      const {Search} = result
      if (Search) return {results: Search}
      else return {error: `Could not find any films by ${query}`}
    })
}

export default HomePage
