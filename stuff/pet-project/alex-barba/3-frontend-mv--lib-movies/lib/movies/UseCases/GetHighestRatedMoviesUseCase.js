import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { UseCase } from '@s-ui/domain';

var GetHighestRatedMoviesUseCase =
/*#__PURE__*/
function (_UseCase) {
  _inheritsLoose(GetHighestRatedMoviesUseCase, _UseCase);

  function GetHighestRatedMoviesUseCase(_ref) {
    var _this;

    var config = _ref.config,
        repository = _ref.repository;
    _this = _UseCase.call(this) || this;
    _this._config = config;
    _this._repository = repository;
    return _this;
  }

  var _proto = GetHighestRatedMoviesUseCase.prototype;

  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this._repository.getHighestRatedMovies());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function execute() {
      return _execute.apply(this, arguments);
    }

    return execute;
  }();

  return GetHighestRatedMoviesUseCase;
}(UseCase);

export default GetHighestRatedMoviesUseCase;