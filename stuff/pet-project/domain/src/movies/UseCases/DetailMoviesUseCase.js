import {UseCase} from '@s-ui/domain'

class DetailMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()

    this._config = config
    this._repository = repository
  }

  async execute({id}) {
    const movie = await this._repository.getDetail({id})
    return {
      movie: movie.toJSON()
    }
  }
}

export default DetailMoviesUseCase
