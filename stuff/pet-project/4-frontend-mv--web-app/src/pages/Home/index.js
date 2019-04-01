import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import fetch from 'isomorphic-fetch'
// import {Link} from 'react-router'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

import AtomInput from '@s-ui/react-atom-input'
import Button from '@schibstedspain/sui-atom-button'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import MoleculeNotification from '@s-ui/react-molecule-notification'
// import MoleculeThumbnail, {
//   moleculeThumbnailShape,
//   moleculeThumbnailSize
// } from '@s-ui/react-molecule-thumbnail'
import AtomCard from '@s-ui/react-atom-card'
// import AtomImage, {urlImageSkeleton} from '@s-ui/react-atom-image'

const HomePage = props => {
  // const [results, setResults] = useState([])
  const [query, setQuery] = useState('')

  const url = 'https://cdn.thegamesdb.net/images/small/'

  const handleQueryInput = ({target: {value: query}}) => {
    setQuery(query)
  }

  const handleSearchSubmit = event => {
    event.preventDefault()
    props.router.push(`/?q=${query}`)
  }

  const imgError = event => {
    event.target.onerror = ''
    event.target.src =
      'https://www.unesale.com/ProductImages/Large/notfound.png'
    return true
  }

  return (
    <div className="header">
      <h1>HomePage</h1>

      <form className="form" onSubmit={handleSearchSubmit}>
        <div>
          <AtomInput
            type="text"
            name="searchBar"
            placeholder="Search..."
            onChange={handleQueryInput}
          />
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </form>
      {props.results.error && (
        <MoleculeNotification
          text={props.results.error}
          type="error"
          autoclose="short"
          variation="negative"
          // buttons={BUTTONS}
        />
      )}
      {/* {props.errorMessage && <h1>{props.errorMessage}</h1>} */}
      <section className="results">
        {props.results.length &&
          props.results.map((game, index) => {
            // const srcCoverGame = `${url}${game.boxartUrl}`
            const urlTarget = `/details/${game.id}`

            // const GameImage = () => (
            //   <AtomImage
            //     src={srcCoverGame}
            //     alt={game.game_title}
            //     skeleton={urlImageSkeleton}
            //   />
            // )
            const GameInfo = () => (
              <div>
                <h3>{game.game_title}</h3>
                <h5>{game.platformName}</h5>
              </div>
            )
            return (
              <div key={game.id} className="gameCard">
                <AtomCard
                  key={game.id}
                  media={() => (
                    <img
                      onError={imgError}
                      className="gameCard-image"
                      src={
                        game.boxartUrl
                          ? `${url}${game.boxartUrl}`
                          : `https://www.unesale.com/ProductImages/Large/notfound.png`
                      }
                    />
                  )}
                  content={GameInfo}
                  href={urlTarget}
                  vertical
                />
              </div>
            )
          })}
      </section>
      {/* <section className="results">
        {props.results.length &&
          props.results.map((game, index) => (
            <div key={index}>
              <h2>{game.game_title}</h2>
              <MoleculeThumbnail
                src={`${url}${game.boxartUrl}`}
                alt={game.game_title}
                captionText={game.platformName}
                placeholder={{
                  alt: game.game_title,
                  src: `${url}${game.boxartUrl}`
                }}
                shape={moleculeThumbnailShape.SQUARED}
                size={moleculeThumbnailSize.SMALL}
              />
            </div>
          ))}
      </section> */}
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
      query: {q}
    }
  }
}) => {
  if (q === undefined) {
    return domain
      .get('ranking_games_use_case')
      .execute()
      .then(response => {
        return {
          results: response
        }
      })
      .catch(error => {
        return {
          results: error
        }
      })
  } else {
    return domain
      .get('search_games_use_case')
      .execute({query: q})
      .then(response => {
        return {
          results: response
        }
      })
      .catch(error => {
        return {
          results: error
        }
      })
  }
}

export default HomePage

// HomePage.getInitialProps = ({
//   routeInfo: {
//     location: {
//       query: {q}
//     }
//   }
// }) => {
//   if (q === undefined) {
//     return fetch(`https://shielded-hamlet-42041.herokuapp.com/api/ranking/20`)
//       .then(res => res.json())
//       .then(result => {
//         return {
//           results: result
//         }
//       })
//   } else {
//     return fetch(`https://shielded-hamlet-42041.herokuapp.com/api/games?q=${q}`)
//       .then(res => res.json())
//       .then(result => {
//         return {
//           results: result
//         }
//       })
//       .catch(error => {
//         return {
//           errorMessage: error
//         }
//       })
//   }
// }
