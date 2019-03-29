exports.ids = ["Home"];
exports.modules = {

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/es/index.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../node_modules/isomorphic-fetch/fetch-npm-node.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nvar DetailPage=function DetailPage(_ref){var movie=_ref.movie;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],{to:\"/\"},\"Go Home\"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"DetailPage\"),movie&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,movie.Title),movie.Poster!=='N/A'&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{src:movie.Poster})));};DetailPage.getInitialProps=function(_ref2){var routeInfo=_ref2.routeInfo,context=_ref2.context;var id=routeInfo.params.id;return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"http://www.omdbapi.com/?apikey=2a23b951&i=\"+id).then(function(res){return res.json();}).then(function(movie){return{movie:movie};});};/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\n\n//# sourceURL=webpack:///./pages/Detail/index.js?");

/***/ }),

/***/ "./pages/Home/index.js":
/*!*****************************!*\
  !*** ./pages/Home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/es/index.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../node_modules/isomorphic-fetch/fetch-npm-node.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nvar HomePage=function HomePage(_ref){var results=_ref.results,history=_ref.history;var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),query=_useState[0],setQuery=_useState[1];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],{to:\"/detail\"},\"Go to Detail\"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"HomePage\"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{type:\"text\",onChange:function onChange(e){return setQuery(e.target.value);}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\",{type:\"submit\",onSubmit:function onSubmit(e){console.log('submit');e.preventDefault();history.push(\"/\"+query);}},\"Search\")),results.map(function(movie,index){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],{to:\"/detail/\"+movie.imdbID,key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,movie.Title),movie.Poster!=='N/A'&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{src:movie.Poster}));}));};HomePage.renderLoading=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{src:\"https://noticierouniversal.com/wp-content/uploads/2018/04/receta-de-bacon-frito-crujiente-2-620x349.jpeg\"});};HomePage.getInitialProps=function(_ref2){var routeInfo=_ref2.routeInfo,context=_ref2.context;return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"http://www.omdbapi.com/?apikey=2a23b951&s=marvel\").then(function(res){return res.json();}).then(function(_ref3){var Search=_ref3.Search;return{results:Search};});};/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./pages/Home/index.js?");

/***/ }),

/***/ "./pages/Search/index.js":
/*!*******************************!*\
  !*** ./pages/Search/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/es/index.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"../node_modules/isomorphic-fetch/fetch-npm-node.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nvar SearchPage=function SearchPage(_ref){var results=_ref.results;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],{to:\"/detail\"},\"Go to Detail\"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"SearchPage\"),results.map(function(movie,index){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],{to:\"/detail/\"+movie.imdbID,key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,movie.Title),movie.Poster!=='N/A'&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{src:movie.Poster}));}));};SearchPage.renderLoading=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{src:\"https://noticierouniversal.com/wp-content/uploads/2018/04/receta-de-bacon-frito-crujiente-2-620x349.jpeg\"});};SearchPage.getInitialProps=function(_ref2){var routeInfo=_ref2.routeInfo,context=_ref2.context;var query=routeInfo.params.query;return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"http://www.omdbapi.com/?apikey=2a23b951&s=\"+query).then(function(res){return res.json();}).then(function(_ref3){var Search=_ref3.Search;return{results:Search};});};/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\n\n//# sourceURL=webpack:///./pages/Search/index.js?");

/***/ })

};;