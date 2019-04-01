import MoviesRepository from './MoviesRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetch}) {
    super()
    this._fetch = fetch
  }

  getDetail({id}) {
    return this._fetch(`http://www.omdbapi.com/?apikey=520d55b7&i=${id}`).then(
      res => res.json()
    )
  }

  getSearch({query}) {
    return this._fetch(
      `http://www.omdbapi.com/?apikey=520d55b7&s=${query}`
    ).then(res => res.json())
  }
}
