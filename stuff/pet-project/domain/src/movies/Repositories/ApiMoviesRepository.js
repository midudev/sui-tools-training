import MoviesRepository from './MoviesRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetcher, config}) {
    super()

    this._fetcher = fetcher
    this._config = config
  }

  getMoviesBy({query}) {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')

    return this._fetcher.get(
      `${host}/search/movie?api_key=${apiKey}&query=${query}`
    )
  }
}
