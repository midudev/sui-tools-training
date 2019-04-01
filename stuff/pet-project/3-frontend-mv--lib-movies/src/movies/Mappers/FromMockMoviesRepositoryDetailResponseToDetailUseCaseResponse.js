import {Mapper} from '@s-ui/domain'

export default class FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse extends Mapper {
  map(mockResponse) {
    const {movieName, image, ...restOfResponse} = mockResponse

    return {
      Title: movieName,
      Poster: image,
      ...restOfResponse
    }
  }
}
