"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/login/page",{

/***/ "(app-client)/./src/app/components/SignInAndMainActions/FileInput.js":
/*!**************************************************************!*\
  !*** ./src/app/components/SignInAndMainActions/FileInput.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FileInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"(app-client)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ \"(app-client)/./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/upload */ \"(app-client)/./node_modules/antd/lib/upload/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/card */ \"(app-client)/./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/skeleton */ \"(app-client)/./node_modules/antd/lib/skeleton/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UploadOutlined */ \"(app-client)/./node_modules/@ant-design/icons/lib/icons/UploadOutlined.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _FileDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileDisplay */ \"(app-client)/./src/app/components/SignInAndMainActions/FileDisplay.js\");\n/* harmony import */ var _styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fileInput.module.css */ \"(app-client)/./src/app/styles/fileInput.module.css\");\n/* harmony import */ var _styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction FileInput(props) {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileUploaded, setFileUploaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onChange = (info)=>{\n        if (info.file.status === \"done\") {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"\".concat(info.file.name, \" file uploaded successfully\"));\n            setFileUploaded(true);\n        } else if (info.file.status === \"error\") {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"\".concat(info.file.name, \" file upload failed. Try again!\"));\n        }\n    };\n    const beforeUpload = (file)=>{\n        const allowedTypes = [\n            \"application/pdf\",\n            \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\n        ];\n        const isAllowed = allowedTypes.includes(file.type);\n        if (!isAllowed) {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"You can only upload PDFs or DOCX files!\");\n        }\n        return isAllowed;\n    };\n    const handleSubmit = async (param)=>{\n        let { file, onSuccess, onError } = param;\n        setLoading(true);\n        setDisabled(true);\n        try {\n            const formData = new FormData();\n            formData.append(\"file\", file);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://127.0.0.1:5000/api/uploadFile\", formData, {\n                headers: {\n                    Authorization: \"Bearer \".concat(props.accessToken),\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            setLoading(false);\n            setDisabled(false);\n            const repData = await response.data;\n            const course_data = repData[0].course_data;\n            setData(course_data);\n            onSuccess();\n        } catch (error) {\n            setLoading(false);\n            setDisabled(false);\n            onError();\n        }\n    };\n    const loadingComponent = ()=>{\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    style: {\n                        width: 500,\n                        margin: \"20px auto\",\n                        borderRadius: \"8px\",\n                        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        loading: loading,\n                        active: true\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this);\n        } else if (fileUploaded && !loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FileDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data,\n                updateData: updateData,\n                accessToken: props.accessToken,\n                userName: props.userName\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    const updateData = (newData)=>{\n        setData(newData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default().fileInput),\n                children: props.disabled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_upload__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    name: \"file\",\n                    disabled: disabled,\n                    showUploadList: false,\n                    customRequest: handleSubmit,\n                    onChange: onChange,\n                    beforeUpload: beforeUpload,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                        disabled: disabled,\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, void 0, void 0),\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            loadingComponent()\n        ]\n    }, void 0, true);\n}\n_s(FileInput, \"leaL+VbeDNEyDh85HvC3J/WHQeY=\");\n_c = FileInput;\nvar _c;\n$RefreshReg$(_c, \"FileInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL1NpZ25JbkFuZE1haW5BY3Rpb25zL0ZpbGVJbnB1dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1o7QUFDekI7QUFDYztBQUNlO0FBRXhDLFNBQVNXLFVBQVVDLEtBQUs7O0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNb0IsV0FBVyxDQUFDQztRQUNoQixJQUFJQSxLQUFLQyxJQUFJLENBQUNDLE1BQU0sS0FBSyxRQUFRO1lBQy9CckIsd0RBQU9BLENBQUNzQixPQUFPLENBQUMsR0FBa0IsT0FBZkgsS0FBS0MsSUFBSSxDQUFDRyxJQUFJLEVBQUM7WUFDbENWLGdCQUFnQjtRQUNsQixPQUFPLElBQUlNLEtBQUtDLElBQUksQ0FBQ0MsTUFBTSxLQUFLLFNBQVM7WUFDdkNyQix3REFBT0EsQ0FBQ3dCLEtBQUssQ0FBQyxHQUFrQixPQUFmTCxLQUFLQyxJQUFJLENBQUNHLElBQUksRUFBQztRQUNsQztJQUNGO0lBRUEsTUFBTUUsZUFBZSxDQUFDTDtRQUNwQixNQUFNTSxlQUFlO1lBQ25CO1lBQ0E7U0FDRDtRQUVELE1BQU1DLFlBQVlELGFBQWFFLFFBQVEsQ0FBQ1IsS0FBS1MsSUFBSTtRQUNqRCxJQUFJLENBQUNGLFdBQVc7WUFDZDNCLHdEQUFPQSxDQUFDd0IsS0FBSyxDQUFDO1FBQ2hCO1FBRUEsT0FBT0c7SUFDVDtJQUVBLE1BQU1HLGVBQWU7WUFBTyxFQUFFVixJQUFJLEVBQUVXLFNBQVMsRUFBRUMsT0FBTyxFQUFFO1FBQ3REZixXQUFXO1FBQ1hGLFlBQVk7UUFDWixJQUFJO1lBQ0YsTUFBTWtCLFdBQVcsSUFBSUM7WUFDckJELFNBQVNFLE1BQU0sQ0FBQyxRQUFRZjtZQUV4QixNQUFNZ0IsV0FBVyxNQUFNL0IsNkNBQUtBLENBQUNnQyxJQUFJLENBQy9CLHdDQUNBSixVQUNBO2dCQUNFSyxTQUFTO29CQUNQQyxlQUFlLFVBQTRCLE9BQWxCOUIsTUFBTStCLFdBQVc7b0JBQzFDLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUdGdkIsV0FBVztZQUNYRixZQUFZO1lBQ1osTUFBTTBCLFVBQVUsTUFBTUwsU0FBUzFCLElBQUk7WUFDbkMsTUFBTWdDLGNBQWNELE9BQU8sQ0FBQyxFQUFFLENBQUNDLFdBQVc7WUFDMUMvQixRQUFRK0I7WUFDUlg7UUFDRixFQUFFLE9BQU9QLE9BQU87WUFDZFAsV0FBVztZQUNYRixZQUFZO1lBQ1ppQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNVyxtQkFBbUI7UUFDdkIsSUFBSTNCLFNBQVM7WUFDWCxxQkFDRSw4REFBQzRCO2dCQUFJQyxXQUFXdEMsMEVBQVc7MEJBQ3pCLDRFQUFDTCxxREFBSUE7b0JBQ0g2QyxPQUFPO3dCQUNMQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxjQUFjO3dCQUNkQyxXQUFXO29CQUNiOzhCQUVBLDRFQUFDaEQseURBQVFBO3dCQUFDYSxTQUFTQTt3QkFBU29DLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7UUFJMUMsT0FBTyxJQUFJeEMsZ0JBQWdCLENBQUNJLFNBQVM7WUFDbkMscUJBQ0UsOERBQUNWLG9EQUFXQTtnQkFDVkksTUFBTUE7Z0JBQ04yQyxZQUFZQTtnQkFDWmIsYUFBYS9CLE1BQU0rQixXQUFXO2dCQUM5QmMsVUFBVTdDLE1BQU02QyxRQUFROzs7Ozs7UUFHOUI7SUFDRjtJQUVBLE1BQU1ELGFBQWEsQ0FBQ0U7UUFBYzVDLFFBQVE0QztJQUFVO0lBRXBELHFCQUNFOzswQkFDRSw4REFBQ1g7Z0JBQUlDLFdBQVd0QywrRUFBZ0I7MEJBQzdCRSxNQUFNSyxRQUFRLGtCQUNiLDhEQUFDYix1REFBTUE7b0JBQ0xzQixNQUFLO29CQUNMVCxVQUFVQTtvQkFDVjJDLGdCQUFnQjtvQkFDaEJDLGVBQWU1QjtvQkFDZlosVUFBVUE7b0JBQ1ZPLGNBQWNBOzhCQUVkLDRFQUFDMUIsd0RBQU1BO3dCQUFDZSxVQUFVQTt3QkFBVTZDLG9CQUFNLDhEQUFDdkQsbUZBQWNBO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7O1lBTTNEdUM7OztBQUdQO0dBL0d3Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWduSW5BbmRNYWluQWN0aW9ucy9GaWxlSW5wdXQuanM/Njc2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgbWVzc2FnZSwgVXBsb2FkLCBDYXJkLCBTa2VsZXRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEZpbGVEaXNwbGF5IGZyb20gXCIuL0ZpbGVEaXNwbGF5XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZmlsZUlucHV0Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUlucHV0KHByb3BzKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlsZVVwbG9hZGVkLCBzZXRGaWxlVXBsb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoaW5mbykgPT4ge1xuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcImRvbmVcIikge1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseWApO1xuICAgICAgc2V0RmlsZVVwbG9hZGVkKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuIFRyeSBhZ2FpbiFgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmVmb3JlVXBsb2FkID0gKGZpbGUpID0+IHtcbiAgICBjb25zdCBhbGxvd2VkVHlwZXMgPSBbXG4gICAgICBcImFwcGxpY2F0aW9uL3BkZlwiLFxuICAgICAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudFwiLFxuICAgIF07XG5cbiAgICBjb25zdCBpc0FsbG93ZWQgPSBhbGxvd2VkVHlwZXMuaW5jbHVkZXMoZmlsZS50eXBlKTtcbiAgICBpZiAoIWlzQWxsb3dlZCkge1xuICAgICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgUERGcyBvciBET0NYIGZpbGVzIVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNBbGxvd2VkO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh7IGZpbGUsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXREaXNhYmxlZCh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hcGkvdXBsb2FkRmlsZVwiLFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9wcy5hY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXREaXNhYmxlZChmYWxzZSlcbiAgICAgIGNvbnN0IHJlcERhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuICAgICAgY29uc3QgY291cnNlX2RhdGEgPSByZXBEYXRhWzBdLmNvdXJzZV9kYXRhO1xuICAgICAgc2V0RGF0YShjb3Vyc2VfZGF0YSk7XG4gICAgICBvblN1Y2Nlc3MoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXREaXNhYmxlZChmYWxzZSlcbiAgICAgIG9uRXJyb3IoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZGluZ0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTa2VsZXRvbiBsb2FkaW5nPXtsb2FkaW5nfSBhY3RpdmUgLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGZpbGVVcGxvYWRlZCAmJiAhbG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZpbGVEaXNwbGF5XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICB1cGRhdGVEYXRhPXt1cGRhdGVEYXRhfVxuICAgICAgICAgIGFjY2Vzc1Rva2VuPXtwcm9wcy5hY2Nlc3NUb2tlbn1cbiAgICAgICAgICB1c2VyTmFtZT17cHJvcHMudXNlck5hbWV9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVEYXRhID0gKG5ld0RhdGEpID0+IHsgc2V0RGF0YShuZXdEYXRhKTsgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVJbnB1dH0+XG4gICAgICAgIHtwcm9wcy5kaXNhYmxlZCAmJiAoXG4gICAgICAgICAgPFVwbG9hZFxuICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxuICAgICAgICAgICAgY3VzdG9tUmVxdWVzdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17ZGlzYWJsZWR9IGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICAgIFVwbG9hZCBGaWxlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1VwbG9hZD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2xvYWRpbmdDb21wb25lbnQoKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwibWVzc2FnZSIsIlVwbG9hZCIsIkNhcmQiLCJTa2VsZXRvbiIsIlVwbG9hZE91dGxpbmVkIiwiYXhpb3MiLCJGaWxlRGlzcGxheSIsInN0eWxlcyIsIkZpbGVJbnB1dCIsInByb3BzIiwiZGF0YSIsInNldERhdGEiLCJmaWxlVXBsb2FkZWQiLCJzZXRGaWxlVXBsb2FkZWQiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbkNoYW5nZSIsImluZm8iLCJmaWxlIiwic3RhdHVzIiwic3VjY2VzcyIsIm5hbWUiLCJlcnJvciIsImJlZm9yZVVwbG9hZCIsImFsbG93ZWRUeXBlcyIsImlzQWxsb3dlZCIsImluY2x1ZGVzIiwidHlwZSIsImhhbmRsZVN1Ym1pdCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJhY2Nlc3NUb2tlbiIsInJlcERhdGEiLCJjb3Vyc2VfZGF0YSIsImxvYWRpbmdDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImFjdGl2ZSIsInVwZGF0ZURhdGEiLCJ1c2VyTmFtZSIsIm5ld0RhdGEiLCJmaWxlSW5wdXQiLCJzaG93VXBsb2FkTGlzdCIsImN1c3RvbVJlcXVlc3QiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/SignInAndMainActions/FileInput.js\n"));

/***/ })

});