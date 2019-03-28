import FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse from './FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse'
import FromMockMoviesRepositorySearchResponseToDetailUseCaseResponse from './FromMockMoviesRepositorySearchResponseToDetailUseCaseResponse'

export default class MoviesMappers {
  static fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse = () =>
    new FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse()
  static fromMockMoviesRepositorySearchResponseToDetailUseCaseResponse = () =>
    new FromMockMoviesRepositorySearchResponseToDetailUseCaseResponse()
}
