import {Mapper} from '@s-ui/domain'

export default class MoviesMapper extends Mapper {
  constructor({config, movieEntity}) {
    super()
    this._config = config
    this._movieEntity = movieEntity
  }

  map = movie => {
    const {
      id,
      original_title: title,
      overview,
      release_date: releaseDate,
      vote_average: voteAverage,
      poster_path: posterPath
    } = movie

    const imageBaseUrl = this._config.get('IMAGE_BASE_URL')

    return this._movieEntity({
      id,
      title,
      overview,
      releaseDate,
      voteAverage,
      posterPath: `${imageBaseUrl}${posterPath}`
    })
  }
}
