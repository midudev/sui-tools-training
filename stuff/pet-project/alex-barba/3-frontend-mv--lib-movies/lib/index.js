import { EntryPointFactory } from '@s-ui/domain';
import MoviesUseCasesFactory from './movies/UseCases/factory';
var config = {
  API_EDNPOINT: 'https://api.themoviedb.org/3/',
  API_KEY: '?api_key=368641f5bfb5fac0c6e867fdcd305db0&',
  API_IMG_URL: 'https://image.tmdb.org/t/p/w500/'
};
var useCases = {
  detail_movies_use_case: MoviesUseCasesFactory.getDetailMoviesUseCase({
    config: config
  }),
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({
    config: config
  }),
  get_most_popular_movies_use_case: MoviesUseCasesFactory.getMostPopularMoviesUseCase({
    config: config
  }),
  get_highest_rated_movies_use_case: MoviesUseCasesFactory.getHighestRatedMoviesUseCase({
    config: config
  })
};
var Domain = EntryPointFactory({
  useCases: useCases
});
export default new Domain();