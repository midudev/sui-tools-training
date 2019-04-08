/* eslint-disable camelcase */
import {Mapper} from '@s-ui/domain'

export default class FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse extends Mapper {
  constructor({config, repository}) {
    super()
    this._config = config
  }
  map(apiResponse) {
    const mappedResponse = apiResponse.map(movie => {
      const {
        original_title,
        release_date,
        poster_path,
        ...restOfResponse
      } = movie
      return {
        title: original_title,
        year: release_date.substring(0, 4),
        image: `${this._config.API_IMG_URL}${poster_path}`,
        ...restOfResponse
      }
    })
    return mappedResponse
  }
}
