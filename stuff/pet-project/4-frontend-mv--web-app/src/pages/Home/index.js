import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IsomorphicFetch from 'isomorphic-fetch'
import './index.scss'

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
      {props.results.map((movie, index) => (
        <div key={index}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} />
        </div>
      ))}
      <h1>HomePage</h1>
    </div>
  )
}
HomePage.propTypes = {
  results: PropTypes.array,
  router: PropTypes.object
}
HomePage.renderLoading = () => <h1>Loading</h1>

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

      return {results: Search}
    })
}

export default HomePage
