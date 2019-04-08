import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import MoviesRepository from './MoviesRepository';

var ApiMoviesRepository =
/*#__PURE__*/
function (_MoviesRepository) {
  _inheritsLoose(ApiMoviesRepository, _MoviesRepository);

  function ApiMoviesRepository(_ref) {
    var _this;

    var fetch = _ref.fetch,
        config = _ref.config,
        mapper = _ref.mapper;
    _this = _MoviesRepository.call(this) || this;
    _this._fetch = fetch;
    _this._config = config;
    _this._mapper = mapper;
    return _this;
  }

  var _proto = ApiMoviesRepository.prototype;

  _proto.getDetail = function getDetail(_ref2) {
    var id = _ref2.id;
    return this._fetch(this._config.API_EDNPOINT + "movie/" + id + this._config.API_KEY + "language=en-US").then(function (res) {
      return res.json();
    });
  };

  _proto.getResults = function getResults(_ref3) {
    var _this2 = this;

    var query = _ref3.query;
    return this._fetch(this._config.API_EDNPOINT + "search/movie" + this._config.API_KEY + "language=en-US&query=" + query + "&page=1&include_adult=true").then(function (res) {
      return res.json();
    }).then(function (_ref4) {
      var results = _ref4.results;
      return _this2._mapper.map(results);
    });
  };

  _proto.getMostPopularMovies = function getMostPopularMovies() {
    var _this3 = this;

    return this._fetch(this._config.API_EDNPOINT + "discover/movie" + this._config.API_KEY + "language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1").then(function (res) {
      return res.json();
    }).then(function (_ref5) {
      var results = _ref5.results;
      return _this3._mapper.map(results);
    });
  };

  _proto.getHighestRatedMovies = function getHighestRatedMovies() {
    var _this4 = this;

    return this._fetch(this._config.API_EDNPOINT + "discover/movie" + this._config.API_KEY + "language=en-US&certification_country=ES&sort_by=vote_average.desc&certification=R").then(function (res) {
      return res.json();
    }).then(function (_ref6) {
      var results = _ref6.results;
      return _this4._mapper.map(results);
    });
  };

  return ApiMoviesRepository;
}(MoviesRepository);

export { ApiMoviesRepository as default };