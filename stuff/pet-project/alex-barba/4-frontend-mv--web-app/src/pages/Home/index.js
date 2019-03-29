import React, {useState} from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

const HomePage = ({router}) => {
  const [query, setQuery] = useState(null)

  return (
    <div className="home">
      <div className="home-header">
        <h1>Barbass Movie Database</h1>
      </div>
      <div className="home-search">
        <div className="sktest-BarbasSearchBar">
          <form
            className="sktest-BarbasSearchBar-wrapper"
            onSubmit={e => {
              e.preventDefault()
              router.push(`/search/${query}`)
            }}
          >
            <input
              className="sktest-BarbasSearchBar-input"
              name="input"
              type="text"
              placeholder="Type in your query!"
              onChange={e => setQuery(e.target.value)}
            />
            <button className="sktest-BarbasSearchBar-button">Search</button>
          </form>
        </div>
      </div>
      <div className="home-nav">
        <Link to="/most-popular-movies">Most Popular Movies</Link>
        <Link to="/highest-rated-movies">Highest Rated Movies</Link>
      </div>
      <div className="home-footer">
        <p>by Barbass Studio</p>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  router: PropTypes.object
}

HomePage.renderLoading = () => (
  <div className="spinner">
    <i className="fas fa-spinner fa-pulse" />
  </div>
)

export default HomePage
