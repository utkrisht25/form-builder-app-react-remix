import {
  FormPreview
} from "/build/_shared/chunk-YRSIEQOB.js";
import "/build/_shared/chunk-YMOWICR5.js";
import "/build/_shared/chunk-FXUYPZOC.js";
import "/build/_shared/chunk-H3IBRTCX.js";
import {
  useParams
} from "/build/_shared/chunk-D376OADO.js";
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

// app/routes/form-preview.$formId.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\form-preview.$formId.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\form-preview.$formId.jsx"
  );
  import.meta.hot.lastModified = "1748797210392.1704";
}
function FormPreviewRoute() {
  _s();
  const {
    formId
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormPreview, { formId, isUserMode: false }, void 0, false, {
    fileName: "app/routes/form-preview.$formId.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(FormPreviewRoute, "vD5o/dR4M8CGQWCLPy2oL2jh/IQ=", false, function() {
  return [useParams];
});
_c = FormPreviewRoute;
var _c;
$RefreshReg$(_c, "FormPreviewRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FormPreviewRoute as default
};
//# sourceMappingURL=/build/routes/form-preview.$formId-CSGEEDBO.js.map
