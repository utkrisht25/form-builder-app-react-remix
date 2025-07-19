import {
  FormBuilder_default
} from "/build/_shared/chunk-JFPFDC5N.js";
import "/build/_shared/chunk-JCIKCEJC.js";
import "/build/_shared/chunk-3W5JBBFO.js";
import {
  ThemeToggle
} from "/build/_shared/chunk-HW4NUVRA.js";
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

// app/routes/edit-form.$formId.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\edit-form.$formId.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\edit-form.$formId.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
function EditFormPage() {
  _s();
  const {
    formId
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
      fileName: "app/routes/edit-form.$formId.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormBuilder_default, { formId }, void 0, false, {
      fileName: "app/routes/edit-form.$formId.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/edit-form.$formId.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(EditFormPage, "vD5o/dR4M8CGQWCLPy2oL2jh/IQ=", false, function() {
  return [useParams];
});
_c = EditFormPage;
var edit_form_formId_default = EditFormPage;
var _c;
$RefreshReg$(_c, "EditFormPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  edit_form_formId_default as default
};
//# sourceMappingURL=/build/routes/edit-form.$formId-F4RXPFMK.js.map
