"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/LandingPage/About.js":
/*!*************************************************!*\
  !*** ./src/app/components/LandingPage/About.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/about.module.css */ \"(app-client)/./src/app/styles/about.module.css\");\n/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ \"(app-client)/./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserAddOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserAddOutlined */ \"(app-client)/./node_modules/@ant-design/icons/lib/icons/UserAddOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UploadOutlined */ \"(app-client)/./node_modules/@ant-design/icons/lib/icons/UploadOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/EditOutlined */ \"(app-client)/./node_modules/@ant-design/icons/lib/icons/EditOutlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/**\n * About Component - renders about page on To Due Landing page.\n * @returns {JSX} - renders about section including text and card compoents from antd.\n */ function About() {\n    _s();\n    const [scrollTriggered, setScrollTriggered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollPosition = window.scrollY;\n            const triggerPosition = 500;\n            if (scrollPosition >= triggerPosition) {\n                setScrollTriggered(true);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainDiv),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().sectionHeader),\n                        children: \"Your AI-Powered Classmate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().paragraph),\n                        children: \"Welcome to a world where managing your school schedule is as easy as snapping your fingers. To Due harnesses the unparalleled power of AI to wave goodbye to manually inputting assignment deadlines and class timings.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().paragraph),\n                        children: \"With a seamless integration to your Google Calendar, our platform simply requires the upload of your syllabus and our algorithms will take it from there. Let’s embark on a stress-free journey of academic organization!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().paragraph),\n                        children: \"Say hello to a cleaner, clutter-free calendar and clearer mind. No more sifting through piles of papers, as To Due ensures that nothing slips through the cracks.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().stepFlow),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Sign Up\",\n                        className: \"\".concat((_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().card), \" \").concat(scrollTriggered ? (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().animate) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserAddOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            style: {\n                                fontSize: 48\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().arrow), \" \").concat(scrollTriggered ? (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().animate) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"→\"\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Upload\",\n                        className: \"\".concat((_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().card), \" \").concat(scrollTriggered ? (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().animate) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            style: {\n                                fontSize: 48\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().arrow), \" \").concat(scrollTriggered ? (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().animate) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"→\"\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Get To Dueing\",\n                        className: \"\".concat((_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().card), \" \").concat(scrollTriggered ? (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().animate) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            style: {\n                                fontSize: 48\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/About.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(About, \"UbbMw7QR0ju2z/Y8gQcAOtMaQB0=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0xhbmRpbmdQYWdlL0Fib3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN2QjtBQUtEO0FBQUE7QUFBQTtBQUNpQjtBQUU1Qzs7O0NBR0MsR0FDYyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUV2REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxlQUFlO1lBQ25CLE1BQU1DLGlCQUFpQkMsT0FBT0MsT0FBTztZQUNyQyxNQUFNQyxrQkFBa0I7WUFFeEIsSUFBSUgsa0JBQWtCRyxpQkFBaUI7Z0JBQ3JDTCxtQkFBbUI7WUFDckI7UUFDRjtRQUVBRyxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVTDtRQUNsQyxPQUFPLElBQU1FLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVOO0lBQ3BELEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTztRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxnQkFBZ0I7WUFDaEJDLFlBQVk7UUFDZDs7MEJBRUEsOERBQUNMO2dCQUFJTSxXQUFXdkIseUVBQWM7O2tDQUM1Qiw4REFBQ3lCO3dCQUFFRixXQUFXdkIsK0VBQW9CO2tDQUFFOzs7Ozs7a0NBQ3BDLDhEQUFDeUI7d0JBQUVGLFdBQVd2QiwyRUFBZ0I7a0NBQUU7Ozs7OztrQ0FNaEMsOERBQUN5Qjt3QkFBRUYsV0FBV3ZCLDJFQUFnQjtrQ0FBRTs7Ozs7O2tDQU1oQyw4REFBQ3lCO3dCQUFFRixXQUFXdkIsMkVBQWdCO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBTWxDLDhEQUFDaUI7Z0JBQUlNLFdBQVd2QiwwRUFBZTs7a0NBQzdCLDhEQUFDQyxxREFBSUE7d0JBQ0g0QixPQUFNO3dCQUNOTixXQUFXLEdBQWtCZixPQUFmUixzRUFBVyxFQUFDLEtBQXlDLE9BQXRDUSxrQkFBa0JSLHlFQUFjLEdBQUc7a0NBRWhFLDRFQUFDRSxtRkFBZUE7NEJBQUNnQixPQUFPO2dDQUFFYyxVQUFVOzRCQUFHOzs7Ozs7Ozs7OztrQ0FFekMsOERBQUNmO3dCQUNDTSxXQUFXLEdBQW1CZixPQUFoQlIsdUVBQVksRUFBQyxLQUF5QyxPQUF0Q1Esa0JBQWtCUix5RUFBYyxHQUFHO2tDQUVqRSw0RUFBQ2tDO3NDQUFLOzs7Ozs7Ozs7OztrQ0FFUiw4REFBQ2pDLHFEQUFJQTt3QkFDSDRCLE9BQU07d0JBQ05OLFdBQVcsR0FBa0JmLE9BQWZSLHNFQUFXLEVBQUMsS0FBeUMsT0FBdENRLGtCQUFrQlIseUVBQWMsR0FBRztrQ0FFaEUsNEVBQUNHLGtGQUFjQTs0QkFBQ2UsT0FBTztnQ0FBRWMsVUFBVTs0QkFBRzs7Ozs7Ozs7Ozs7a0NBRXhDLDhEQUFDZjt3QkFDQ00sV0FBVyxHQUFtQmYsT0FBaEJSLHVFQUFZLEVBQUMsS0FBeUMsT0FBdENRLGtCQUFrQlIseUVBQWMsR0FBRztrQ0FFakUsNEVBQUNrQztzQ0FBSzs7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNqQyxxREFBSUE7d0JBQ0g0QixPQUFNO3dCQUNOTixXQUFXLEdBQWtCZixPQUFmUixzRUFBVyxFQUFDLEtBQXlDLE9BQXRDUSxrQkFBa0JSLHlFQUFjLEdBQUc7a0NBRWhFLDRFQUFDSSxnRkFBWUE7NEJBQUNjLE9BQU87Z0NBQUVjLFVBQVU7NEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0dBOUV3QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nUGFnZS9BYm91dC5qcz9lNzZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9hYm91dC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gIFVzZXJBZGRPdXRsaW5lZCxcbiAgVXBsb2FkT3V0bGluZWQsXG4gIEVkaXRPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogQWJvdXQgQ29tcG9uZW50IC0gcmVuZGVycyBhYm91dCBwYWdlIG9uIFRvIER1ZSBMYW5kaW5nIHBhZ2UuXG4gKiBAcmV0dXJucyB7SlNYfSAtIHJlbmRlcnMgYWJvdXQgc2VjdGlvbiBpbmNsdWRpbmcgdGV4dCBhbmQgY2FyZCBjb21wb2VudHMgZnJvbSBhbnRkLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgY29uc3QgW3Njcm9sbFRyaWdnZXJlZCwgc2V0U2Nyb2xsVHJpZ2dlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCB0cmlnZ2VyUG9zaXRpb24gPSA1MDA7XG5cbiAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSB0cmlnZ2VyUG9zaXRpb24pIHtcbiAgICAgICAgc2V0U2Nyb2xsVHJpZ2dlcmVkKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkRpdn0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25IZWFkZXJ9PllvdXIgQUktUG93ZXJlZCBDbGFzc21hdGU8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgV2VsY29tZSB0byBhIHdvcmxkIHdoZXJlIG1hbmFnaW5nIHlvdXIgc2Nob29sIHNjaGVkdWxlIGlzIGFzIGVhc3kgYXNcbiAgICAgICAgICBzbmFwcGluZyB5b3VyIGZpbmdlcnMuIFRvIER1ZSBoYXJuZXNzZXMgdGhlIHVucGFyYWxsZWxlZCBwb3dlciBvZiBBSVxuICAgICAgICAgIHRvIHdhdmUgZ29vZGJ5ZSB0byBtYW51YWxseSBpbnB1dHRpbmcgYXNzaWdubWVudCBkZWFkbGluZXMgYW5kIGNsYXNzXG4gICAgICAgICAgdGltaW5ncy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgIFdpdGggYSBzZWFtbGVzcyBpbnRlZ3JhdGlvbiB0byB5b3VyIEdvb2dsZSBDYWxlbmRhciwgb3VyIHBsYXRmb3JtXG4gICAgICAgICAgc2ltcGx5IHJlcXVpcmVzIHRoZSB1cGxvYWQgb2YgeW91ciBzeWxsYWJ1cyBhbmQgb3VyIGFsZ29yaXRobXMgd2lsbFxuICAgICAgICAgIHRha2UgaXQgZnJvbSB0aGVyZS4gTGV04oCZcyBlbWJhcmsgb24gYSBzdHJlc3MtZnJlZSBqb3VybmV5IG9mIGFjYWRlbWljXG4gICAgICAgICAgb3JnYW5pemF0aW9uIVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgU2F5IGhlbGxvIHRvIGEgY2xlYW5lciwgY2x1dHRlci1mcmVlIGNhbGVuZGFyIGFuZCBjbGVhcmVyIG1pbmQuIE5vXG4gICAgICAgICAgbW9yZSBzaWZ0aW5nIHRocm91Z2ggcGlsZXMgb2YgcGFwZXJzLCBhcyBUbyBEdWUgZW5zdXJlcyB0aGF0IG5vdGhpbmdcbiAgICAgICAgICBzbGlwcyB0aHJvdWdoIHRoZSBjcmFja3MuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwRmxvd30+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgdGl0bGU9XCJTaWduIFVwXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkfSAke3Njcm9sbFRyaWdnZXJlZCA/IHN0eWxlcy5hbmltYXRlIDogXCJcIn1gfVxuICAgICAgICA+XG4gICAgICAgICAgPFVzZXJBZGRPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogNDggfX0gLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXJyb3d9ICR7c2Nyb2xsVHJpZ2dlcmVkID8gc3R5bGVzLmFuaW1hdGUgOiBcIlwifWB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj4mIzg1OTQ7PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICB0aXRsZT1cIlVwbG9hZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gJHtzY3JvbGxUcmlnZ2VyZWQgPyBzdHlsZXMuYW5pbWF0ZSA6IFwiXCJ9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxVcGxvYWRPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogNDggfX0gLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXJyb3d9ICR7c2Nyb2xsVHJpZ2dlcmVkID8gc3R5bGVzLmFuaW1hdGUgOiBcIlwifWB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj4mIzg1OTQ7PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICB0aXRsZT1cIkdldCBUbyBEdWVpbmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmR9ICR7c2Nyb2xsVHJpZ2dlcmVkID8gc3R5bGVzLmFuaW1hdGUgOiBcIlwifWB9XG4gICAgICAgID5cbiAgICAgICAgICA8RWRpdE91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiA0OCB9fSAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXJkIiwiVXNlckFkZE91dGxpbmVkIiwiVXBsb2FkT3V0bGluZWQiLCJFZGl0T3V0bGluZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFib3V0Iiwic2Nyb2xsVHJpZ2dlcmVkIiwic2V0U2Nyb2xsVHJpZ2dlcmVkIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwidHJpZ2dlclBvc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY2xhc3NOYW1lIiwibWFpbkRpdiIsInAiLCJzZWN0aW9uSGVhZGVyIiwicGFyYWdyYXBoIiwic3RlcEZsb3ciLCJ0aXRsZSIsImNhcmQiLCJhbmltYXRlIiwiZm9udFNpemUiLCJhcnJvdyIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/LandingPage/About.js\n"));

/***/ })

});