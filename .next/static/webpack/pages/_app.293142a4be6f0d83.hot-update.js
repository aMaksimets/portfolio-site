"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var activeColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('gray.200', 'whiteAlpha.900');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? 'glassTeal' : undefined,\n            color: active ? '#202023' : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alek\\\\Desktop\\\\portfolio\\\\components\\\\navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alek\\\\Desktop\\\\portfolio\\\\components\\\\navbar.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this));\n};\n_s(LinkItem, \"DGHVdqbRUZ7S57W74ycuflL2odU=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar NavBar = function(props) {\n    _s1();\n    var path = props.path;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('#ffffff40', '#20202380'),\n        style: {\n            backdropFilter: 'blur: 10px'\n        },\n        zIndex: 1\n    }, props, {\n        children: \"NavBar\"\n    }), void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alek\\\\Desktop\\\\portfolio\\\\components\\\\navbar.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this));\n};\n_s1(NavBar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = NavBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNPO0FBY1A7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsR0FBSyxDQUFDZSxRQUFRLEdBQUcsUUFBUSxRQUFrQixDQUFDO1FBQXpCQyxJQUFJLFNBQUpBLElBQUksRUFBQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLFFBQVEsU0FBUkEsUUFBUTs7SUFDakMsR0FBSyxDQUFDQyxNQUFNLEdBQUdGLElBQUksS0FBS0QsSUFBSTtJQUM1QixHQUFLLENBQUNJLFdBQVcsR0FBR1AsbUVBQWlCLENBQUMsQ0FBVSxXQUFFLENBQWdCO0lBQ2xFLE1BQU0sNkVBQ0RaLGtEQUFRO1FBQUNlLElBQUksRUFBRUEsSUFBSTs4RkFDZlosa0RBQUk7WUFBQ2lCLENBQUMsRUFBRSxDQUFDO1lBQ1ZDLEVBQUUsRUFBRUgsTUFBTSxHQUFHLENBQVcsYUFBR0ksU0FBUztZQUNwQ0MsS0FBSyxFQUFFTCxNQUFNLEdBQUcsQ0FBUyxXQUFHTSxhQUFhO3NCQUVwQ1AsUUFBUTs7Ozs7Ozs7Ozs7QUFJekIsQ0FBQztHQWJLSCxRQUFROztRQUVVRiwrREFBaUI7OztLQUZuQ0UsUUFBUTtBQWVkLEdBQUssQ0FBQ1csTUFBTSxHQUFHQyxRQUFRLENBQVJBLEtBQUssRUFBSSxDQUFDOztJQUNyQixHQUFLLENBQUVWLElBQUksR0FBSVUsS0FBSyxDQUFiVixJQUFJO0lBRVgsTUFBTSw2RUFDRGQsaURBQUc7UUFDSnlCLFFBQVEsRUFBQyxDQUFPO1FBQ2hCQyxFQUFFLEVBQUMsQ0FBSztRQUNSQyxDQUFDLEVBQUMsQ0FBTTtRQUNSUixFQUFFLEVBQUVULG1FQUFpQixDQUFDLENBQVcsWUFBRSxDQUFXO1FBQzlDa0IsS0FBSyxFQUFFLENBQUNDO1lBQUFBLGNBQWMsRUFBRSxDQUFZO1FBQUEsQ0FBQztRQUNyQ0MsTUFBTSxFQUFFLENBQUM7T0FDTE4sS0FBSztrQkFDUixDQUVEOzs7Ozs7QUFFUixDQUFDO0lBaEJLRCxNQUFNOztRQVFBYiwrREFBaUI7OztNQVJ2QmEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgQm94LFxyXG4gICAgTGluayxcclxuICAgIFN0YWNrLFxyXG4gICAgSGVhZGluZyxcclxuICAgIEZsZXgsXHJcbiAgICBNZW51LFxyXG4gICAgTWVudUl0ZW0sXHJcbiAgICBNZW51TGlzdCxcclxuICAgIE1lbnVCdXR0b24sXHJcbiAgICBJY29uQnV0dG9uLFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWVcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XHJcblxyXG5jb25zdCBMaW5rSXRlbSA9ICh7aHJlZixwYXRoLGNoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxyXG4gICAgY29uc3QgYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS4yMDAnLCAnd2hpdGVBbHBoYS45MDAnKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPExpbmsgcD17Mn1cclxuICAgICAgICAgICAgYmc9e2FjdGl2ZSA/ICdnbGFzc1RlYWwnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICBjb2xvcj17YWN0aXZlID8gJyMyMDIwMjMnIDogaW5hY3RpdmVDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgTmF2QmFyID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3Qge3BhdGh9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICBwb3NpdGlvbj0nZml4ZWQnXHJcbiAgICAgICAgYXM9J25hdidcclxuICAgICAgICB3PScxMDAlJ1xyXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywgJyMyMDIwMjM4MCcpfVxyXG4gICAgICAgIHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6ICdibHVyOiAxMHB4J319XHJcbiAgICAgICAgekluZGV4PXsxfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIE5hdkJhclxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGFtYnVyZ2VySWNvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJpbmFjdGl2ZUNvbG9yIiwiTmF2QmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});