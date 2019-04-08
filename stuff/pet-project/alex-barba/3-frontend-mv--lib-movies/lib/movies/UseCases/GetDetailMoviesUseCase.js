import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { UseCase } from '@s-ui/domain';

var DetailMoviesUseCase =
/*#__PURE__*/
function (_UseCase) {
  _inheritsLoose(DetailMoviesUseCase, _UseCase);

  function DetailMoviesUseCase(_ref) {
    var _this;

    var config = _ref.config,
        repository = _ref.repository;
    _this = _UseCase.call(this) || this;
    _this._config = config;
    _this._repository = repository;
    return _this;
  }

  var _proto = DetailMoviesUseCase.prototype;

  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref2) {
      var id;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _ref2.id;
              return _context.abrupt("return", this._repository.getDetail({
                id: id
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function execute(_x) {
      return _execute.apply(this, arguments);
    }

    return execute;
  }();

  return DetailMoviesUseCase;
}(UseCase);

export default DetailMoviesUseCase;