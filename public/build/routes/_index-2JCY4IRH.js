import {
  formTemplates
} from "/build/_shared/chunk-3W5JBBFO.js";
import {
  copyFormLink
} from "/build/_shared/chunk-W3HJSYIN.js";
import {
  ThemeToggle
} from "/build/_shared/chunk-HW4NUVRA.js";
import "/build/_shared/chunk-WH7AQ3C7.js";
import {
  Link,
  useNavigate
} from "/build/_shared/chunk-PCEBSVQY.js";
import {
  createHotContext
} from "/build/_shared/chunk-P6OU7LJU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
function Index() {
  _s();
  const [forms, setForms] = (0, import_react.useState)([]);
  const [copiedId, setCopiedId] = (0, import_react.useState)(null);
  const navigate = useNavigate();
  (0, import_react.useEffect)(() => {
    const storedForms = JSON.parse(localStorage.getItem("forms") || "[]");
    setForms(storedForms);
  }, []);
  const handleDeleteForm = (formId) => {
    if (window.confirm("Are you sure you want to delete this form?")) {
      const storedForms = JSON.parse(localStorage.getItem("forms") || "[]");
      const updatedForms = storedForms.filter((form) => form.id !== formId);
      localStorage.setItem("forms", JSON.stringify(updatedForms));
      setForms(updatedForms);
    }
  };
  const handleCreateNewForm = () => {
    navigate("/form-builder");
  };
  const handleTemplateSelect = (templateType) => {
    const template = formTemplates[templateType];
    if (!template)
      return;
    const newForm = {
      ...template,
      id: `form-${Date.now()}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isTemplate: true,
      // Flag to identify template-based forms
      originalTemplate: templateType
      // Store the template type for future reference
    };
    const storedForms = JSON.parse(localStorage.getItem("forms") || "[]");
    localStorage.setItem("forms", JSON.stringify([...storedForms, newForm]));
    navigate(`/edit-form/${newForm.id}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-800 p-8 text-gray-900 dark:text-gray-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "mb-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-extrabold text-gray-900 dark:text-white mb-6", children: "Form Builder" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow", onClick: handleCreateNewForm, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-600 rounded-full p-3 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 4v16m8-8H4" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 84,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 83,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Blank form" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow", onClick: () => handleTemplateSelect("contact"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-200 dark:bg-green-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-800 dark:text-green-200 text-lg font-semibold", children: "Template Preview" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 93,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Contact Information" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 95,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow", onClick: () => handleTemplateSelect("rsvp"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-purple-200 dark:bg-purple-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-purple-800 dark:text-purple-200 text-lg font-semibold", children: "Template Preview" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "RSVP" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 103,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow", onClick: () => handleTemplateSelect("partyInvite"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-200 dark:bg-yellow-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-yellow-800 dark:text-yellow-200 text-lg font-semibold", children: "Template Preview" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 109,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Party Invite" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 111,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Recent forms" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      forms.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md", children: "No recent forms. Create one to see it here!" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 118,
        columnNumber: 31
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: forms.map((form) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200 truncate mb-2", title: form.title, children: form.title }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 122,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-1", children: [
          "Fields: ",
          form.fields.length
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 125,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-4", children: [
          "Created: ",
          new Date(form.createdAt).toLocaleDateString()
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 126,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/edit-form/${form.id}`, className: "text-blue-600 hover:underline font-medium", children: "View/Edit" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 130,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/form-preview/${form.id}`, className: "text-green-600 hover:underline font-medium", children: "Preview" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 133,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => copyFormLink(form.id, setCopiedId), className: "relative text-purple-600 hover:underline font-medium flex items-center cursor-pointer", "aria-label": "Copy form link", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 138,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 137,
              columnNumber: 21
            }, this),
            "Copy Link",
            copiedId === form.id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded w-max", children: "Link copied!" }, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 141,
              columnNumber: 46
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 136,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleDeleteForm(form.id), className: "relative text-red-600 hover:underline font-medium flex items-center cursor-pointer", "aria-label": "Delete form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 147,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 146,
              columnNumber: 21
            }, this),
            "Delete"
          ] }, void 0, true, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 145,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 129,
          columnNumber: 17
        }, this)
      ] }, form.id, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 121,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 120,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s(Index, "lrT50B4runGRganKQOzSMj3UklQ=", false, function() {
  return [useNavigate];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-2JCY4IRH.js.map
