exports.ids = ["HomePage"];
exports.modules = {

/***/ "./pages/Home/index.js":
/*!*****************************!*\
  !*** ./pages/Home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/es/index.js\");\nvar HomePage=function HomePage(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"HomePage\"),props.results.map(function(movie,index){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\",null,movie.Title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{src:movie.Poster}));}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],{to:\"/detail\"},\"Ir al detalle\"));};HomePage.renderLoading=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"Estoy haciendo un mu\\xF1ecooouuu\");};HomePage.getInitialProps=function(){return new Promise(function(resolve,reject){setTimeout(function(){resolve({results:[{Title:'Avengers',Poster:'https://i.ytimg.com/vi/l4HBq452_W8/hqdefault.jpg'}]});},500);});};/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./pages/Home/index.js?");

/***/ })

};;