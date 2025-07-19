import {
  FormPreview
} from "/build/_shared/chunk-IGOQTOZD.js";
import "/build/_shared/chunk-W3HJSYIN.js";
import "/build/_shared/chunk-HW4NUVRA.js";
import "/build/_shared/chunk-WH7AQ3C7.js";
import {
  useParams
} from "/build/_shared/chunk-PCEBSVQY.js";
import {
  createHotContext
} from "/build/_shared/chunk-P6OU7LJU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/form.$formId.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\form.$formId.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\form.$formId.jsx"
  );
  import.meta.hot.lastModified = "1748797210393.4897";
}
function FormRoute() {
  _s();
  const {
    formId
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormPreview, { formId, isUserMode: true }, void 0, false, {
    fileName: "app/routes/form.$formId.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(FormRoute, "vD5o/dR4M8CGQWCLPy2oL2jh/IQ=", false, function() {
  return [useParams];
});
_c = FormRoute;
var _c;
$RefreshReg$(_c, "FormRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FormRoute as default
};
//# sourceMappingURL=/build/routes/form.$formId-AKL6I6XA.js.map
