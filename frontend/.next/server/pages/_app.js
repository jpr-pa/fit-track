/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./graphql/environment.ts":
/*!********************************!*\
  !*** ./graphql/environment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! relay-runtime */ \"relay-runtime\");\n/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(relay_runtime__WEBPACK_IMPORTED_MODULE_0__);\n// frontend/graphql/environment.ts\n\nconst fetchGraphQL = async (operation, variables)=>{\n    const response = await fetch(\"http://34.93.202.99:5000/graphql\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            query: operation.text,\n            variables\n        })\n    });\n    return await response.json();\n};\nconst relayEnvironment = new relay_runtime__WEBPACK_IMPORTED_MODULE_0__.Environment({\n    network: relay_runtime__WEBPACK_IMPORTED_MODULE_0__.Network.create(fetchGraphQL),\n    store: new relay_runtime__WEBPACK_IMPORTED_MODULE_0__.Store(new relay_runtime__WEBPACK_IMPORTED_MODULE_0__.RecordSource())\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (relayEnvironment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL2Vudmlyb25tZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtDQUFrQztBQVFYO0FBRXZCLE1BQU1JLGVBQThCLE9BQU9DLFdBQVdDO0lBQ3BELE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQ0FBb0M7UUFDL0RDLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUdsQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDbkJDLE9BQU9ULFVBQVVVLElBQUk7WUFDckJUO1FBQ0Y7SUFDRjtJQUVBLE9BQU8sTUFBTUMsU0FBU1MsSUFBSTtBQUM1QjtBQUVBLE1BQU1DLG1CQUFtQixJQUFJakIsc0RBQVdBLENBQUM7SUFDdkNrQixTQUFTakIsa0RBQU9BLENBQUNrQixNQUFNLENBQUNmO0lBQ3hCZ0IsT0FBTyxJQUFJakIsZ0RBQUtBLENBQUMsSUFBSUQsdURBQVlBO0FBQ25DO0FBRUEsaUVBQWVlLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpdC10cmFjay1mcm9udGVuZC8uL2dyYXBocWwvZW52aXJvbm1lbnQudHM/N2Q1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZC9ncmFwaHFsL2Vudmlyb25tZW50LnRzXG5cbmltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxuICBGZXRjaEZ1bmN0aW9uLFxufSBmcm9tICdyZWxheS1ydW50aW1lJztcblxuY29uc3QgZmV0Y2hHcmFwaFFMOiBGZXRjaEZ1bmN0aW9uID0gYXN5bmMgKG9wZXJhdGlvbiwgdmFyaWFibGVzKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8zNC45My4yMDIuOTk6NTAwMC9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAvLyBBZGQgYXV0aG9yaXphdGlvbiB0b2tlbiBpZiBuZWVkZWRcbiAgICAgIC8vIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt5b3VyX3Rva2VufWAsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gIH0pO1xuXG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCByZWxheUVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgbmV0d29yazogTmV0d29yay5jcmVhdGUoZmV0Y2hHcmFwaFFMKSxcbiAgc3RvcmU6IG5ldyBTdG9yZShuZXcgUmVjb3JkU291cmNlKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbGF5RW52aXJvbm1lbnQ7XG5cbiJdLCJuYW1lcyI6WyJFbnZpcm9ubWVudCIsIk5ldHdvcmsiLCJSZWNvcmRTb3VyY2UiLCJTdG9yZSIsImZldGNoR3JhcGhRTCIsIm9wZXJhdGlvbiIsInZhcmlhYmxlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInRleHQiLCJqc29uIiwicmVsYXlFbnZpcm9ubWVudCIsIm5ldHdvcmsiLCJjcmVhdGUiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./graphql/environment.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_relay_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-relay/hooks */ \"react-relay/hooks\");\n/* harmony import */ var react_relay_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_relay_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/environment */ \"./graphql/environment.ts\");\n// frontend/pages/_app.tsx\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_relay_hooks__WEBPACK_IMPORTED_MODULE_2__.RelayEnvironmentProvider, {\n        environment: _graphql_environment__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/root/fit-track/frontend/pages/_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/root/fit-track/frontend/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDBCQUEwQjs7QUFFSztBQUU4QjtBQUNQO0FBRXRELFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNKLHVFQUF3QkE7UUFBQ0ssYUFBYUosNERBQWdCQTtrQkFDckQsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpdC10cmFjay1mcm9udGVuZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbnRlbmQvcGFnZXMvX2FwcC50c3hcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFJlbGF5RW52aXJvbm1lbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlbGF5L2hvb2tzJztcbmltcG9ydCByZWxheUVudmlyb25tZW50IGZyb20gJy4uL2dyYXBocWwvZW52aXJvbm1lbnQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFJlbGF5RW52aXJvbm1lbnRQcm92aWRlciBlbnZpcm9ubWVudD17cmVsYXlFbnZpcm9ubWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9SZWxheUVudmlyb25tZW50UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuXG4iXSwibmFtZXMiOlsiUmVsYXlFbnZpcm9ubWVudFByb3ZpZGVyIiwicmVsYXlFbnZpcm9ubWVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZW52aXJvbm1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react-relay/hooks":
/*!************************************!*\
  !*** external "react-relay/hooks" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-relay/hooks");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "relay-runtime":
/*!********************************!*\
  !*** external "relay-runtime" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("relay-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();