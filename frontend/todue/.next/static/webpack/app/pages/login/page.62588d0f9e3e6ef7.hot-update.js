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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FileInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"(app-client)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ \"(app-client)/./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/upload */ \"(app-client)/./node_modules/antd/lib/upload/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/card */ \"(app-client)/./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/skeleton */ \"(app-client)/./node_modules/antd/lib/skeleton/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UploadOutlined */ \"(app-client)/./node_modules/@ant-design/icons/lib/icons/UploadOutlined.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _FileDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileDisplay */ \"(app-client)/./src/app/components/SignInAndMainActions/FileDisplay.js\");\n/* harmony import */ var _styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fileInput.module.css */ \"(app-client)/./src/app/styles/fileInput.module.css\");\n/* harmony import */ var _styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction FileInput(props) {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileUploaded, setFileUploaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onChange = (info)=>{\n        // setLoading(true)\n        if (info.file.status === \"done\") {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"\".concat(info.file.name, \" file uploaded successfully\"));\n            setFileUploaded(true);\n        } else if (info.file.status === \"error\") {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"\".concat(info.file.name, \" file upload failed. Try again!\"));\n        }\n    };\n    const beforeUpload = (file)=>{\n        const allowedTypes = [\n            \"application/pdf\",\n            \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\n        ];\n        const isAllowed = allowedTypes.includes(file.type);\n        if (!isAllowed) {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"You can only upload PDFs or DOCX files!\");\n        }\n        return isAllowed;\n    };\n    const handleSubmit = async (param)=>{\n        let { file, onSuccess, onError } = param;\n        setLoading(true);\n        try {\n            const formData = new FormData();\n            formData.append(\"file\", file);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://127.0.0.1:5000/api/uploadFile\", formData, {\n                headers: {\n                    Authorization: \"Bearer \".concat(props.accessToken),\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            setLoading(false); // Set loading to false after fetching data\n            const responseData = await response.data;\n            setData(responseData);\n            onSuccess();\n        } catch (error) {\n            setLoading(false); // Set loading to false in case of error\n            onError();\n        }\n    };\n    const loadingComponent = ()=>{\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    style: {\n                        width: 500,\n                        margin: \"20px auto\",\n                        borderRadius: \"8px\",\n                        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        loading: loading,\n                        active: true\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this);\n        } else if (fileUploaded && !loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FileDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data,\n                updateData: updateData,\n                accessToken: props.accessToken\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    const updateData = (newData)=>{\n        setData(newData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_fileInput_module_css__WEBPACK_IMPORTED_MODULE_5___default().fileInput),\n                children: props.disabled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_upload__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    name: \"file\",\n                    disabled: props.disabled,\n                    showUploadList: false,\n                    customRequest: handleSubmit,\n                    onChange: onChange,\n                    beforeUpload: beforeUpload,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, void 0, void 0),\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/corbinlazarone/Desktop/ToDue/frontend/todue/src/app/components/SignInAndMainActions/FileInput.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            loadingComponent()\n        ]\n    }, void 0, true);\n}\n_s(FileInput, \"uf3lMn7R/rIYOt1sykxZkStDFXc=\");\n_c = FileInput;\nvar _c;\n$RefreshReg$(_c, \"FileInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL1NpZ25JbkFuZE1haW5BY3Rpb25zL0ZpbGVJbnB1dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1o7QUFDekI7QUFDYztBQUNlO0FBRXhDLFNBQVNXLFVBQVVDLEtBQUs7O0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNa0IsV0FBVyxDQUFDQztRQUVoQixtQkFBbUI7UUFFbkIsSUFBSUEsS0FBS0MsSUFBSSxDQUFDQyxNQUFNLEtBQUssUUFBUTtZQUMvQm5CLHdEQUFPQSxDQUFDb0IsT0FBTyxDQUFDLEdBQWtCLE9BQWZILEtBQUtDLElBQUksQ0FBQ0csSUFBSSxFQUFDO1lBQ2xDUixnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJSSxLQUFLQyxJQUFJLENBQUNDLE1BQU0sS0FBSyxTQUFTO1lBQ3ZDbkIsd0RBQU9BLENBQUNzQixLQUFLLENBQUMsR0FBa0IsT0FBZkwsS0FBS0MsSUFBSSxDQUFDRyxJQUFJLEVBQUM7UUFDbEM7SUFDRjtJQUVBLE1BQU1FLGVBQWUsQ0FBQ0w7UUFDcEIsTUFBTU0sZUFBZTtZQUNuQjtZQUNBO1NBQ0Q7UUFFRCxNQUFNQyxZQUFZRCxhQUFhRSxRQUFRLENBQUNSLEtBQUtTLElBQUk7UUFDakQsSUFBSSxDQUFDRixXQUFXO1lBQ2R6Qix3REFBT0EsQ0FBQ3NCLEtBQUssQ0FBQztRQUNoQjtRQUVBLE9BQU9HO0lBQ1Q7SUFFQSxNQUFNRyxlQUFlO1lBQU8sRUFBRVYsSUFBSSxFQUFFVyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtRQUN0RGYsV0FBVztRQUNYLElBQUk7WUFDRixNQUFNZ0IsV0FBVyxJQUFJQztZQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFFBQVFmO1lBRXhCLE1BQU1nQixXQUFXLE1BQU03Qiw2Q0FBS0EsQ0FBQzhCLElBQUksQ0FDL0Isd0NBQ0FKLFVBQ0E7Z0JBQ0VLLFNBQVM7b0JBQ1BDLGVBQWUsVUFBNEIsT0FBbEI1QixNQUFNNkIsV0FBVztvQkFDMUMsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBR0Z2QixXQUFXLFFBQVEsMkNBQTJDO1lBQzlELE1BQU13QixlQUFlLE1BQU1MLFNBQVN4QixJQUFJO1lBQ3hDQyxRQUFRNEI7WUFDUlY7UUFDRixFQUFFLE9BQU9QLE9BQU87WUFDZFAsV0FBVyxRQUFRLHdDQUF3QztZQUMzRGU7UUFDRjtJQUNGO0lBRUEsTUFBTVUsbUJBQW1CO1FBQ3ZCLElBQUkxQixTQUFTO1lBQ1gscUJBQ0UsOERBQUMyQjtnQkFBSUMsV0FBV25DLDBFQUFXOzBCQUN6Qiw0RUFBQ0wscURBQUlBO29CQUNIMEMsT0FBTzt3QkFDTEMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsY0FBYzt3QkFDZEMsV0FBVztvQkFDYjs4QkFFQSw0RUFBQzdDLHlEQUFRQTt3QkFBQ1csU0FBU0E7d0JBQVNtQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O1FBSTFDLE9BQU8sSUFBSXJDLGdCQUFnQixDQUFDRSxTQUFTO1lBQ25DLHFCQUNFLDhEQUFDUixvREFBV0E7Z0JBQ1ZJLE1BQU1BO2dCQUNOd0MsWUFBWUE7Z0JBQ1paLGFBQWE3QixNQUFNNkIsV0FBVzs7Ozs7O1FBR3BDO0lBQ0Y7SUFFQSxNQUFNWSxhQUFhLENBQUNDO1FBQ2xCeEMsUUFBUXdDO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNWO2dCQUFJQyxXQUFXbkMsK0VBQWdCOzBCQUM3QkUsTUFBTTRDLFFBQVEsa0JBQ2IsOERBQUNwRCx1REFBTUE7b0JBQ0xvQixNQUFLO29CQUNMZ0MsVUFBVTVDLE1BQU00QyxRQUFRO29CQUN4QkMsZ0JBQWdCO29CQUNoQkMsZUFBZTNCO29CQUNmWixVQUFVQTtvQkFDVk8sY0FBY0E7OEJBRWQsNEVBQUN4Qix3REFBTUE7d0JBQUN5RCxvQkFBTSw4REFBQ3BELG1GQUFjQTtrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7OztZQUl2Q29DOzs7QUFHUDtHQTVHd0JoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU2lnbkluQW5kTWFpbkFjdGlvbnMvRmlsZUlucHV0LmpzPzY3NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIG1lc3NhZ2UsIFVwbG9hZCwgQ2FyZCwgU2tlbGV0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBGaWxlRGlzcGxheSBmcm9tIFwiLi9GaWxlRGlzcGxheVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZpbGVJbnB1dC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVJbnB1dChwcm9wcykge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpbGVVcGxvYWRlZCwgc2V0RmlsZVVwbG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGluZm8pID0+IHtcbiAgICBcbiAgICAvLyBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlgKTtcbiAgICAgIHNldEZpbGVVcGxvYWRlZCh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwiZXJyb3JcIikge1xuICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWQgZmFpbGVkLiBUcnkgYWdhaW4hYCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJlZm9yZVVwbG9hZCA9IChmaWxlKSA9PiB7XG4gICAgY29uc3QgYWxsb3dlZFR5cGVzID0gW1xuICAgICAgXCJhcHBsaWNhdGlvbi9wZGZcIixcbiAgICAgIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnRcIixcbiAgICBdO1xuXG4gICAgY29uc3QgaXNBbGxvd2VkID0gYWxsb3dlZFR5cGVzLmluY2x1ZGVzKGZpbGUudHlwZSk7XG4gICAgaWYgKCFpc0FsbG93ZWQpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJZb3UgY2FuIG9ubHkgdXBsb2FkIFBERnMgb3IgRE9DWCBmaWxlcyFcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQWxsb3dlZDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoeyBmaWxlLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXBpL3VwbG9hZEZpbGVcIixcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvcHMuYWNjZXNzVG9rZW59YCxcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTZXQgbG9hZGluZyB0byBmYWxzZSBhZnRlciBmZXRjaGluZyBkYXRhXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuICAgICAgc2V0RGF0YShyZXNwb25zZURhdGEpO1xuICAgICAgb25TdWNjZXNzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTZXQgbG9hZGluZyB0byBmYWxzZSBpbiBjYXNlIG9mIGVycm9yXG4gICAgICBvbkVycm9yKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRpbmdDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IGF1dG9cIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17bG9hZGluZ30gYWN0aXZlIC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChmaWxlVXBsb2FkZWQgJiYgIWxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGaWxlRGlzcGxheVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgdXBkYXRlRGF0YT17dXBkYXRlRGF0YX1cbiAgICAgICAgICBhY2Nlc3NUb2tlbj17cHJvcHMuYWNjZXNzVG9rZW59XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVEYXRhID0gKG5ld0RhdGEpID0+IHtcbiAgICBzZXREYXRhKG5ld0RhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVJbnB1dH0+XG4gICAgICAgIHtwcm9wcy5kaXNhYmxlZCAmJiAoXG4gICAgICAgICAgPFVwbG9hZFxuICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxuICAgICAgICAgICAgY3VzdG9tUmVxdWVzdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlVwbG9hZCBGaWxlPC9CdXR0b24+XG4gICAgICAgICAgPC9VcGxvYWQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsb2FkaW5nQ29tcG9uZW50KCl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIm1lc3NhZ2UiLCJVcGxvYWQiLCJDYXJkIiwiU2tlbGV0b24iLCJVcGxvYWRPdXRsaW5lZCIsImF4aW9zIiwiRmlsZURpc3BsYXkiLCJzdHlsZXMiLCJGaWxlSW5wdXQiLCJwcm9wcyIsImRhdGEiLCJzZXREYXRhIiwiZmlsZVVwbG9hZGVkIiwic2V0RmlsZVVwbG9hZGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbkNoYW5nZSIsImluZm8iLCJmaWxlIiwic3RhdHVzIiwic3VjY2VzcyIsIm5hbWUiLCJlcnJvciIsImJlZm9yZVVwbG9hZCIsImFsbG93ZWRUeXBlcyIsImlzQWxsb3dlZCIsImluY2x1ZGVzIiwidHlwZSIsImhhbmRsZVN1Ym1pdCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJhY2Nlc3NUb2tlbiIsInJlc3BvbnNlRGF0YSIsImxvYWRpbmdDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImFjdGl2ZSIsInVwZGF0ZURhdGEiLCJuZXdEYXRhIiwiZmlsZUlucHV0IiwiZGlzYWJsZWQiLCJzaG93VXBsb2FkTGlzdCIsImN1c3RvbVJlcXVlc3QiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/SignInAndMainActions/FileInput.js\n"));

/***/ })

});