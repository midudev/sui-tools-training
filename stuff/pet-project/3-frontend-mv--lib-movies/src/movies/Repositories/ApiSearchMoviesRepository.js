import MoviesRepository from './MoviesRepositories'

export default class ApiSearchMoviesRepository extends MoviesRepository {
  constructor({fetch}) {
    super()

    this._fetch = fetch
  }

  getDetail({query}) {
    return this._fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=ab2734dd&s=${query}`
    ).then(res => res.json())
  }
}
