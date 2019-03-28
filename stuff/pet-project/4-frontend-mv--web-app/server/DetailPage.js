exports.ids = ["DetailPage"];
exports.modules = {

/***/ "../../3-frontend-mv--lib-movies/src/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _s_ui_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @s-ui/domain */ \"../../3-frontend-mv--lib-movies/node_modules/@s-ui/domain/lib/index.js\");\n/* harmony import */ var _movies_UseCases_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies/UseCases/factory */ \"../../3-frontend-mv--lib-movies/src/movies/UseCases/factory.js\");\nvar config={API_ENDPOINT:'http://www.omdbapi.com/?apikey=4287ad07'};var useCases={detail_movies_use_case:_movies_UseCases_factory__WEBPACK_IMPORTED_MODULE_1__[\"default\"].detailMoviesUseCase({config:config})};var Domain=Object(_s_ui_domain__WEBPACK_IMPORTED_MODULE_0__[\"EntryPointFactory\"])({useCases:useCases});/* harmony default export */ __webpack_exports__[\"default\"] = (new Domain());\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/index.js?");

/***/ }),

/***/ "../../3-frontend-mv--lib-movies/src/movies/Mappers/FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Mappers/FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"../node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"../node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _s_ui_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @s-ui/domain */ \"../../3-frontend-mv--lib-movies/node_modules/@s-ui/domain/lib/index.js\");\nvar FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse=/*#__PURE__*/function(_Mapper){_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse,_Mapper);function FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse(){return _Mapper.apply(this,arguments)||this;}var _proto=FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse.prototype;_proto.map=function map(mockResponse){var movieName=mockResponse.movieName,image=mockResponse.image,restOfResponse=_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(mockResponse,[\"movieName\",\"image\"]);return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({Title:movieName,Poster:image},restOfResponse);};return FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse;}(_s_ui_domain__WEBPACK_IMPORTED_MODULE_3__[\"Mapper\"]);\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Mappers/FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse.js?");

/***/ }),

/***/ "../../3-frontend-mv--lib-movies/src/movies/Mappers/factory.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Mappers/factory.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoviesMappers; });\n/* harmony import */ var _FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse */ \"../../3-frontend-mv--lib-movies/src/movies/Mappers/FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse.js\");\nvar MoviesMappers=function MoviesMappers(){};MoviesMappers.fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse=function(){return new _FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();};\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Mappers/factory.js?");

/***/ }),

/***/ "../../3-frontend-mv--lib-movies/src/movies/Repositories/ApiMoviesRepository.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Repositories/ApiMoviesRepository.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ApiMoviesRepository; });\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"../node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MoviesRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoviesRepository */ \"../../3-frontend-mv--lib-movies/src/movies/Repositories/MoviesRepository.js\");\nvar ApiMoviesRepository=/*#__PURE__*/function(_MoviesRepository){_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ApiMoviesRepository,_MoviesRepository);function ApiMoviesRepository(_ref){var _this;var fetch=_ref.fetch;_this=_MoviesRepository.call(this)||this;_this._fetch=fetch;return _this;}var _proto=ApiMoviesRepository.prototype;_proto.getDetail=function getDetail(_ref2){var id=_ref2.id;return this._fetch(\"http://www.omdbapi.com/?apikey=4287ad07&i=\"+id).then(function(res){return res.json();});};return ApiMoviesRepository;}(_MoviesRepository__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Repositories/ApiMoviesRepository.js?");

/***/ }),

/***/ "../../3-frontend-mv--lib-movies/src/movies/Repositories/MockMoviesRepository.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Repositories/MockMoviesRepository.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MockMoviesRepository; });\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"../node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MoviesRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoviesRepository */ \"../../3-frontend-mv--lib-movies/src/movies/Repositories/MoviesRepository.js\");\nvar MockMoviesRepository=/*#__PURE__*/function(_MoviesRepository){_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MockMoviesRepository,_MoviesRepository);function MockMoviesRepository(_ref){var _this;var mapper=_ref.mapper;_this=_MoviesRepository.call(this)||this;_this._mapper=mapper;return _this;}var _proto=MockMoviesRepository.prototype;_proto.getDetail=function getDetail(_ref2){var id=_ref2.id;var response={movieName:\"The Avengers: Earth's Mightiest Heroes\",Year:'2010–2012',Rated:'TV-Y7',Released:'22 Sep 2010',Runtime:'30 min',Genre:'Animation, Action, Family, Sci-Fi',Director:'N/A',Writer:'N/A',Actors:\"Eric Loomis, Colleen O'Shaughnessey, Brian Bloom, Rick D. Wasserman\",Plot:\"After 74 villains break out of prison, Marvel's most powerful superheroes team up to capture all of them, and also to defend the Earth from widespread threats.\",Language:'English',Country:'USA',Awards:'8 nominations.',image:'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',Ratings:[{Source:'Internet Movie Database',Value:'8.3/10'}],Metascore:'N/A',imdbRating:'8.3',imdbVotes:'11,706',imdbID:'tt1626038',Type:'series',totalSeasons:'2',Response:'True'};var mappedResponse=this._mapper.map(response);return Promise.resolve(mappedResponse);};return MockMoviesRepository;}(_MoviesRepository__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Repositories/MockMoviesRepository.js?");

/***/ }),

