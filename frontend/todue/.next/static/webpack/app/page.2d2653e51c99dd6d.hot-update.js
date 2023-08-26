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

/***/ "(app-client)/./src/app/components/LandingPage/Contact.js":
/*!***************************************************!*\
  !*** ./src/app/components/LandingPage/Contact.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button */ \"(app-client)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ \"(app-client)/./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ \"(app-client)/./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ \"(app-client)/./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ \"(app-client)/./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var antd_es_input_TextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/input/TextArea */ \"(app-client)/./node_modules/antd/es/input/TextArea.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Contact Component.\nfunction Contact() {\n    _s();\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].useForm();\n    const [makeDisabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messageAPI, contextHolder] = antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].useMessage();\n    const cardStyle = {\n        width: 600,\n        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\"\n    };\n    /**\n   * Handles form submit sends form data to backend to be processed to send a eamil to the developer.\n   */ const handleFormSubmit = async ()=>{\n        messageAPI.open({\n            type: \"loading\",\n            content: \"Sending...\",\n            key: \"loadingKey\"\n        });\n        try {\n            const formData = await form.validateFields();\n            setDisabled(true) // making button disabled to reduce user spam clicks.\n            ;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://127.0.0.1:5000/api/send\", {\n                formItems: formData\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            messageAPI.open({\n                type: \"success\",\n                content: \"Message sent! we will get back to you soon.\",\n                key: \"loadingKey\"\n            });\n            form.resetFields() // clear fields when submitted successfully.\n            ;\n        } catch (error) {\n            console.error(\"Error sending form: \".concat(error));\n            messageAPI.open({\n                type: \"error\",\n                content: \"Your message failed to send, try again!\",\n                key: \"loadingKey\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            paddingBottom: 100,\n            paddingTop: 100\n        },\n        children: [\n            contextHolder,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                title: \"Contact\",\n                style: cardStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    form: form,\n                    layout: \"vertical\",\n                    onFinish: handleFormSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                            label: \"First Name\",\n                            name: \"firstName\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                required: true,\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                            label: \"Last Name\",\n                            name: \"lastName\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                required: true,\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                            label: \"Email\",\n                            name: \"email\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                required: true,\n                                type: \"email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                            label: \"Message\",\n                            name: \"message\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input_TextArea__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                showCount: true,\n                                maxLength: 500,\n                                style: {\n                                    height: 150,\n                                    resize: \"none\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                disabled: makeDisabled,\n                                type: \"primary\",\n                                htmlType: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/LandingPage/Contact.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"gzGloX6Q9KmxQHVOxhNFV1XZ6iM=\", false, function() {\n    return [\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].useForm,\n        antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].useMessage\n    ];\n});\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0xhbmRpbmdQYWdlL0NvbnRhY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQztBQUNvQjtBQUNiO0FBRWpDLHFCQUFxQjtBQUNOLFNBQVNROztJQUN0QixNQUFNLENBQUNDLEtBQUssR0FBR1AscURBQUlBLENBQUNRLE9BQU87SUFDM0IsTUFBTSxDQUFDQyxjQUFjQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHVix3REFBT0EsQ0FBQ1csVUFBVTtJQUV0RCxNQUFNQyxZQUFZO1FBQ2hCQyxPQUFPO1FBQ1BDLFdBQVc7SUFDYjtJQUVBOztHQUVDLEdBQ0QsTUFBTUMsbUJBQW1CO1FBRXZCTixXQUFXTyxJQUFJLENBQUM7WUFDZEMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLEtBQUs7UUFDUDtRQUVBLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1mLEtBQUtnQixjQUFjO1lBQzFDYixZQUFZLE1BQU0scURBQXFEOztZQUN2RSxNQUFNYyxXQUFXLE1BQU1yQiw2Q0FBS0EsQ0FBQ3NCLElBQUksQ0FDL0Isa0NBQ0E7Z0JBQ0VDLFdBQVdKO1lBQ2IsR0FDQTtnQkFDRUssU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFRmhCLFdBQVdPLElBQUksQ0FBQztnQkFDZEMsTUFBTTtnQkFDTkMsU0FBUztnQkFDVEMsS0FBSztZQUNQO1lBQ0FkLEtBQUtxQixXQUFXLEdBQUcsNENBQTRDOztRQUNqRSxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHVCQUE2QixPQUFOQTtZQUVyQ2xCLFdBQVdPLElBQUksQ0FBQztnQkFDZEMsTUFBTTtnQkFDTkMsU0FBUztnQkFDVEMsS0FBSztZQUNQO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVTtRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLGVBQWU7WUFDZkMsWUFBWTtRQUNkOztZQUVDekI7MEJBQ0QsOERBQUNiLHFEQUFJQTtnQkFBQ3VDLE9BQU07Z0JBQVVOLE9BQU9sQjswQkFDM0IsNEVBQUNkLHFEQUFJQTtvQkFBQ08sTUFBTUE7b0JBQU1nQyxRQUFPO29CQUFXQyxVQUFVdkI7O3NDQUM1Qyw4REFBQ2pCLHFEQUFJQSxDQUFDeUMsSUFBSTs0QkFBQ0MsT0FBTTs0QkFBYUMsTUFBSztzQ0FDakMsNEVBQUMxQyxzREFBS0E7Z0NBQUMyQyxRQUFRO2dDQUFDekIsTUFBSzs7Ozs7Ozs7Ozs7c0NBRXZCLDhEQUFDbkIscURBQUlBLENBQUN5QyxJQUFJOzRCQUFDQyxPQUFNOzRCQUFZQyxNQUFLO3NDQUNoQyw0RUFBQzFDLHNEQUFLQTtnQ0FBQzJDLFFBQVE7Z0NBQUN6QixNQUFLOzs7Ozs7Ozs7OztzQ0FFdkIsOERBQUNuQixxREFBSUEsQ0FBQ3lDLElBQUk7NEJBQUNDLE9BQU07NEJBQVFDLE1BQUs7c0NBQzVCLDRFQUFDMUMsc0RBQUtBO2dDQUFDMkMsUUFBUTtnQ0FBQ3pCLE1BQUs7Ozs7Ozs7Ozs7O3NDQUV2Qiw4REFBQ25CLHFEQUFJQSxDQUFDeUMsSUFBSTs0QkFBQ0MsT0FBTTs0QkFBVUMsTUFBSztzQ0FDOUIsNEVBQUN2Qyw4REFBUUE7Z0NBQUN5QyxTQUFTO2dDQUFDQyxXQUFXO2dDQUFLZCxPQUFPO29DQUFFZSxRQUFRO29DQUFLQyxRQUFRO2dDQUFPOzs7Ozs7Ozs7OztzQ0FFM0UsOERBQUNoRCxxREFBSUEsQ0FBQ3lDLElBQUk7c0NBQ1IsNEVBQUMzQyx3REFBTUE7Z0NBQUNtRCxVQUFVeEM7Z0NBQWNVLE1BQUs7Z0NBQVUrQixVQUFTOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdFO0dBdEZ3QjVDOztRQUNQTixxREFBSUEsQ0FBQ1E7UUFFZ0JOLHdEQUFPQSxDQUFDVzs7O0tBSHRCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UvQ29udGFjdC5qcz82NzYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgRm9ybSwgSW5wdXQsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJhbnRkL2VzL2lucHV0L1RleHRBcmVhXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBDb250YWN0IENvbXBvbmVudC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xuICBjb25zdCBbbWFrZURpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlQVBJLCBjb250ZXh0SG9sZGVyXSA9IG1lc3NhZ2UudXNlTWVzc2FnZSgpO1xuXG4gIGNvbnN0IGNhcmRTdHlsZSA9IHtcbiAgICB3aWR0aDogNjAwLFxuICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZm9ybSBzdWJtaXQgc2VuZHMgZm9ybSBkYXRhIHRvIGJhY2tlbmQgdG8gYmUgcHJvY2Vzc2VkIHRvIHNlbmQgYSBlYW1pbCB0byB0aGUgZGV2ZWxvcGVyLlxuICAgKi9cbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcblxuICAgIG1lc3NhZ2VBUEkub3Blbih7XG4gICAgICB0eXBlOiBcImxvYWRpbmdcIixcbiAgICAgIGNvbnRlbnQ6IFwiU2VuZGluZy4uLlwiLFxuICAgICAga2V5OiBcImxvYWRpbmdLZXlcIixcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IGZvcm0udmFsaWRhdGVGaWVsZHMoKTtcbiAgICAgIHNldERpc2FibGVkKHRydWUpIC8vIG1ha2luZyBidXR0b24gZGlzYWJsZWQgdG8gcmVkdWNlIHVzZXIgc3BhbSBjbGlja3MuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL2FwaS9zZW5kXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtSXRlbXM6IGZvcm1EYXRhLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIG1lc3NhZ2VBUEkub3Blbih7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgY29udGVudDogJ01lc3NhZ2Ugc2VudCEgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3Ugc29vbi4nLFxuICAgICAgICBrZXk6IFwibG9hZGluZ0tleVwiXG4gICAgICB9KVxuICAgICAgZm9ybS5yZXNldEZpZWxkcygpIC8vIGNsZWFyIGZpZWxkcyB3aGVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHNlbmRpbmcgZm9ybTogJHtlcnJvcn1gKTtcblxuICAgICAgbWVzc2FnZUFQSS5vcGVuKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgY29udGVudDogJ1lvdXIgbWVzc2FnZSBmYWlsZWQgdG8gc2VuZCwgdHJ5IGFnYWluIScsXG4gICAgICAgIGtleTogJ2xvYWRpbmdLZXknXG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAwLFxuICAgICAgICBwYWRkaW5nVG9wOiAxMDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjb250ZXh0SG9sZGVyfVxuICAgICAgPENhcmQgdGl0bGU9XCJDb250YWN0XCIgc3R5bGU9e2NhcmRTdHlsZX0+XG4gICAgICAgIDxGb3JtIGZvcm09e2Zvcm19IGxheW91dD1cInZlcnRpY2FsXCIgb25GaW5pc2g9e2hhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGaXJzdCBOYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiPlxuICAgICAgICAgICAgPElucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTGFzdCBOYW1lXCIgbmFtZT1cImxhc3ROYW1lXCI+XG4gICAgICAgICAgICA8SW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJFbWFpbFwiIG5hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgPElucHV0IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIk1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgPFRleHRBcmVhIHNob3dDb3VudCBtYXhMZW5ndGg9ezUwMH0gc3R5bGU9e3sgaGVpZ2h0OiAxNTAsIHJlc2l6ZTogXCJub25lXCIgfX0gLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17bWFrZURpc2FibGVkfSB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZCIsIkZvcm0iLCJJbnB1dCIsIm1lc3NhZ2UiLCJheGlvcyIsIlRleHRBcmVhIiwidXNlU3RhdGUiLCJDb250YWN0IiwiZm9ybSIsInVzZUZvcm0iLCJtYWtlRGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsIm1lc3NhZ2VBUEkiLCJjb250ZXh0SG9sZGVyIiwidXNlTWVzc2FnZSIsImNhcmRTdHlsZSIsIndpZHRoIiwiYm94U2hhZG93IiwiaGFuZGxlRm9ybVN1Ym1pdCIsIm9wZW4iLCJ0eXBlIiwiY29udGVudCIsImtleSIsImZvcm1EYXRhIiwidmFsaWRhdGVGaWVsZHMiLCJyZXNwb25zZSIsInBvc3QiLCJmb3JtSXRlbXMiLCJoZWFkZXJzIiwicmVzZXRGaWVsZHMiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInRpdGxlIiwibGF5b3V0Iiwib25GaW5pc2giLCJJdGVtIiwibGFiZWwiLCJuYW1lIiwicmVxdWlyZWQiLCJzaG93Q291bnQiLCJtYXhMZW5ndGgiLCJoZWlnaHQiLCJyZXNpemUiLCJkaXNhYmxlZCIsImh0bWxUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/LandingPage/Contact.js\n"));

/***/ })

});