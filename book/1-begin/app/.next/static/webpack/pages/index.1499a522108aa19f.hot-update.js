"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_saas_book_1_begin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_saas_book_1_begin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_saas_book_1_begin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout/index.tsx\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_confirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/confirm */ \"./lib/confirm.ts\");\n/* harmony import */ var _lib_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/notify */ \"./lib/notify.ts\");\n/* harmony import */ var _lib_api_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api/public */ \"./lib/api/public.ts\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\nvar Index = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Index, _Component);\n    var _super = _createSuper(Index);\n    function Index() {\n        _classCallCheck(this, Index);\n        return _super.apply(this, arguments);\n    }\n    var _proto = Index.prototype;\n    _proto.render = function render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({}, this.props, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                            children: \"Index page\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"This is a description of the Index page\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    style: {\n                        padding: \"0px 30px\",\n                        fontSize: \"15px\",\n                        height: \"100%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Content on Index page\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/csr-page\",\n                            as: \"/csr-page\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"Go to CSR page\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {}, void 0, false, {\n                            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            variant: \"contained\",\n                            onClick: function() {\n                                return (0,_lib_confirm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n                                    title: \"Are you sure?\",\n                                    message: \"explanatory message\",\n                                    onAnswer: function() {\n                                        var _ref = _asyncToGenerator(D_saas_book_1_begin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(answer) {\n                                            return D_saas_book_1_begin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                                while(1)switch(_ctx.prev = _ctx.next){\n                                                    case 0:\n                                                        if (answer) {\n                                                            _ctx.next = 2;\n                                                            break;\n                                                        }\n                                                        return _ctx.abrupt(\"return\");\n                                                    case 2:\n                                                        nprogress__WEBPACK_IMPORTED_MODULE_6___default().start();\n                                                        try {\n                                                            (0,_lib_notify__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"You successfully confirmed.\");\n                                                        } catch (error) {\n                                                            console.error(error);\n                                                            (0,_lib_notify__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(error);\n                                                        } finally{\n                                                            nprogress__WEBPACK_IMPORTED_MODULE_6___default().done();\n                                                        }\n                                                    case 4:\n                                                    case \"end\":\n                                                        return _ctx.stop();\n                                                }\n                                            }, _callee);\n                                        }));\n                                        return function(answer) {\n                                            return _ref.apply(this, arguments);\n                                        };\n                                    }()\n                                });\n                            },\n                            children: \"Test Confirmer and Notifier\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Your email: \",\n                                this.props.user.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Your username: \",\n                                this.props.user.displayName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }), void 0, true, {\n            fileName: \"D:\\\\saas\\\\book\\\\1-begin\\\\app\\\\pages\\\\index.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this);\n    };\n    Index.getInitialProps = function getInitialProps() {\n        return _asyncToGenerator(D_saas_book_1_begin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var slug, fuck, user, signedRequestData;\n            return D_saas_book_1_begin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        slug = \"team-builder-book\";\n                        fuck = \"just worx\";\n                        _ctx.next = 4;\n                        return (0,_lib_api_public__WEBPACK_IMPORTED_MODULE_9__.getUserBySlugApiMethod)(slug);\n                    case 4:\n                        user = _ctx.sent;\n                        _ctx.next = 7;\n                        return getSignedRequestFor(fuck);\n                    case 7:\n                        signedRequestData = _ctx.sent;\n                        console.log(user);\n                        return _ctx.abrupt(\"return\", _objectSpread({}, user));\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    };\n    return Index;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDUixJQUFJLENBQUMsQ0FBQztxREFHWCxrQkFBS0EsSUFBSSxDQUFFOzs7Ozs7U0FDbkI7S0FBQTs7Q0FpREYsQ0E3RG1CakMsd0RBQWUsQ0E2RGxDO0FBRUQsK0RBQWVRLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuaW1wb3J0IGNvbmZpcm0gZnJvbSAnLi4vbGliL2NvbmZpcm0nO1xyXG5pbXBvcnQgbm90aWZ5IGZyb20gJy4uL2xpYi9ub3RpZnknO1xyXG5pbXBvcnQgeyBnZXRVc2VyQnlTbHVnQXBpTWV0aG9kIH0gZnJvbSAnLi4vbGliL2FwaS9wdWJsaWMnO1xyXG5cclxudHlwZSBQcm9wcyA9IHsgdXNlcjogeyBlbWFpbDogc3RyaW5nOyBkaXNwbGF5TmFtZTogc3RyaW5nIH0gfTtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBjb25zdCBzbHVnID0gJ3RlYW0tYnVpbGRlci1ib29rJztcclxuXHJcbiAgICBjb25zdCBmdWNrID0gJ2p1c3Qgd29yeCc7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5U2x1Z0FwaU1ldGhvZChzbHVnKTtcclxuICAgIGNvbnN0IHNpZ25lZFJlcXVlc3REYXRhID0gYXdhaXQgZ2V0U2lnbmVkUmVxdWVzdEZvcihmdWNrKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIC8vY29uc29sZS5sb2coc2lnbmVkUmVxdWVzdERhdGEpO1xyXG5cclxuICAgIHJldHVybiB7IC4uLnVzZXIgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5JbmRleCBwYWdlPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGlzIGEgZGVzY3JpcHRpb24gb2YgdGhlIEluZGV4IHBhZ2VcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMzBweCcsIGZvbnRTaXplOiAnMTVweCcsIGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgPHA+Q29udGVudCBvbiBJbmRleCBwYWdlPC9wPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jc3ItcGFnZVwiIGFzPVwiL2Nzci1wYWdlXCI+XHJcbiAgICAgICAgICAgIDxhPkdvIHRvIENTUiBwYWdlPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2V4cGxhbmF0b3J5IG1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgb25BbnN3ZXI6IGFzeW5jIChhbnN3ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnkoJ1lvdSBzdWNjZXNzZnVsbHkgY29uZmlybWVkLicpO1xyXG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRlc3QgQ29uZmlybWVyIGFuZCBOb3RpZmllclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8cD5Zb3VyIGVtYWlsOiB7dGhpcy5wcm9wcy51c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgIDxwPllvdXIgdXNlcm5hbWU6IHt0aGlzLnByb3BzLnVzZXIuZGlzcGxheU5hbWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlJlYWN0IiwiSGVhZCIsIkxpbmsiLCJMYXlvdXQiLCJOUHJvZ3Jlc3MiLCJjb25maXJtIiwibm90aWZ5IiwiZ2V0VXNlckJ5U2x1Z0FwaU1ldGhvZCIsIkluZGV4IiwicmVuZGVyIiwicHJvcHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImZvbnRTaXplIiwiaGVpZ2h0IiwicCIsImhyZWYiLCJhcyIsImEiLCJ2YXJpYW50Iiwib25DbGljayIsIm1lc3NhZ2UiLCJvbkFuc3dlciIsImFuc3dlciIsInN0YXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwiZG9uZSIsInVzZXIiLCJlbWFpbCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwic2x1ZyIsImZ1Y2siLCJzaWduZWRSZXF1ZXN0RGF0YSIsImdldFNpZ25lZFJlcXVlc3RGb3IiLCJsb2ciLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});