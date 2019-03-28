import DetailMoviesUseCase from './DetailMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'

import MoviesRepositoriesFactory from '../Repositories/factory'

export default class MoviesUseCasesFactory {
  static detailMoviesUseCase = () =>
    new DetailMoviesUseCase({
      repository: MoviesRepositoriesFactory.apiMoviesRepository()
    })

  static searchMoviesUseCase = () =>
    new SearchMoviesUseCase({
      repository: MoviesRepositoriesFactory.apiSearchMoviesRepository()
    })
}
