import {UseCase} from '@s-ui/domain'

class DetailGamesUseCase extends UseCase {
  constructor({config, repository}) {
    super()

    this._config = config
    this._repository = repository
  }

  async execute({gameId}) {
    return this._repository.getDetail({gameId})
  }
}

export default DetailGamesUseCase
