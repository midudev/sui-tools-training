import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import Button from '@schibstedspain/sui-atom-button'
import AtomInput from '@s-ui/react-atom-input'
import MoleculeNotification from '@s-ui/react-molecule-notification'
import AtomImage from '@s-ui/react-atom-image'
import {Link} from 'react-router'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

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
    <div className="content">
      <form className="searchForm" onSubmit={onSearch}>
        <AtomInput
          className="searchForm-input"
          onChange={event => setQueryValue(event)}
        />
        <Button className="searchForm-button"> Search </Button>
      </form>
      {!props.error &&
        props.results.map((movie, index) => (
          <Link
            className="content-card"
            to={`detail/${movie.imdbID}`}
            key={index}
          >
            <h2>{movie.Title}</h2>
            <AtomImage src={movie.Poster} />
          </Link>
        ))}
      {props.error && (
        <MoleculeNotification className="content-warning" type="warning">{`${
          props.error
        }`}</MoleculeNotification>
      )}
    </div>
  )
}
HomePage.propTypes = {
  results: PropTypes.array,
  router: PropTypes.object,
  error: PropTypes.string
}
HomePage.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

HomePage.getInitialProps = ({routeInfo, context}) => {
  const {location} = routeInfo
  let {
    query: {query}
  } = location
  if (query === undefined) query = 'avengers'
  return domain
    .get('search_movies_use_case')
    .execute({query})
    .then(response => {
      if (response.Search) return {results: response.Search}
      else return {error: `Could not find any films by ${query}`}
    })
}

export default HomePage
