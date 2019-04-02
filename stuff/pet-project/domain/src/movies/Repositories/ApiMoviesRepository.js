import MoviesRepository from './MoviesRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetcher, config, mapper}) {
    super()

    this._fetcher = fetcher
    this._config = config
    this._mapper = mapper
  }

  async getMoviesBy({query, page}) {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')

    const {
      data: {
        results: movies,
        page: actualPage,
        total_pages: totalPages,
        total_results: totalResults
      }
    } = await this._fetcher.get(
      `${host}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
    )

    return {
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(this._mapper.map)
    }
  }
}
