import MoviesRepository from './MoviesRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetch, config}) {
    super()

    this._fetch = fetch
    this._config = config
  }

  getMoviesBy({query}) {
    return this._fetch(`${this._config.API_EDNPOINT}&s=${query}`).then(res =>
      res.json()
    )
  }
}
