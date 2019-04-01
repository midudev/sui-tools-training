import {Mapper} from '@s-ui/domain'

export default class FromMockGamesRepositoryDetailResponseToDetailUseCaseResponse extends Mapper {
  map(mockResponse) {
    const {gameName, ...restOfResponse} = mockResponse

    return {
      game_title: gameName,
      ...restOfResponse
    }
  }
}
