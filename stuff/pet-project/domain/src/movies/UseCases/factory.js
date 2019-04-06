import SearchMoviesUseCase from './SearchMoviesUseCase'
import DetailMoviesUseCase from './DetailMoviesUseCase'
import MoviesRepositoriesFactory from '../Repositories/factory'

export default class MoviesUseCasesFactory {
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })
  static detailMoviesUseCase = ({config}) =>
    new DetailMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })
}
