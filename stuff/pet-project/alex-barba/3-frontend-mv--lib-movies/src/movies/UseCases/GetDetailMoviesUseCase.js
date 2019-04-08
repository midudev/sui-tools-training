import {UseCase} from '@s-ui/domain'

class DetailMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute({id}) {
    return this._repository.getDetail({id})
  }
}

export default DetailMoviesUseCase
