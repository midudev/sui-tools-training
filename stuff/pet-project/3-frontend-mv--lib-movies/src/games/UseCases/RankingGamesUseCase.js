import {UseCase} from '@s-ui/domain'

class RankingGamesUseCase extends UseCase {
  constructor({config, repository}) {
    super()

    this._config = config
    this._repository = repository
  }

  async execute() {
    return this._repository.getRanking()
  }
}

export default RankingGamesUseCase
