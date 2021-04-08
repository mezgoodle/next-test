webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/default */ "./_layouts/default.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Maxim\\Desktop\\Projects\\next-test\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var __N_SSG = true;
function Blog(props) {
  return __jsx(_layouts_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, props.posts.map(function (post, idx) {
    return __jsx("div", {
      className: "col p-4 d-flex flex-column position-static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, __jsx("strong", {
      className: "d-inline-block mb-2 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 29
      }
    }, "Hello"), __jsx("h3", {
      className: "mb-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, post.title), __jsx("div", {
      className: "mb-1 text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 29
      }
    }, "13-321-2"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '/posts/' + post.slug,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 29
      }
    }, "Continue reading"), __jsx("li", {
      key: idx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '/posts/' + post.slug,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 33
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 37
      }
    }, post.title))));
  })));
}
_c = Blog;

var _c;

$RefreshReg$(_c, "Blog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvZyIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBvc3RzIiwibWFwIiwicG9zdCIsImlkeCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR2UsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2hDLFNBQ0ksTUFBQyx3REFBRDtBQUFlLFNBQUssRUFBRUEsS0FBSyxDQUFDQyxLQUE1QjtBQUFtQyxlQUFXLEVBQUVELEtBQUssQ0FBQ0UsV0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBVUMsSUFBVixFQUFnQkMsR0FBaEIsRUFBcUI7QUFDbEMsV0FDSTtBQUFLLGVBQVMsRUFBQyw0Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBUSxlQUFTLEVBQUMsa0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQkQsSUFBSSxDQUFDSixLQUEzQixDQUZKLEVBR0k7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixFQUlJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsWUFBWUksSUFBSSxDQUFDRSxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpKLEVBS0k7QUFBSSxTQUFHLEVBQUVELEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsWUFBWUQsSUFBSSxDQUFDRSxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRixJQUFJLENBQUNKLEtBQVQsQ0FESixDQURKLENBTEosQ0FESjtBQWNILEdBZkEsQ0FETCxDQUZKLENBREo7QUF1Qkg7S0F4QnVCRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhNTYzYTE4NDllMTkyZmE0MzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICdAbGF5b3V0cy9kZWZhdWx0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtnZXRDb25maWcsIGdldEFsbFBvc3RzfSBmcm9tICdAYXBpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPERlZmF1bHRMYXlvdXQgdGl0bGU9e3Byb3BzLnRpdGxlfSBkZXNjcmlwdGlvbj17cHJvcHMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7cHJvcHMucG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0LCBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wgcC00IGQtZmxleCBmbGV4LWNvbHVtbiBwb3NpdGlvbi1zdGF0aWMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPSdkLWlubGluZS1ibG9jayBtYi0yIHRleHQtcHJpbWFyeSc+SGVsbG88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi0wJz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xIHRleHQtbXV0ZWQnPjEzLTMyMS0yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0cy8nICsgcG9zdC5zbHVnfT5Db250aW51ZSByZWFkaW5nPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdHMvJyArIHBvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9EZWZhdWx0TGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGdldENvbmZpZygpXG4gICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdHM6IGFsbFBvc3RzLFxuICAgICAgICAgICAgdGl0bGU6IGNvbmZpZy50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9