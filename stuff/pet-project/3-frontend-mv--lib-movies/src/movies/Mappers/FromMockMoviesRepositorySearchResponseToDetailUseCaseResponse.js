import {Mapper} from '@s-ui/domain'

export default class FromMockMoviesRepositorySearchResponseToDetailUseCaseResponse extends Mapper {
  map(mockResponse) {
    const {title, poster, ...restOfResponse} = mockResponse

    return {
      Tile: title,
      Poster: poster,
      ...restOfResponse
    }
  }
}
