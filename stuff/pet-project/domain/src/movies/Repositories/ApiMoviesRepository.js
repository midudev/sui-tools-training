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

    const movieList = await this._fetcher.get(
      `${host}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
    )

    return this.movieList({movieList})
  }

  async getMostPopularMovies({page}) {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')

    const movieList = await this._fetcher.get(
      `${host}/discover/movie?api_key=${apiKey}&&sort_by=popularity.desc&page=${page}`
    )

    return this.movieList({movieList})
  }

  async getDetail({id}) {
    const host = this._config.get('API_URL_BASE')
    const apiKey = this._config.get('API_KEY')

    const {data} = await this._fetcher.get(
      `${host}/movie/${id}?api_key=${apiKey}`
    )

    return this._mapper.map(data)
  }

  movieList({movieList}) {
    const {
      data: {
        results: movies,
        page: actualPage,
        total_pages: totalPages,
        total_results: totalResults
      }
    } = movieList

    return {
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(this._mapper.map)
    }
  }
}
