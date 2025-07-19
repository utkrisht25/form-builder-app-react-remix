import {
  useTheme
} from "/build/_shared/chunk-WH7AQ3C7.js";
import {
  createHotContext
} from "/build/_shared/chunk-P6OU7LJU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ThemeToggle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ThemeToggle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ThemeToggle.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
function ThemeToggle() {
  _s();
  const {
    theme,
    toggleTheme
  } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: toggleTheme, className: "fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300", "aria-label": "Toggle theme", children: theme === "dark" ? (
    // Sun icon for dark mode
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-yellow-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }, void 0, false, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 32,
      columnNumber: 5
    }, this)
  ) : (
    // Moon icon for light mode
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-gray-700", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }, void 0, false, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 36,
      columnNumber: 5
    }, this)
  ) }, void 0, false, {
    fileName: "app/components/ThemeToggle.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(ThemeToggle, "Q4eAjrIZ0CuRuhycs6byifK2KBk=", false, function() {
  return [useTheme];
});
_c = ThemeToggle;
var _c;
$RefreshReg$(_c, "ThemeToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ThemeToggle
};
//# sourceMappingURL=/build/_shared/chunk-HW4NUVRA.js.map
