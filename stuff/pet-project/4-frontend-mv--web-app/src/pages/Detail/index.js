import React from 'react'
import PropTypes from 'prop-types'
// import fetch from 'isomorphic-fetch'
import {Link} from 'react-router'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import AtomImage, {urlImageSkeleton} from '@s-ui/react-atom-image'

const DetailPage = props => {
  const url = 'https://cdn.thegamesdb.net/images/medium/'
  const srcCoverGame = `${url}${props.boxartUrl}`

  return (
    <div className="gameDetail-page">
      <h1 className="gameDetail-header">{props.game_title}</h1>
      <h3>{props.platformName}</h3>
      <Link to="/">Go home</Link>

      <div className="gameDetail">
        {props.boxartUrl ? (
          <AtomImage
            src={srcCoverGame}
            alt={props.game_title}
            skeleton={urlImageSkeleton}
          />
        ) : (
          <AtomImage
            src="https://www.unesale.com/ProductImages/Large/notfound.png"
            alt={props.game_title}
            skeleton={urlImageSkeleton}
          />
        )}
        <div className="gameDetail-details">
          {props.finalScore ? (
            <h2 className="gameDetail-info-finalScore">
              {Math.round(props.finalScore * 20)}
            </h2>
          ) : (
            <h2 className="gameDetail-info-notRated">Not rated yet!</h2>
          )}
          <p>
            Platform :{' '}
            <span className="gameDetail-info--detail">
              {props.platformName.join(', ')}
            </span>
          </p>
          {props.genreNames[0] !== 'N/A' && (
            <p>
              Genres :{' '}
              <span className="gameDetail-info--detail">
                {props.genreNames.join(', ')}
              </span>
            </p>
          )}
          {props.developerNames[0] !== 'N/A' && (
            <p>
              Developers :{' '}
              <span className="gameDetail-info--detail">
                {props.developerNames.join(', ')}
              </span>
            </p>
          )}
          {props.publisherNames[0] !== 'N/A' && (
            <p>
              Publishers :{' '}
              <span className="gameDetail-info--detail">
                {props.publisherNames.join(', ')}
              </span>
            </p>
          )}
          {props.players !== null && (
            <p>
              Players :{' '}
              <span className="gameDetail-info--detail">{props.players}</span>
            </p>
          )}
          <p>
            Coop : <span className="gameDetail-info--detail">{props.coop}</span>
          </p>
        </div>

        <p className="gameDetail-overview">{props.overview}</p>
      </div>
    </div>
  )
}

DetailPage.propTypes = {
  game_title: PropTypes.string,
  overview: PropTypes.string,
  boxartUrl: PropTypes.string,
  platformName: PropTypes.array,
  finalScore: PropTypes.number,
  genreNames: PropTypes.array,
  developerNames: PropTypes.array,
  publisherNames: PropTypes.array,
  players: PropTypes.string,
  coop: PropTypes.string
}

DetailPage.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

DetailPage.getInitialProps = ({routeInfo, context}) => {
  const {
    params: {gameId}
  } = routeInfo
  return domain
    .get('detail_games_use_case')
    .execute({gameId})
    .then(response => {
      return response
    })
}

export default DetailPage
