import {UseCase} from '@s-ui/domain'

class GetMostPopularMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute() {
    return this._repository.getMostPopularMovies()
  }
}

export default GetMostPopularMoviesUseCase
