import {Mapper} from '@s-ui/domain'

export default class FromMockMoviesRepositorySearchResponseToDetailUseCaseResponse extends Mapper {
  map(mockResponse) {
    const {Title, Poster, ...restOfResponse} = mockResponse

    return {
      title: Title,
      poster: Poster,
      ...restOfResponse
    }
  }
}
