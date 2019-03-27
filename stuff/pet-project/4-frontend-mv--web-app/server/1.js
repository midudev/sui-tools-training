exports.ids = [1];
exports.modules = {

/***/ "../node_modules/encoding/lib sync recursive":
/*!*****************************************!*\
  !*** ../node_modules/encoding/lib sync ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"../node_modules/encoding/lib sync recursive\";\n\n//# sourceURL=webpack:///../node_modules/encoding/lib_sync?");

/***/ }),

/***/ "./pages/Home/index.js":
/*!*****************************!*\
  !*** ./pages/Home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../node_modules/isomorphic-fetch/fetch-npm-node.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ \"./pages/Home/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar HomePage=function HomePage(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),query=_useState[0],setQuery=_useState[1];var setQueryValue=function setQueryValue(event){setQuery(event.target.value);};var onSearch=function onSearch(event){event.preventDefault();props.router.push(\"/?query=\"+query);};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\",{className:\"searchForm\",onSubmit:onSearch},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{className:\"searchForm-input\",onChange:function onChange(event){return setQueryValue(event);}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\",{className:\"searchForm-button\"},\" Search \")),props.results.map(function(movie,index){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\",null,movie.Title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{src:movie.Poster}));}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"HomePage\"));};HomePage.renderLoading=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"Loading\");};HomePage.getInitialProps=function(_ref){var query=_ref.routeInfo.location.query.query;if(query===undefined)query='avengers';return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"http://www.omdbapi.com/?i=tt3896198&apikey=ab2734dd&s=\"+query).then(function(res){return res.json();}).then(function(result){var Search=result.Search;return{results:Search};});};/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./pages/Home/index.js?");

/***/ }),

/***/ "./pages/Home/index.scss":
/*!*******************************!*\
  !*** ./pages/Home/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty (null-loader)\n\n//# sourceURL=webpack:///./pages/Home/index.scss?");

/***/ })

};;