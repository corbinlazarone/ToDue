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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FileInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"(app-client)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ \"(app-client)/./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/upload */ \"(app-client)/./node_modules/antd/lib/upload/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/card */ \"(app-client)/./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/skeleton */ \"(app-client)/./node_modules/antd/lib/skeleton/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UploadOutlined */ \"(app-client)/./node_modules/@ant-design/icons/lib/icons/UploadOutlined.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _FileDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileDisplay */ \"(app-client)/./src/app/components/SignInAndMainActions/FileDisplay.js\");\n/* harmony import */ var _styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fileInput.module.css */ \"(app-client)/./src/app/styles/fileInput.module.css\");\n/* harmony import */ var _styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction FileInput(props) {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileUploaded, setFileUploaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onChange = (info)=>{\n        // setLoading(true)\n        if (info.file.status === \"done\") {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"\".concat(info.file.name, \" file uploaded successfully\"));\n            setFileUploaded(true);\n        } else if (info.file.status === \"error\") {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"\".concat(info.file.name, \" file upload failed. Try again!\"));\n        }\n    };\n    const beforeUpload = (file)=>{\n        const allowedTypes = [\n            \"application/pdf\",\n            \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\n        ];\n        const isAllowed = allowedTypes.includes(file.type);\n        if (!isAllowed) {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"You can only upload PDFs or DOCX files!\");\n        }\n        return isAllowed;\n    };\n    const handleSubmit = async (param)=>{\n        let { file, onSuccess, onError } = param;\n        setLoading(true);\n        try {\n            const formData = new FormData();\n            formData.append(\"file\", file);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://127.0.0.1:5000/api/uploadFile\", formData, {\n                headers: {\n                    Authorization: \"Bearer \".concat(props.accessToken),\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            setLoading(false); // Set loading to false after fetching data\n            const responseData = await response.data;\n            setData(responseData);\n            onSuccess();\n        } catch (error) {\n            setLoading(false); // Set loading to false in case of error\n            onError();\n        }\n    };\n    const loadingComponent = ()=>{\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    style: {\n                        width: 500,\n                        margin: \"20px auto\",\n                        borderRadius: \"8px\",\n                        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        loading: loading,\n                        active: true\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this);\n        } else if (fileUploaded && !loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FileDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data,\n                updateData: updateData,\n                accessToken: props.accessToken\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    const updateData = (newData)=>{\n        setData(newData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default().fileInput),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_upload__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    name: \"file\",\n                    disabled: props.disabled,\n                    showUploadList: false,\n                    customRequest: handleSubmit,\n                    onChange: onChange,\n                    beforeUpload: beforeUpload,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, void 0, void 0),\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            loadingComponent()\n        ]\n    }, void 0, true);\n}\n_s(FileInput, \"uf3lMn7R/rIYOt1sykxZkStDFXc=\");\n_c = FileInput;\nvar _c;\n$RefreshReg$(_c, \"FileInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL1NpZ25JbkFuZE1haW5BY3Rpb25zL0ZpbGVJbnB1dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1o7QUFDekI7QUFDYztBQUNlO0FBRXhDLFNBQVNXLFVBQVVDLEtBQUs7O0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNa0IsV0FBVyxDQUFDQztRQUVoQixtQkFBbUI7UUFFbkIsSUFBSUEsS0FBS0MsSUFBSSxDQUFDQyxNQUFNLEtBQUssUUFBUTtZQUMvQm5CLHdEQUFPQSxDQUFDb0IsT0FBTyxDQUFDLEdBQWtCLE9BQWZILEtBQUtDLElBQUksQ0FBQ0csSUFBSSxFQUFDO1lBQ2xDUixnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJSSxLQUFLQyxJQUFJLENBQUNDLE1BQU0sS0FBSyxTQUFTO1lBQ3ZDbkIsd0RBQU9BLENBQUNzQixLQUFLLENBQUMsR0FBa0IsT0FBZkwsS0FBS0MsSUFBSSxDQUFDRyxJQUFJLEVBQUM7UUFDbEM7SUFDRjtJQUVBLE1BQU1FLGVBQWUsQ0FBQ0w7UUFDcEIsTUFBTU0sZUFBZTtZQUNuQjtZQUNBO1NBQ0Q7UUFFRCxNQUFNQyxZQUFZRCxhQUFhRSxRQUFRLENBQUNSLEtBQUtTLElBQUk7UUFDakQsSUFBSSxDQUFDRixXQUFXO1lBQ2R6Qix3REFBT0EsQ0FBQ3NCLEtBQUssQ0FBQztRQUNoQjtRQUVBLE9BQU9HO0lBQ1Q7SUFFQSxNQUFNRyxlQUFlO1lBQU8sRUFBRVYsSUFBSSxFQUFFVyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtRQUN0RGYsV0FBVztRQUNYLElBQUk7WUFDRixNQUFNZ0IsV0FBVyxJQUFJQztZQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFFBQVFmO1lBRXhCLE1BQU1nQixXQUFXLE1BQU03Qiw2Q0FBS0EsQ0FBQzhCLElBQUksQ0FDL0Isd0NBQ0FKLFVBQ0E7Z0JBQ0VLLFNBQVM7b0JBQ1BDLGVBQWUsVUFBNEIsT0FBbEI1QixNQUFNNkIsV0FBVztvQkFDMUMsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBR0Z2QixXQUFXLFFBQVEsMkNBQTJDO1lBQzlELE1BQU13QixlQUFlLE1BQU1MLFNBQVN4QixJQUFJO1lBQ3hDQyxRQUFRNEI7WUFDUlY7UUFDRixFQUFFLE9BQU9QLE9BQU87WUFDZFAsV0FBVyxRQUFRLHdDQUF3QztZQUMzRGU7UUFDRjtJQUNGO0lBRUEsTUFBTVUsbUJBQW1CO1FBQ3ZCLElBQUkxQixTQUFTO1lBQ1gscUJBQ0UsOERBQUMyQjtnQkFBSUMsV0FBV25DLDBFQUFXOzBCQUN6Qiw0RUFBQ0wscURBQUlBO29CQUNIMEMsT0FBTzt3QkFDTEMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsY0FBYzt3QkFDZEMsV0FBVztvQkFDYjs4QkFFQSw0RUFBQzdDLHlEQUFRQTt3QkFBQ1csU0FBU0E7d0JBQVNtQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O1FBSTFDLE9BQU8sSUFBSXJDLGdCQUFnQixDQUFDRSxTQUFTO1lBQ25DLHFCQUNFLDhEQUFDUixvREFBV0E7Z0JBQ1ZJLE1BQU1BO2dCQUNOd0MsWUFBWUE7Z0JBQ1paLGFBQWE3QixNQUFNNkIsV0FBVzs7Ozs7O1FBR3BDO0lBQ0Y7SUFFQSxNQUFNWSxhQUFhLENBQUNDO1FBQ2xCeEMsUUFBUXdDO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNWO2dCQUFJQyxXQUFXbkMsK0VBQWdCOzBCQUM1Qiw0RUFBQ04sdURBQU1BO29CQUNMb0IsTUFBSztvQkFDTGdDLFVBQVU1QyxNQUFNNEMsUUFBUTtvQkFDeEJDLGdCQUFnQjtvQkFDaEJDLGVBQWUzQjtvQkFDZlosVUFBVUE7b0JBQ1ZPLGNBQWNBOzhCQUVkLDRFQUFDeEIsd0RBQU1BO3dCQUFDeUQsb0JBQU0sOERBQUNwRCxtRkFBY0E7a0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHdkNvQzs7O0FBR1A7R0ExR3dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NpZ25JbkFuZE1haW5BY3Rpb25zL0ZpbGVJbnB1dC5qcz82NzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBtZXNzYWdlLCBVcGxvYWQsIENhcmQsIFNrZWxldG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgRmlsZURpc3BsYXkgZnJvbSBcIi4vRmlsZURpc3BsYXlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9maWxlSW5wdXQubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlSW5wdXQocHJvcHMpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmaWxlVXBsb2FkZWQsIHNldEZpbGVVcGxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNoYW5nZSA9IChpbmZvKSA9PiB7XG4gICAgXG4gICAgLy8gc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5YCk7XG4gICAgICBzZXRGaWxlVXBsb2FkZWQodHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcImVycm9yXCIpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC4gVHJ5IGFnYWluIWApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBiZWZvcmVVcGxvYWQgPSAoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGFsbG93ZWRUeXBlcyA9IFtcbiAgICAgIFwiYXBwbGljYXRpb24vcGRmXCIsXG4gICAgICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50XCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGlzQWxsb3dlZCA9IGFsbG93ZWRUeXBlcy5pbmNsdWRlcyhmaWxlLnR5cGUpO1xuICAgIGlmICghaXNBbGxvd2VkKSB7XG4gICAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiBvbmx5IHVwbG9hZCBQREZzIG9yIERPQ1ggZmlsZXMhXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBpc0FsbG93ZWQ7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHsgZmlsZSwgb25TdWNjZXNzLCBvbkVycm9yIH0pID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL2FwaS91cGxvYWRGaWxlXCIsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb3BzLmFjY2Vzc1Rva2VufWAsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gU2V0IGxvYWRpbmcgdG8gZmFsc2UgYWZ0ZXIgZmV0Y2hpbmcgZGF0YVxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcbiAgICAgIHNldERhdGEocmVzcG9uc2VEYXRhKTtcbiAgICAgIG9uU3VjY2VzcygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gU2V0IGxvYWRpbmcgdG8gZmFsc2UgaW4gY2FzZSBvZiBlcnJvclxuICAgICAgb25FcnJvcigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkaW5nQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNrZWxldG9uIGxvYWRpbmc9e2xvYWRpbmd9IGFjdGl2ZSAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZmlsZVVwbG9hZGVkICYmICFsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RmlsZURpc3BsYXlcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIHVwZGF0ZURhdGE9e3VwZGF0ZURhdGF9XG4gICAgICAgICAgYWNjZXNzVG9rZW49e3Byb3BzLmFjY2Vzc1Rva2VufVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRGF0YSA9IChuZXdEYXRhKSA9PiB7XG4gICAgc2V0RGF0YShuZXdEYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWxlSW5wdXR9PlxuICAgICAgICAgIDxVcGxvYWRcbiAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cbiAgICAgICAgICAgIGN1c3RvbVJlcXVlc3Q9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5VcGxvYWQgRmlsZTwvQnV0dG9uPlxuICAgICAgICAgIDwvVXBsb2FkPlxuICAgICAgPC9kaXY+XG4gICAgICB7bG9hZGluZ0NvbXBvbmVudCgpfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJtZXNzYWdlIiwiVXBsb2FkIiwiQ2FyZCIsIlNrZWxldG9uIiwiVXBsb2FkT3V0bGluZWQiLCJheGlvcyIsIkZpbGVEaXNwbGF5Iiwic3R5bGVzIiwiRmlsZUlucHV0IiwicHJvcHMiLCJkYXRhIiwic2V0RGF0YSIsImZpbGVVcGxvYWRlZCIsInNldEZpbGVVcGxvYWRlZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25DaGFuZ2UiLCJpbmZvIiwiZmlsZSIsInN0YXR1cyIsInN1Y2Nlc3MiLCJuYW1lIiwiZXJyb3IiLCJiZWZvcmVVcGxvYWQiLCJhbGxvd2VkVHlwZXMiLCJpc0FsbG93ZWQiLCJpbmNsdWRlcyIsInR5cGUiLCJoYW5kbGVTdWJtaXQiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYWNjZXNzVG9rZW4iLCJyZXNwb25zZURhdGEiLCJsb2FkaW5nQ29tcG9uZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJhY3RpdmUiLCJ1cGRhdGVEYXRhIiwibmV3RGF0YSIsImZpbGVJbnB1dCIsImRpc2FibGVkIiwic2hvd1VwbG9hZExpc3QiLCJjdXN0b21SZXF1ZXN0IiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/SignInAndMainActions/FileInput.js\n"));

/***/ })

});