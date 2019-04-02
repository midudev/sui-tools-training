import SearchMoviesUseCase from './SearchMoviesUseCase'
import MoviesRepositoriesFactory from '../Repositories/factory'

export default class MoviesUseCasesFactory {
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })
}
