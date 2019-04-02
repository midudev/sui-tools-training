import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'

const config = {
  API_EDNPOINT: `http://www.omdbapi.com/?apikey=e1c3c914`
}

const useCases = {
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({config})
}

const Domain = EntryPointFactory({useCases})
export default new Domain()
