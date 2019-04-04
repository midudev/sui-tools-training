import { EntryPointFactory } from '@s-ui/domain';
import MoviesUseCasesFactory from './movies/UseCases/factory';
var config = {
  API_ENDPOINT: 'http://www.omdbapi.com/?apikey=520d55b7'
};
var useCases = {
  detail_movies_use_case: MoviesUseCasesFactory.detailMoviesUseCase({
    config: config
  }),
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({
    config: config
  })
};
var Domain = EntryPointFactory({
  useCases: useCases
});
export default new Domain();