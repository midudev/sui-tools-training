import DetailMoviesUseCase from './DetailMoviesUseCase'

import MoviesRepositoriesFactory from '../Repositories/factory'

export default class MoviesUseCasesFactory {
  static detailMoviesUseCase = ({config}) =>
    new DetailMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository()
    })
}
