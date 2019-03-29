import MoviesRepository from './MoviesRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetch, config}) {
    super()
    this._fetch = fetch
    this._config = config
  }
  getDetail({id}) {
    return this._fetch(
      `${this._config.API_EDNPOINT}movie/${id}${
        this._config.API_KEY
      }language=en-US`
    ).then(res => res.json())
  }

  getResults({query}) {
    return this._fetch(
      `${this._config.API_EDNPOINT}search/movie${
        this._config.API_KEY
      }language=en-US&query=${query}&page=1&include_adult=true`
    ).then(res => res.json())
  }

  getMostPopularMovies() {
    return this._fetch(
      `${this._config.API_EDNPOINT}discover/movie${
        this._config.API_KEY
      }language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    ).then(res => res.json())
  }

  getHighestRatedMovies() {
    return this._fetch(
      `${this._config.API_EDNPOINT}discover/movie${
        this._config.API_KEY
      }language=en-US&certification_country=ES&sort_by=vote_average.desc&certification=R`
    ).then(res => res.json())
  }
}
