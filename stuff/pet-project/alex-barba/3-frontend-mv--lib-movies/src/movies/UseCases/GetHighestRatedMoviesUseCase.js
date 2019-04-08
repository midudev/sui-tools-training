import {UseCase} from '@s-ui/domain'

class GetHighestRatedMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute() {
    return this._repository.getHighestRatedMovies()
  }
}

export default GetHighestRatedMoviesUseCase
