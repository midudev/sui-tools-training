import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'

const config = {
  API_ENDPOINT: 'http://www.omdbapi.com/?apikey=520d55b7'
}

const useCases = {
  detail_movies_use_case: MoviesUseCasesFactory.detailMoviesUseCase({config}),
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({config})
}

const Domain = EntryPointFactory({useCases})
export default new Domain()
