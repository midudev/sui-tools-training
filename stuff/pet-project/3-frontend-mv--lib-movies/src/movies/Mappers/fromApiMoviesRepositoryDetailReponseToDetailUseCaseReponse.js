import {Mapper} from '@s-ui/domain'

export default class FromApiMoviesRepositoryDetailReponseToDetailUseCaseReponse extends Mapper {
  map(apiResponse) {
    const {Title, ...restOfResponse} = apiResponse

    return {Title, ...restOfResponse}
  }
}
