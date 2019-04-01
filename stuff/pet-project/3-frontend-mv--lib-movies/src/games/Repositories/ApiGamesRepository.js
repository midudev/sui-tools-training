import GamesRepository from './GamesRepository'

export default class ApiGamesRepository extends GamesRepository {
  constructor({fetch}) {
    super()

    this._fetch = fetch
  }

  getDetail({gameId}) {
    return this._fetch(
      `https://shielded-hamlet-42041.herokuapp.com/api/game/${gameId}`
    ).then(res => res.json())
  }

  getRanking() {
    return this._fetch(
      `https://shielded-hamlet-42041.herokuapp.com/api/ranking/20`
    ).then(res => res.json())
  }

  getSearch({query}) {
    return this._fetch(
      `https://shielded-hamlet-42041.herokuapp.com/api/games?q=${query}`
    ).then(res => res.json())
  }
}
