import {UseCase} from '@s-ui/domain'

class SearchMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()

    this._config = config
    this._repository = repository
  }

  async execute({query}) {
    return this._repository.getMoviesBy({query})
  }
}

export default SearchMoviesUseCase
