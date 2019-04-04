import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { Mapper } from '@s-ui/domain';

var FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse =
/*#__PURE__*/
function (_Mapper) {
  _inheritsLoose(FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse, _Mapper);

  function FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse() {
    return _Mapper.apply(this, arguments) || this;
  }

  var _proto = FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse.prototype;

  _proto.map = function map(mockResponse) {
    var movieName = mockResponse.movieName,
        image = mockResponse.image,
        restOfResponse = _objectWithoutPropertiesLoose(mockResponse, ["movieName", "image"]);

    return _objectSpread({
      Title: movieName,
      Poster: image
    }, restOfResponse);
  };

  return FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse;
}(Mapper);

export { FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse as default };