/***/ "../../3-frontend-mv--lib-movies/src/movies/Repositories/MoviesRepository.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Repositories/MoviesRepository.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoviesRepository; });\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"../node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _s_ui_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @s-ui/domain */ \"../../3-frontend-mv--lib-movies/node_modules/@s-ui/domain/lib/index.js\");\nvar MoviesRepository=/*#__PURE__*/function(_Repository){_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MoviesRepository,_Repository);function MoviesRepository(){return _Repository.apply(this,arguments)||this;}var _proto=MoviesRepository.prototype;_proto.getDetail=function getDetail(){throw new Error('[getDetail] method must be implemented');};return MoviesRepository;}(_s_ui_domain__WEBPACK_IMPORTED_MODULE_1__[\"Repository\"]);\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Repositories/MoviesRepository.js?");

/***/ }),

/***/ "../../3-frontend-mv--lib-movies/src/movies/Repositories/factory.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Repositories/factory.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoviesRepositoriesFactory; });\n/* harmony import */ var _ApiMoviesRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiMoviesRepository */ \"../../3-frontend-mv--lib-movies/src/movies/Repositories/ApiMoviesRepository.js\");\n/* harmony import */ var _MockMoviesRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MockMoviesRepository */ \"../../3-frontend-mv--lib-movies/src/movies/Repositories/MockMoviesRepository.js\");\n/* harmony import */ var _Mappers_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mappers/factory */ \"../../3-frontend-mv--lib-movies/src/movies/Mappers/factory.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"../node_modules/isomorphic-fetch/fetch-npm-node.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\nvar MoviesRepositoriesFactory=function MoviesRepositoriesFactory(){};MoviesRepositoriesFactory.apiMoviesRepository=function(){return new _ApiMoviesRepository__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({fetch:isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default.a});};MoviesRepositoriesFactory.mockMoviesRepository=function(){return new _MockMoviesRepository__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({mapper:_Mappers_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse()});};\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/Repositories/factory.js?");

/***/ }),

/***/ "../../3-frontend-mv--lib-movies/src/movies/UseCases/DetailMoviesUseCase.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/UseCases/DetailMoviesUseCase.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"../node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _s_ui_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @s-ui/domain */ \"../../3-frontend-mv--lib-movies/node_modules/@s-ui/domain/lib/index.js\");\nvar DetailMoviesUseCase=/*#__PURE__*/function(_UseCase){_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(DetailMoviesUseCase,_UseCase);function DetailMoviesUseCase(_ref){var _this;var config=_ref.config,repository=_ref.repository;_this=_UseCase.call(this)||this;_this._config=config;_this._repository=repository;return _this;}var _proto=DetailMoviesUseCase.prototype;_proto.execute=/*#__PURE__*/function(){var _execute=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2){var id;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:id=_ref2.id;return _context.abrupt(\"return\",this._repository.getDetail({id:id}));case 2:case\"end\":return _context.stop();}}},_callee,this);}));function execute(_x){return _execute.apply(this,arguments);}return execute;}();return DetailMoviesUseCase;}(_s_ui_domain__WEBPACK_IMPORTED_MODULE_3__[\"UseCase\"]);/* harmony default export */ __webpack_exports__[\"default\"] = (DetailMoviesUseCase);\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/UseCases/DetailMoviesUseCase.js?");

/***/ }),

/***/ "../../3-frontend-mv--lib-movies/src/movies/UseCases/factory.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/UseCases/factory.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoviesUseCasesFactory; });\n/* harmony import */ var _DetailMoviesUseCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailMoviesUseCase */ \"../../3-frontend-mv--lib-movies/src/movies/UseCases/DetailMoviesUseCase.js\");\n/* harmony import */ var _Repositories_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Repositories/factory */ \"../../3-frontend-mv--lib-movies/src/movies/Repositories/factory.js\");\nvar MoviesUseCasesFactory=function MoviesUseCasesFactory(){};MoviesUseCasesFactory.detailMoviesUseCase=function(_ref){var config=_ref.config;return new _DetailMoviesUseCase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({config:config,repository:_Repositories_factory__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiMoviesRepository()});};\n\n//# sourceURL=webpack:////Users/miguelangel.duran/Dev/sui-tools-training/stuff/pet-project/3-frontend-mv--lib-movies/src/movies/UseCases/factory.js?");

/***/ }),

/***/ "../node_modules/encoding/lib sync recursive":
/*!*****************************************!*\
  !*** ../node_modules/encoding/lib sync ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"../node_modules/encoding/lib sync recursive\";\n\n//# sourceURL=webpack:///../node_modules/encoding/lib_sync?");

/***/ }),

/***/ "./pages/Detail/index.js":
/*!*******************************!*\
  !*** ./pages/Detail/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/es/index.js\");\n/* harmony import */ var _3_frontend_mv_lib_movies_src_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../3-frontend-mv--lib-movies/src/index */ \"../../3-frontend-mv--lib-movies/src/index.js\");\n// import fetch from 'isomorphic-fetch'\nvar DetailPage=function DetailPage(_ref){var movie=_ref.movie;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\",null,movie.Title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{width:\"150\",src:movie.Poster}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],{to:\"/\"},\"Ir a la home\"));};DetailPage.getInitialProps=function(_ref2){var routeInfo=_ref2.routeInfo,context=_ref2.context;var params=routeInfo.params;var id=params.id;return _3_frontend_mv_lib_movies_src_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('detail_movies_use_case').execute({id:id}).then(function(response){console.log('response');console.log(response);return{movie:response};});};/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\n\n//# sourceURL=webpack:///./pages/Detail/index.js?");

/***/ })

};;