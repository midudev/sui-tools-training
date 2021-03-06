import MoviesRepository from './MoviesRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetch}) {
    super()

    this._fetch = fetch
  }

  getDetail({id}) {
    return this._fetch(`http://www.omdbapi.com/?apikey=4287ad07&i=${id}`).then(
      res => res.json()
    )
  }
}
