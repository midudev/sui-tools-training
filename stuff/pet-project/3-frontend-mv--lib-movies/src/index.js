import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'

const config = {
  API_ENDPOINT: 'http://www.omdbapi.com/?apikey=4287ad07'
}

const useCases = {
  detail_movies_use_case: MoviesUseCasesFactory.detailMoviesUseCase({config})
}

const Domain = EntryPointFactory({useCases})
export default new Domain()
