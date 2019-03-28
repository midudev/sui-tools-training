exports.ids = ["HomePage"];
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/es/index.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"../node_modules/isomorphic-fetch/fetch-npm-node.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\nvar HomePage=function HomePage(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"HomePage\"),props.results.map(function(movie,index){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],{to:\"/detail/\"+movie.imdbID,key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\",null,movie.Title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{src:movie.Poster}));}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],{to:\"/detail\"},\"Ir al detalle\"));};HomePage.renderLoading=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",null,\"Friendo el \\uD83E\\uDD53\");};HomePage.getInitialProps=function(routeInfo,context){return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://www.omdbapi.com/?apikey=4287ad07&s=avengers').then(function(res){return res.json();}).then(function(result){var Search=result.Search;return{results:Search};});};/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./pages/Home/index.js?");

/***/ })

};;