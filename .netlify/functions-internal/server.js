var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// server.js
import { createRequestHandler } from "@remix-run/netlify";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "stream";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 156,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          didError = !0, console.error(err);
        }
      }
    );
    setTimeout(abort, 5e3);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { Provider } from "react-redux";

// app/store/store.js
import { configureStore } from "@reduxjs/toolkit";

// app/store/formSlice.js
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
  title: "Untitled form",
  description: "",
  questions: []
  // Array of question objects
}, formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setInitialForm: (state, action) => {
      state.title = action.payload.title || "Untitled form", state.description = action.payload.description || "", state.questions = action.payload.fields ? action.payload.fields.map((q) => ({
        ...q,
        // name: q.id, // Ensure 'name' is set from 'id' when loading
        minLength: q.minLength !== void 0 ? q.minLength : void 0,
        maxLength: q.maxLength !== void 0 ? q.maxLength : void 0,
        pattern: q.pattern !== void 0 ? q.pattern : void 0,
        options: q.options || []
        // Ensure options array exists
      })) : [];
    },
    updateFormDetails: (state, action) => {
      let { title, description } = action.payload;
      title !== void 0 && (state.title = title), description !== void 0 && (state.description = description);
    },
    addQuestion: (state, action) => {
      state.questions.push({
        ...action.payload,
        // name: action.payload.id, // Ensure 'name' is set from 'id' when adding
        minLength: action.payload.minLength !== void 0 ? action.payload.minLength : void 0,
        maxLength: action.payload.maxLength !== void 0 ? action.payload.maxLength : void 0,
        pattern: action.payload.pattern !== void 0 ? action.payload.pattern : void 0,
        options: action.payload.options || []
        // Ensure options array is initialized for new questions
      });
    },
    removeQuestion: (state, action) => {
      let questionIdToRemove = action.payload;
      state.questions = state.questions.filter((q) => q.id !== questionIdToRemove);
    },
    updateQuestion: (state, action) => {
      let updatedQuestion = action.payload, index = state.questions.findIndex((q) => q.id === updatedQuestion.id);
      index !== -1 && (state.questions[index] = updatedQuestion);
    },
    addOption: (state, action) => {
      let { questionId, newOption } = action.payload, question = state.questions.find((q) => q.id === questionId);
      question && (question.type === "multiple-choice" || question.type === "checkboxes" || question.type === "dropdown" || question.type === "radio") && question.options.push(newOption);
    },
    removeOption: (state, action) => {
      let { questionId, optionIdToRemove } = action.payload, question = state.questions.find((q) => q.id === questionId);
      question && question.options && (question.options = question.options.filter((opt) => opt.id !== optionIdToRemove), question.options.length === 0 && (question.type === "multiple-choice" || question.type === "checkboxes" || question.type === "dropdown" || question.type === "radio") && question.options.push({ id: `opt-${Date.now()}-1`, text: "Option 1" }));
    },
    updateOption: (state, action) => {
      let { questionId, updatedOption } = action.payload, question = state.questions.find((q) => q.id === questionId);
      if (question && question.options) {
        let optionIndex = question.options.findIndex((opt) => opt.id === updatedOption.id);
        optionIndex !== -1 && (question.options[optionIndex] = updatedOption);
      }
    },
    reorderQuestions: (state, action) => {
      let { draggedIndex, droppedOverIndex } = action.payload, [draggedItem] = state.questions.splice(draggedIndex, 1);
      state.questions.splice(droppedOverIndex, 0, draggedItem);
    }
  }
}), {
  setInitialForm,
  updateFormDetails,
  addQuestion,
  removeQuestion,
  updateQuestion,
  addOption,
  removeOption,
  updateOption,
  reorderQuestions
} = formSlice.actions, formSlice_default = formSlice.reducer;

// app/store/store.js
var store = configureStore({
  reducer: {
    form: formSlice_default
    // Assign the form reducer to the 'form' key in the store
  }
  // You can add middleware here if needed (e.g., redux-thunk, redux-logger)
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myLogger),
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WBCEUSHH.css";

// app/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var ThemeContext = createContext(void 0);
function ThemeProvider({ children }) {
  let [theme, setTheme] = useState(() => typeof window < "u" && localStorage.getItem("theme") || "light");
  useEffect(() => {
    let root = window.document.documentElement;
    theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark"), localStorage.setItem("theme", theme);
  }, [theme]);
  let toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme), localStorage.setItem("theme", newTheme), newTheme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  };
  return /* @__PURE__ */ jsxDEV2(ThemeContext.Provider, { value: { theme, toggleTheme }, children }, void 0, !1, {
    fileName: "app/context/ThemeContext.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function useTheme() {
  let context = useContext(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

// app/root.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { className: "h-full", children: /* @__PURE__ */ jsxDEV3(ThemeProvider, { children: /* @__PURE__ */ jsxDEV3(Provider, { store, children: /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen bg-white dark:bg-gray-900 transition-colors", children: [
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/form-preview.$formId.jsx
var form_preview_formId_exports = {};
__export(form_preview_formId_exports, {
  default: () => FormPreviewRoute
});

// app/components/FormPreview.jsx
import { useEffect as useEffect2, useState as useState2 } from "react";
import { useNavigate, Link } from "@remix-run/react";
import { useForm, useWatch } from "react-hook-form";

// app/components/helper.jsx
var copyFormLink = (formId, setCopiedId) => {
  let formUrl = `${window.location.origin}/form/${formId}`;
  navigator.clipboard.writeText(formUrl).then(() => {
    setCopiedId(formId), setTimeout(() => {
      setCopiedId(null);
    }, 3e3);
  }).catch((err) => {
    console.error("Failed to copy form link:", err), alert("Failed to copy link to clipboard");
  });
};

// app/components/ThemeToggle.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function ThemeToggle() {
  let { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxDEV4(
    "button",
    {
      onClick: toggleTheme,
      className: "fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300",
      "aria-label": "Toggle theme",
      children: theme === "dark" ? (
        // Sun icon for dark mode
        /* @__PURE__ */ jsxDEV4("svg", { className: "w-6 h-6 text-yellow-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }, void 0, !1, {
          fileName: "app/components/ThemeToggle.jsx",
          lineNumber: 15,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/ThemeToggle.jsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      ) : (
        // Moon icon for light mode
        /* @__PURE__ */ jsxDEV4("svg", { className: "w-6 h-6 text-gray-700", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }, void 0, !1, {
          fileName: "app/components/ThemeToggle.jsx",
          lineNumber: 20,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/ThemeToggle.jsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/components/FormPreview.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var renderFormField = (field, register, errors) => {
  let { id, type, title, required, options, minLength, maxLength, pattern } = field, fieldName = id, validationRules = {
    required: required && "This field is required.",
    minLength: minLength ? { value: minLength, message: `Minimum length is ${minLength} characters.` } : void 0,
    maxLength: maxLength ? { value: maxLength, message: `Maximum length is ${maxLength} characters.` } : void 0,
    pattern: pattern ? { value: new RegExp(pattern), message: "Please match the required format." } : void 0
  };
  switch (type) {
    case "short-answer":
      return /* @__PURE__ */ jsxDEV5("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV5("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 24,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(
          "input",
          {
            type: "text",
            id: fieldName,
            ...register(fieldName, validationRules),
            className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : ""} dark:bg-gray-700 dark:text-white dark:border-none`
          },
          void 0,
          !1,
          {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 26,
            columnNumber: 11
          },
          this
        ),
        errors[fieldName] && /* @__PURE__ */ jsxDEV5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 32,
          columnNumber: 33
        }, this)
      ] }, id, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this);
    case "paragraph":
      return /* @__PURE__ */ jsxDEV5("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV5("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 39,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(
          "textarea",
          {
            id: fieldName,
            rows: "3",
            ...register(fieldName, validationRules),
            className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : ""} dark:bg-gray-700 dark:text-white dark:border-none`
          },
          void 0,
          !1,
          {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 41,
            columnNumber: 11
          },
          this
        ),
        errors[fieldName] && /* @__PURE__ */ jsxDEV5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 47,
          columnNumber: 33
        }, this)
      ] }, id, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this);
    case "multiple-choice":
    case "radio":
      return /* @__PURE__ */ jsxDEV5("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV5("label", { className: "block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 55,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        options.map((option) => /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center mb-1", children: [
          /* @__PURE__ */ jsxDEV5(
            "input",
            {
              type: "radio",
              id: `${fieldName}-${option.id}`,
              value: option.text,
              ...register(fieldName, { required: required && "Please select an option." }),
              className: "focus:ring-blue-500 h-4 w-4 text-blue-600  dark:bg-gray-700 dark:text-white rounded"
            },
            void 0,
            !1,
            {
              fileName: "app/components/FormPreview.jsx",
              lineNumber: 59,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: `${fieldName}-${option.id}`, className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: option.text }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, `${id}-${option.id}`, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)),
        errors[fieldName] && /* @__PURE__ */ jsxDEV5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 71,
          columnNumber: 33
        }, this)
      ] }, id, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this);
    case "checkboxes":
      return /* @__PURE__ */ jsxDEV5("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV5("label", { className: "block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 78,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        options.map((option) => /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center mb-1", children: [
          /* @__PURE__ */ jsxDEV5(
            "input",
            {
              type: "checkbox",
              id: `${fieldName}-${option.id}`,
              value: option.text,
              ...register(fieldName, {
                validate: required ? (value) => Array.isArray(value) && value.length > 0 || "Please select at least one option." : void 0
              }),
              className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded dark:bg-gray-700 dark:text-white"
            },
            void 0,
            !1,
            {
              fileName: "app/components/FormPreview.jsx",
              lineNumber: 82,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: `${fieldName}-${option.id}`, className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: option.text }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 94,
            columnNumber: 15
          }, this)
        ] }, `${id}-${option.id}`, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)),
        errors[fieldName] && /* @__PURE__ */ jsxDEV5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 99,
          columnNumber: 33
        }, this)
      ] }, id, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this);
    case "dropdown":
      return /* @__PURE__ */ jsxDEV5("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV5("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 106,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(
          "select",
          {
            id: fieldName,
            ...register(fieldName, validationRules),
            className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : "border-gray-300"} dark:bg-gray-700 dark:text-white dark:border-none`,
            children: [
              /* @__PURE__ */ jsxDEV5("option", { value: "", children: "Select an option" }, void 0, !1, {
                fileName: "app/components/FormPreview.jsx",
                lineNumber: 113,
                columnNumber: 13
              }, this),
              options.map((option) => /* @__PURE__ */ jsxDEV5("option", { value: option.text, children: option.text }, `${id}-${option.id}`, !1, {
                fileName: "app/components/FormPreview.jsx",
                lineNumber: 115,
                columnNumber: 15
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 108,
            columnNumber: 11
          },
          this
        ),
        errors[fieldName] && /* @__PURE__ */ jsxDEV5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 120,
          columnNumber: 33
        }, this)
      ] }, id, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 104,
        columnNumber: 9
      }, this);
    case "date":
      return /* @__PURE__ */ jsxDEV5("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV5("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 127,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(
          "input",
          {
            type: "date",
            id: fieldName,
            ...register(fieldName, validationRules),
            className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : "border-gray-300"} dark:bg-gray-700 dark:text-white dark:border-none`
          },
          void 0,
          !1,
          {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 129,
            columnNumber: 11
          },
          this
        ),
        errors[fieldName] && /* @__PURE__ */ jsxDEV5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 135,
          columnNumber: 33
        }, this)
      ] }, id, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 125,
        columnNumber: 9
      }, this);
    default:
      return null;
  }
};
function FormPreview({ formId: propFormId, isUserMode = !1 }) {
  let formId = propFormId, navigate = useNavigate(), [form, setForm] = useState2(null), [previewWidth, setPreviewWidth] = useState2("w-full lg:max-w-3xl"), [showCopyNotification, setShowCopyNotification] = useState2(!1), [progress, setProgress] = useState2(0), {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset
  } = useForm({
    mode: "onChange",
    defaultValues: {
      previewEmailField: ""
    },
    shouldUnregister: !0
    // This helps with hydration by cleaning up unmounted fields
  }), formValues = useWatch({
    control,
    defaultValue: {}
  });
  useEffect2(() => {
    if (!form)
      return;
    let allFields = [
      { name: "previewEmailField", required: !0 }
    ];
    form.fields.forEach((field) => {
      allFields.push({
        name: field.id,
        required: field.required,
        minLength: field.minLength,
        maxLength: field.maxLength,
        pattern: field.pattern,
        type: field.type
      });
    });
    let validFieldCount = 0, totalFieldCount = 0;
    allFields.forEach((field) => {
      let fieldValue = getValues(field.name), hasValue = Array.isArray(fieldValue) ? fieldValue.length > 0 : fieldValue != null && fieldValue !== "", hasError = errors[field.name] !== void 0, isValid = !0;
      if (hasValue && (field.minLength && typeof fieldValue == "string" && fieldValue.length < field.minLength && (isValid = !1), field.maxLength && typeof fieldValue == "string" && fieldValue.length > field.maxLength && (isValid = !1), field.pattern && typeof fieldValue == "string"))
        try {
          new RegExp(field.pattern).test(fieldValue) || (isValid = !1);
        } catch {
          isValid = !1;
        }
      field.required ? (totalFieldCount++, hasValue && isValid && !hasError && validFieldCount++) : hasValue && (totalFieldCount++, isValid && !hasError && validFieldCount++);
    });
    let calculatedProgress = totalFieldCount === 0 ? 0 : Math.round(validFieldCount / totalFieldCount * 100);
    errors.previewEmailField && Object.keys(errors).length > 1 && (calculatedProgress = 0), setProgress(calculatedProgress);
  }, [form, formValues, errors, getValues]), useEffect2(() => {
    if (typeof window < "u" && formId) {
      let foundForm = JSON.parse(localStorage.getItem("forms") || "[]").find((f) => f.id === formId);
      if (foundForm) {
        setForm(foundForm);
        let defaultValues = {
          previewEmailField: ""
          // Initialize email field
        };
        foundForm.fields.forEach((field) => {
          field.type === "checkboxes" ? defaultValues[field.id] = [] : defaultValues[field.id] = "";
        }), reset && reset(defaultValues);
      } else
        console.warn(`Form with ID ${formId} not found for preview.`), navigate("/");
    }
  }, [formId, navigate, reset]);
  let onSubmit = (data) => {
    console.log("Form Submitted!", data), alert("Form submitted successfully! Check console for data.");
  };
  return form ? /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-8", children: [
    /* @__PURE__ */ jsxDEV5(ThemeToggle, {}, void 0, !1, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 304,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col sm:flex-row justify-between items-center mb-6 gap-4", children: !isUserMode && /* @__PURE__ */ jsxDEV5("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ jsxDEV5(
        Link,
        {
          to: `/edit-form/${form?.id}`,
          className: "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors",
          children: "\u2190 Back to Editor"
        },
        void 0,
        !1,
        {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 308,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "button",
        {
          onClick: () => copyFormLink(form?.id, setShowCopyNotification),
          className: "relative px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center",
          children: [
            /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }, void 0, !1, {
              fileName: "app/components/FormPreview.jsx",
              lineNumber: 319,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/FormPreview.jsx",
              lineNumber: 318,
              columnNumber: 15
            }, this),
            "Copy Share Link",
            showCopyNotification && /* @__PURE__ */ jsxDEV5("span", { className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded", children: "Link copied!" }, void 0, !1, {
              fileName: "app/components/FormPreview.jsx",
              lineNumber: 323,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 314,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 307,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 305,
      columnNumber: 7
    }, this),
    "      ",
    /* @__PURE__ */ jsxDEV5("div", { className: `mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 ${previewWidth}`, children: [
      /* @__PURE__ */ jsxDEV5("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left", children: form?.title || "Loading..." }, void 0, !1, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 331,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: form.description }, void 0, !1, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 332,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "mb-8", children: [
        "          ",
        /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Form Completion" }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 336,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "text-sm font-medium text-blue-600 dark:text-blue-400", children: [
            progress,
            "%"
          ] }, void 0, !0, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 337,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 335,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "w-full bg-gray-200 rounded-full h-2.5", children: /* @__PURE__ */ jsxDEV5(
          "div",
          {
            className: `h-2.5 rounded-full transition-all duration-500 ease-out ${progress === 100 ? "bg-green-600" : progress > 70 ? "bg-blue-600" : progress > 30 ? "bg-yellow-400" : "bg-red-400"}`,
            style: { width: `${progress}%` }
          },
          void 0,
          !1,
          {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 340,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 339,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 335,
        columnNumber: 9
      }, this),
      form ? /* @__PURE__ */ jsxDEV5("form", { onSubmit: handleSubmit(onSubmit), children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "previewEmailField", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
            "Email ",
            /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500", children: "*" }, void 0, !1, {
              fileName: "app/components/FormPreview.jsx",
              lineNumber: 365,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 364,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5(
            "input",
            {
              type: "email",
              id: "previewEmailField",
              ...register("previewEmailField", {
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address."
                }
              }),
              className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.previewEmailField ? "border-red-500" : "border-gray-300"} dark:border-gray-600 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                  }`,
              placeholder: "Valid email address"
            },
            void 0,
            !1,
            {
              fileName: "app/components/FormPreview.jsx",
              lineNumber: 367,
              columnNumber: 15
            },
            this
          ),
          errors.previewEmailField && /* @__PURE__ */ jsxDEV5("p", { className: "text-red-500 text-xs mt-1", children: errors.previewEmailField.message }, void 0, !1, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 382,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 363,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "space-y-6", children: form.fields?.map((field) => /* @__PURE__ */ jsxDEV5("div", { children: renderFormField(field, register, errors) }, field.id, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 389,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 387,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5(
          "button",
          {
            type: "submit",
            className: "mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold w-full sm:w-auto",
            children: "Submit Form"
          },
          void 0,
          !1,
          {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 394,
            columnNumber: 13
          },
          this
        )
      ] }, form.id, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 361,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV5("div", { className: "text-center py-8", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto" }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 357,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("p", { className: "mt-4 text-gray-600", children: "Loading form..." }, void 0, !1, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 358,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 356,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 330,
      columnNumber: 19
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FormPreview.jsx",
    lineNumber: 303,
    columnNumber: 6
  }, this) : /* @__PURE__ */ jsxDEV5("div", { className: "text-center p-8 text-gray-600", children: "Loading form or form not found..." }, void 0, !1, {
    fileName: "app/components/FormPreview.jsx",
    lineNumber: 299,
    columnNumber: 12
  }, this);
}

// app/routes/form-preview.$formId.jsx
import { useParams as useParams2 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function FormPreviewRoute() {
  let { formId } = useParams2();
  return /* @__PURE__ */ jsxDEV6(FormPreview, { formId, isUserMode: !1 }, void 0, !1, {
    fileName: "app/routes/form-preview.$formId.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/edit-form.$formId.jsx
var edit_form_formId_exports = {};
__export(edit_form_formId_exports, {
  default: () => edit_form_formId_default
});

// app/components/FormBuilder.jsx
import { useEffect as useEffect3, useRef as useRef2 } from "react";
import { useNavigate as useNavigate2, useParams as useParams3 } from "@remix-run/react";
import { useSelector as useSelector4, useDispatch as useDispatch5 } from "react-redux";

// app/components/Question/QuestionHeader.jsx
import "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var questionTypes = [
  { id: "short-answer", label: "Short answer" },
  { id: "paragraph", label: "Paragraph" },
  { id: "multiple-choice", label: "Multiple Choice" },
  { id: "checkboxes", label: "Checkboxes" },
  { id: "dropdown", label: "Drop-down" },
  { id: "date", label: "Date" },
  { id: "radio", label: "Radio" }
];
function QuestionHeader({ title, type, onTitleChange, onTypeChange, onRemove }) {
  return /* @__PURE__ */ jsxDEV7("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex-1 mr-4", children: [
    /* @__PURE__ */ jsxDEV7(
      "input",
      {
        type: "text",
        value: title || "",
        onChange: onTitleChange,
        placeholder: "Question Title",
        className: "w-full text-lg font-semibold mb-2 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent dark:text-white transition-colors"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Question/QuestionHeader.jsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      "select",
      {
        value: type,
        onChange: onTypeChange,
        className: "text-sm px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
        children: questionTypes.map((questionType) => /* @__PURE__ */ jsxDEV7("option", { value: questionType.id, children: questionType.label }, questionType.id, !1, {
          fileName: "app/components/Question/QuestionHeader.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/Question/QuestionHeader.jsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Question/QuestionHeader.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Question/QuestionHeader.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var QuestionHeader_default = QuestionHeader;

// app/components/FieldTypes.jsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function FieldTypes({ onAddField }) {
  let handleDragStart = (e, typeId) => {
    e.dataTransfer.setData("fieldType", typeId);
  }, handleClick = (typeId) => {
    onAddField(typeId);
  };
  return /* @__PURE__ */ jsxDEV8("div", { children: questionTypes.map((type) => /* @__PURE__ */ jsxDEV8(
    "div",
    {
      draggable: !0,
      className: `bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 \r
                     text-blue-800 dark:text-blue-100 font-semibold py-2 px-4 rounded-md mb-2 \r
                     cursor-pointer transition-colors shadow-sm hover:shadow-md\r
                     flex justify-between items-center`,
      onDragStart: (e) => handleDragStart(e, type.id),
      onClick: () => handleClick(type.id),
      children: [
        /* @__PURE__ */ jsxDEV8("span", { children: type.label }, void 0, !1, {
          fileName: "app/components/FieldTypes.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5 ml-2 md:hidden",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsxDEV8(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 4v16m8-8H4"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FieldTypes.jsx",
                lineNumber: 33,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/FieldTypes.jsx",
            lineNumber: 26,
            columnNumber: 11
          },
          this
        )
      ]
    },
    type.id,
    !0,
    {
      fileName: "app/components/FieldTypes.jsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/FieldTypes.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var FieldTypes_default = FieldTypes;

// app/components/FormCanvas.jsx
import "react";
import { useSelector as useSelector3 } from "react-redux";

// app/components/QuestionComponent.jsx
import { useSelector as useSelector2, useDispatch as useDispatch3 } from "react-redux";
import { IoMoveOutline } from "react-icons/io5";
import { useState as useState3, useRef } from "react";

// app/components/Question/QuestionBody.jsx
import "react";

// app/components/Question/QuestionOptions.jsx
import { useDispatch as useDispatch2 } from "react-redux";

// app/components/OptionItem.jsx
import { useSelector, useDispatch } from "react-redux";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function OptionItem({ questionId, optionId, type }) {
  let dispatch = useDispatch(), option = useSelector((state) => {
    let question = state.form.questions.find((q) => q.id === questionId);
    return question ? question.options.find((opt) => opt.id === optionId) : null;
  });
  if (!option)
    return null;
  let handleOptionTextChange = (e) => {
    dispatch(updateOption({ questionId, updatedOption: { ...option, text: e.target.value } }));
  }, handleDeleteOption = () => {
    dispatch(removeOption({ questionId, optionIdToRemove: option.id }));
  };
  return /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center mb-2", children: [
    /* @__PURE__ */ jsxDEV9("input", { type: type === "multiple-choice" ? "radio" : "checkbox", className: "mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500", disabled: !0 }, void 0, !1, {
      fileName: "app/components/OptionItem.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9(
      "input",
      {
        type: "text",
        className: "flex-grow p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-800 mr-2",
        value: option.text,
        onChange: handleOptionTextChange,
        placeholder: `Option ${option.text}`
      },
      void 0,
      !1,
      {
        fileName: "app/components/OptionItem.jsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    ),
    type !== "dropdown" && type !== "radio" && option.text !== "Option 1" && // Added conditions to prevent deleting 'Option 1' or in dropdown/radio
    /* @__PURE__ */ jsxDEV9(
      "button",
      {
        onClick: handleDeleteOption,
        className: "text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
      },
      void 0,
      !1,
      {
        fileName: "app/components/OptionItem.jsx",
        lineNumber: 48,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/OptionItem.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
var OptionItem_default = OptionItem;

// app/components/Question/QuestionOptions.jsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function QuestionOptions({ question }) {
  let dispatch = useDispatch2();
  if (!question)
    return null;
  let { id, type, options = [] } = question, handleAddOption = () => {
    let newOption = { id: `opt-${Date.now()}-${Math.random()}`, text: `Option ${options.length + 1}` };
    dispatch(addOption({ questionId: id, newOption }));
  };
  return /* @__PURE__ */ jsxDEV10("div", { className: "space-y-2 mt-2", children: [
    options.map((option) => /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "w-4 h-4 rounded-full border border-gray-400 dark:border-gray-500 flex-shrink-0" }, void 0, !1, {
        fileName: "app/components/Question/QuestionOptions.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10(
        OptionItem_default,
        {
          questionId: id,
          optionId: option.id,
          type
        },
        void 0,
        !1,
        {
          fileName: "app/components/Question/QuestionOptions.jsx",
          lineNumber: 24,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        "button",
        {
          onClick: () => dispatch(removeOption({ questionId: id, optionIdToRemove: option.id })),
          className: "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors",
          "aria-label": "Remove option",
          children: /* @__PURE__ */ jsxDEV10("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }, void 0, !1, {
            fileName: "app/components/Question/QuestionOptions.jsx",
            lineNumber: 34,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Question/QuestionOptions.jsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Question/QuestionOptions.jsx",
          lineNumber: 29,
          columnNumber: 11
        },
        this
      )
    ] }, option.id, !0, {
      fileName: "app/components/Question/QuestionOptions.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ jsxDEV10(
      "button",
      {
        onClick: handleAddOption,
        className: "mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
        children: [
          /* @__PURE__ */ jsxDEV10("span", { className: "mr-2 text-xl", children: "+" }, void 0, !1, {
            fileName: "app/components/Question/QuestionOptions.jsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          " Add option"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Question/QuestionOptions.jsx",
        lineNumber: 39,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Question/QuestionOptions.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var QuestionOptions_default = QuestionOptions;

// app/components/Question/QuestionBody.jsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function QuestionBody({ question, onUpdate }) {
  let hasOptions = ["multiple-choice", "checkboxes", "dropdown", "radio"].includes(question.type);
  return /* @__PURE__ */ jsxDEV11("div", { className: "mb-4", children: [
    "      ",
    hasOptions ? /* @__PURE__ */ jsxDEV11(
      QuestionOptions_default,
      {
        question
      },
      void 0,
      !1,
      {
        fileName: "app/components/Question/QuestionBody.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) : (
      // Show placeholder input for other question types
      /* @__PURE__ */ jsxDEV11("div", { className: "mt-2", children: /* @__PURE__ */ jsxDEV11(
        "input",
        {
          type: question.type === "date" ? "date" : "text",
          disabled: !0,
          placeholder: question.type === "short-answer" ? "Short answer text" : question.type === "paragraph" ? "Long answer text" : "Answer",
          className: "w-full p-2 border border-gray-300  rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed transition-colors"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Question/QuestionBody.jsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Question/QuestionBody.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    )
  ] }, void 0, !0, {
    fileName: "app/components/Question/QuestionBody.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var QuestionBody_default = QuestionBody;

// app/components/Question/QuestionFooter.jsx
import { IoTrashOutline } from "react-icons/io5";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function QuestionFooter({ questionId, required, onRequiredToggle, onDeleteQuestion }) {
  return /* @__PURE__ */ jsxDEV12("div", { className: "border-t border-gray-200 pt-4 flex justify-end items-center dark:border-gray-700", children: [
    /* @__PURE__ */ jsxDEV12("label", { className: "flex items-center cursor-pointer mr-4", children: [
      /* @__PURE__ */ jsxDEV12(
        "input",
        {
          type: "checkbox",
          className: "form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 transition-colors",
          checked: required,
          onChange: onRequiredToggle
        },
        void 0,
        !1,
        {
          fileName: "app/components/Question/QuestionFooter.jsx",
          lineNumber: 7,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV12("span", { className: "ml-2 text-gray-700 dark:text-gray-300", children: "Required" }, void 0, !1, {
        fileName: "app/components/Question/QuestionFooter.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Question/QuestionFooter.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(
      "button",
      {
        onClick: () => onDeleteQuestion(questionId),
        className: "text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition-colors",
        children: /* @__PURE__ */ jsxDEV12(IoTrashOutline, { size: 22 }, void 0, !1, {
          fileName: "app/components/Question/QuestionFooter.jsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Question/QuestionFooter.jsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Question/QuestionFooter.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var QuestionFooter_default = QuestionFooter;

// app/components/Question/ValidationRules.jsx
import "react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var standardPatterns = [
  { label: "None", value: "" },
  { label: "Email Address", value: "^\\S+@\\S+\\.\\S+$" },
  { label: "10-digit Mobile Number (India)", value: "^[6-9]\\d{9}$" }
];
function ValidationRules({
  type,
  minLength,
  maxLength,
  pattern,
  onMinLengthChange,
  onMaxLengthChange,
  onPatternChange,
  onStandardPatternSelect
}) {
  let showLengthValidation = type === "short-answer" || type === "paragraph", showPatternValidation = type === "short-answer";
  return !showLengthValidation && !showPatternValidation ? null : /* @__PURE__ */ jsxDEV13("div", { className: "mt-4 p-3 bg-gray-50 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ jsxDEV13("h4", { className: "text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300", children: "Validation Rules" }, void 0, !1, {
      fileName: "app/components/Question/ValidationRules.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    showLengthValidation && /* @__PURE__ */ jsxDEV13("div", { className: "flex items-center mb-2", children: [
      /* @__PURE__ */ jsxDEV13("label", { className: "text-sm text-gray-600 dark:text-gray-400 w-24", children: "Min Length:" }, void 0, !1, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13(
        "input",
        {
          type: "number",
          className: `ml-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded \r
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white \r
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`,
          value: minLength === void 0 ? "" : minLength,
          onChange: onMinLengthChange,
          min: "0"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Question/ValidationRules.jsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13("label", { className: "text-sm text-gray-600 dark:text-gray-400 w-24 ml-4", children: "Max Length:" }, void 0, !1, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13(
        "input",
        {
          type: "number",
          className: `ml-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded \r
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white \r
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`,
          value: maxLength === void 0 ? "" : maxLength,
          onChange: onMaxLengthChange,
          min: "0"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Question/ValidationRules.jsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Question/ValidationRules.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    showPatternValidation && /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxDEV13("label", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: "Standard Patterns:" }, void 0, !1, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13(
        "select",
        {
          className: "block appearance-none w-full bg-white border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-2",
          value: pattern || "",
          onChange: onStandardPatternSelect,
          children: standardPatterns.map((p) => /* @__PURE__ */ jsxDEV13("option", { value: p.value, children: p.label }, p.label, !1, {
            fileName: "app/components/Question/ValidationRules.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/components/Question/ValidationRules.jsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13("label", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: "Custom Pattern (Regex):" }, void 0, !1, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13(
        "input",
        {
          type: "text",
          className: "flex-grow p-1 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 outline-none text-gray-700 dark:text-white bg-white dark:bg-gray-700",
          value: pattern || "",
          onChange: onPatternChange,
          placeholder: "e.g., ^\\\\S+@\\\\S+\\\\.\\\\S+$ for email"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Question/ValidationRules.jsx",
          lineNumber: 69,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Question/ValidationRules.jsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Question/ValidationRules.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var ValidationRules_default = ValidationRules;

// app/components/QuestionComponent.jsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function QuestionComponent({
  questionId,
  onDragStart,
  onDragOver,
  onDrop,
  index
}) {
  let dispatch = useDispatch3(), [isTouching, setIsTouching] = useState3(!1), touchTimeout = useRef(null), question = useSelector2((state) => state.form.questions.find((q) => q.id === questionId));
  if (!question)
    return null;
  let { id, title, type, required, options = [], minLength, maxLength, pattern } = question;
  return /* @__PURE__ */ jsxDEV14(
    "div",
    {
      className: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4 border border-gray-300 relative group",
      draggable: !0,
      onDragStart: (e) => onDragStart(e, index),
      onDragOver: (e) => onDragOver(e, index),
      onDrop: (e) => onDrop(e, index),
      onTouchStart: (e) => {
        e.preventDefault(), touchTimeout.current = setTimeout(() => {
          setIsTouching(!0);
        }, 500);
      },
      onTouchEnd: (e) => {
        e.preventDefault(), clearTimeout(touchTimeout.current), setIsTouching(!1);
      },
      onTouchMove: (e) => {
        if (isTouching) {
          e.preventDefault();
          let touch = e.touches[0], targetQuestion = document.elementsFromPoint(touch.clientX, touch.clientY).find((el) => el.hasAttribute("data-question-index"));
          if (targetQuestion) {
            let targetIndex = parseInt(targetQuestion.getAttribute("data-question-index"));
            targetIndex !== index && onDrop(e, targetIndex);
          }
        }
      },
      children: [
        /* @__PURE__ */ jsxDEV14("div", { className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full p-1 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity z-10", children: /* @__PURE__ */ jsxDEV14(IoMoveOutline, { size: 18, className: "text-gray-600" }, void 0, !1, {
          fileName: "app/components/QuestionComponent.jsx",
          lineNumber: 129,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/QuestionComponent.jsx",
          lineNumber: 128,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(
          QuestionHeader_default,
          {
            title,
            type,
            onTitleChange: (e) => {
              dispatch(updateQuestion({ ...question, title: e.target.value }));
            },
            onTypeChange: (e) => {
              let newType = e.target.value, newOptions = newType === "multiple-choice" || newType === "checkboxes" || newType === "dropdown" || newType === "radio" ? options.length > 0 ? options : [{ id: `opt-${Date.now()}-1`, text: "Option 1" }] : [], updatedQuestion = { ...question, type: newType, options: newOptions };
              newType !== "short-answer" && newType !== "paragraph" && (delete updatedQuestion.minLength, delete updatedQuestion.maxLength), newType !== "short-answer" && delete updatedQuestion.pattern, dispatch(updateQuestion(updatedQuestion));
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/QuestionComponent.jsx",
            lineNumber: 133,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV14(QuestionBody_default, { question }, void 0, !1, {
          fileName: "app/components/QuestionComponent.jsx",
          lineNumber: 142,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(
          ValidationRules_default,
          {
            type,
            minLength,
            maxLength,
            pattern,
            onMinLengthChange: (e) => {
              let value = e.target.value === "" ? void 0 : parseInt(e.target.value, 10);
              dispatch(updateQuestion({ ...question, minLength: value }));
            },
            onMaxLengthChange: (e) => {
              let value = e.target.value === "" ? void 0 : parseInt(e.target.value, 10);
              dispatch(updateQuestion({ ...question, maxLength: value }));
            },
            onPatternChange: (e) => {
              dispatch(updateQuestion({ ...question, pattern: e.target.value }));
            },
            onStandardPatternSelect: (e) => {
              let selectedPattern = e.target.value;
              dispatch(updateQuestion({ ...question, pattern: selectedPattern }));
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/QuestionComponent.jsx",
            lineNumber: 145,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV14(
          QuestionFooter_default,
          {
            questionId: id,
            required,
            onRequiredToggle: () => {
              dispatch(updateQuestion({ ...question, required: !required }));
            },
            onDeleteQuestion: () => {
              dispatch(removeQuestion(id));
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/QuestionComponent.jsx",
            lineNumber: 157,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/QuestionComponent.jsx",
      lineNumber: 117,
      columnNumber: 5
    },
    this
  );
}
var QuestionComponent_default = QuestionComponent;

// app/components/FormCanvas.jsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function FormCanvas({
  onDragOver,
  // Still needed for dropping new field types from sidebar
  onDrop,
  // Still needed for dropping new field types from sidebar
  onQuestionDragStart,
  // Passed from FormBuilder for reordering
  onQuestionDragOver,
  // Passed from FormBuilder for reordering
  onQuestionDrop
  // Passed from FormBuilder for reordering
}) {
  let questions = useSelector3((state) => state.form.questions);
  return /* @__PURE__ */ jsxDEV15(
    "div",
    {
      className: "min-h-96 border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50",
      onDragOver,
      onDrop,
      children: questions.length === 0 ? /* @__PURE__ */ jsxDEV15("p", { className: "text-gray-500 text-center py-10", children: "Drag and drop form fields here to add questions" }, void 0, !1, {
        fileName: "app/components/FormCanvas.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this) : questions.map((question, index) => /* @__PURE__ */ jsxDEV15(
        QuestionComponent_default,
        {
          questionId: question.id,
          index,
          onDragStart: onQuestionDragStart,
          onDragOver: onQuestionDragOver,
          onDrop: onQuestionDrop
        },
        question.id,
        !1,
        {
          fileName: "app/components/FormCanvas.jsx",
          lineNumber: 28,
          columnNumber: 11
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/components/FormCanvas.jsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
var FormCanvas_default = FormCanvas;

// app/data/formTemplates.js
var formTemplates = {
  contact: {
    id: "template-contact",
    title: "Contact Information",
    description: "Basic contact information form template",
    fields: [
      {
        id: "contact-name",
        title: "Full Name",
        type: "short-answer",
        required: !0
      },
      {
        id: "contact-email",
        title: "Email Address",
        type: "short-answer",
        required: !0,
        pattern: "^\\S+@\\S+\\.\\S+$"
      },
      {
        id: "contact-phone",
        title: "Phone Number",
        type: "short-answer",
        required: !0,
        pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
      },
      {
        id: "contact-address",
        title: "Address",
        type: "paragraph",
        required: !1
      },
      {
        id: "contact-preferred",
        title: "Preferred Contact Method",
        type: "radio",
        required: !0,
        options: [
          { id: "contact-pref-1", text: "Email" },
          { id: "contact-pref-2", text: "Phone" },
          { id: "contact-pref-3", text: "Text Message" }
        ]
      }
    ]
  },
  rsvp: {
    id: "template-rsvp",
    title: "RSVP Form",
    description: "Event response and details collection form",
    fields: [
      {
        id: "rsvp-name",
        title: "Your Name",
        type: "short-answer",
        required: !0
      },
      {
        id: "rsvp-email",
        title: "Email Address",
        type: "short-answer",
        required: !0,
        pattern: "^\\S+@\\S+\\.\\S+$"
      },
      {
        id: "rsvp-attendance",
        title: "Will you be attending?",
        type: "radio",
        required: !0,
        options: [
          { id: "rsvp-att-1", text: "Yes, I will attend" },
          { id: "rsvp-att-2", text: "No, I cannot attend" },
          { id: "rsvp-att-3", text: "Maybe" }
        ]
      },
      {
        id: "rsvp-guests",
        title: "Number of Additional Guests",
        type: "dropdown",
        required: !0,
        options: [
          { id: "rsvp-guest-0", text: "0" },
          { id: "rsvp-guest-1", text: "1" },
          { id: "rsvp-guest-2", text: "2" },
          { id: "rsvp-guest-3", text: "3" },
          { id: "rsvp-guest-4", text: "4" }
        ]
      },
      {
        id: "rsvp-dietary",
        title: "Dietary Restrictions",
        type: "checkboxes",
        required: !1,
        options: [
          { id: "rsvp-diet-1", text: "Vegetarian" },
          { id: "rsvp-diet-2", text: "Vegan" },
          { id: "rsvp-diet-3", text: "Gluten-free" },
          { id: "rsvp-diet-4", text: "Dairy-free" },
          { id: "rsvp-diet-5", text: "Nut allergy" }
        ]
      }
    ]
  },
  partyInvite: {
    id: "template-party",
    title: "Party Invitation Response",
    description: "Party planning and guest information collection",
    fields: [
      {
        id: "party-name",
        title: "Guest Name",
        type: "short-answer",
        required: !0
      },
      {
        id: "party-email",
        title: "Email Address",
        type: "short-answer",
        required: !0,
        pattern: "^\\S+@\\S+\\.\\S+$"
      },
      {
        id: "party-attendance",
        title: "Attendance Response",
        type: "radio",
        required: !0,
        options: [
          { id: "party-att-1", text: "Count me in!" },
          { id: "party-att-2", text: "Sorry, can't make it" }
        ]
      },
      {
        id: "party-bringing",
        title: "What are you bringing?",
        type: "dropdown",
        required: !0,
        options: [
          { id: "party-bring-1", text: "Appetizer" },
          { id: "party-bring-2", text: "Main Dish" },
          { id: "party-bring-3", text: "Dessert" },
          { id: "party-bring-4", text: "Beverages" },
          { id: "party-bring-5", text: "Nothing - I'll help in other ways!" }
        ]
      },
      {
        id: "party-activities",
        title: "Which activities interest you?",
        type: "checkboxes",
        required: !1,
        options: [
          { id: "party-act-1", text: "Dancing" },
          { id: "party-act-2", text: "Party Games" },
          { id: "party-act-3", text: "Karaoke" },
          { id: "party-act-4", text: "Board Games" }
        ]
      },
      {
        id: "party-song",
        title: "Song Request",
        type: "short-answer",
        required: !1
      }
    ]
  }
};

// app/components/FormBuilder.jsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function FormBuilder({ formId: propFormId }) {
  let formTitle = useSelector4((state) => state.form.title), formDescription = useSelector4((state) => state.form.description), questions = useSelector4((state) => state.form.questions), dispatch = useDispatch5(), navigate = useNavigate2(), params = useParams3(), currentFormId = propFormId || params.formId, dragItem = useRef2(null), dragOverItem = useRef2(null);
  useEffect3(() => {
    if (currentFormId) {
      let existingForm = JSON.parse(localStorage.getItem("forms") || "[]").find((form) => form.id === currentFormId);
      if (existingForm) {
        if (existingForm.isTemplate && existingForm.originalTemplate) {
          let template = formTemplates[existingForm.originalTemplate];
          if (template) {
            let templateQuestionIds = template.fields.map((f) => f.id), existingQuestionIds = existingForm.fields.map((f) => f.id), missingTemplateQuestions = template.fields.filter(
              (f) => !existingQuestionIds.includes(f.id)
            );
            missingTemplateQuestions.length > 0 && (existingForm.fields = [...missingTemplateQuestions, ...existingForm.fields]);
          }
        }
        dispatch(setInitialForm(existingForm));
      } else
        console.warn(`Form with ID ${currentFormId} not found. Navigating to new form.`), navigate("/form-builder");
    } else
      dispatch(setInitialForm({ title: "Untitled form", description: "", fields: [] }));
  }, [currentFormId, navigate, dispatch]);
  let handleCanvasDragOver = (e) => {
    e.preventDefault();
  }, handleCanvasDrop = (e) => {
    e.preventDefault();
    let fieldType = e.dataTransfer.getData("fieldType");
    fieldType && dispatch(addQuestion({
      id: `q-${Date.now()}-${Math.random()}`,
      title: "Untitled Question",
      type: fieldType,
      required: !1,
      options: fieldType === "multiple-choice" || fieldType === "checkboxes" || fieldType === "dropdown" || fieldType === "radio" ? [{ id: `opt-${Date.now()}-1`, text: "Option 1" }] : []
    }));
  }, handleQuestionDragStart = (e, index) => {
    dragItem.current = index, e.dataTransfer.effectAllowed = "move";
  }, handleQuestionDragOver = (e, index) => {
    e.preventDefault(), dragOverItem.current = index;
  }, handleQuestionDrop = (e, dropIndex) => {
    e.preventDefault();
    let draggedIndex = dragItem.current, droppedOverIndex = dragOverItem.current;
    draggedIndex !== null && droppedOverIndex !== null && draggedIndex !== droppedOverIndex && (dispatch(reorderQuestions({ draggedIndex, droppedOverIndex })), dragItem.current = null, dragOverItem.current = null);
  }, saveFormToStorage = () => {
    try {
      let forms = JSON.parse(localStorage.getItem("forms") || "[]"), currentForm = forms.find((f) => f.id === currentFormId), currentFormData = {
        title: formTitle,
        description: formDescription,
        fields: questions
      }, newFormId = currentFormId;
      if (currentFormId) {
        let formIndex = forms.findIndex((form) => form.id === currentFormId);
        formIndex > -1 ? (forms[formIndex] = {
          ...forms[formIndex],
          ...currentFormData,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          // If it was a template form, ensure template questions remain
          fields: currentForm?.isTemplate ? ensureTemplateQuestions(currentFormData.fields, forms[formIndex].originalTemplate) : currentFormData.fields
        }, console.log("Form updated successfully!")) : (console.warn("Form not found for update, creating new one."), newFormId = `form-${Date.now()}`, forms.push({
          ...currentFormData,
          id: newFormId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }), console.log("New form created as fallback!"));
      } else
        newFormId = `form-${Date.now()}`, forms.push({
          ...currentFormData,
          id: newFormId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }), console.log("New form saved successfully!");
      return localStorage.setItem("forms", JSON.stringify(forms)), { success: !0, formId: newFormId };
    } catch (error) {
      return console.error("Error saving form:", error), { success: !1, error: error.message };
    }
  }, handleSaveForm = () => {
    let result = saveFormToStorage();
    result.success ? navigate("/") : console.error("Failed to save form:", result.error);
  }, handlePreview = () => {
    let result = saveFormToStorage();
    result.success ? navigate(`/form-preview/${result.formId}`) : console.error("Failed to save form:", result.error);
  }, ensureTemplateQuestions = (currentFields, templateType) => {
    if (!templateType)
      return currentFields;
    let template = formTemplates[templateType];
    if (!template)
      return currentFields;
    let templateQuestionIds = template.fields.map((f) => f.id), modifiedTemplateQuestions = currentFields.filter(
      (f) => templateQuestionIds.includes(f.id)
    );
    return [...template.fields.filter(
      (f) => !modifiedTemplateQuestions.find((mf) => mf.id === f.id)
    ), ...currentFields];
  };
  return /* @__PURE__ */ jsxDEV16("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors", children: /* @__PURE__ */ jsxDEV16("div", { className: "container mx-auto px-4 py-8 dark:bg-gray-900 transition-colors", children: [
    /* @__PURE__ */ jsxDEV16(ThemeToggle, {}, void 0, !1, {
      fileName: "app/components/FormBuilder.jsx",
      lineNumber: 221,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxDEV16("div", { className: "md:col-span-1", children: /* @__PURE__ */ jsxDEV16("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors", children: [
        /* @__PURE__ */ jsxDEV16("h2", { className: "text-xl font-bold mb-4 text-gray-800 dark:text-white transition-colors", children: "Form Elements" }, void 0, !1, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 226,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4 md:hidden", children: "Tap a field type to add it to your form" }, void 0, !1, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4 hidden md:block", children: "Drag and drop fields to add them to your form" }, void 0, !1, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 230,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16(FieldTypes_default, { onAddField: (fieldType) => {
          dispatch(addQuestion({
            id: `q-${Date.now()}-${Math.random()}`,
            title: "Untitled Question",
            type: fieldType,
            required: !1,
            options: fieldType === "multiple-choice" || fieldType === "checkboxes" || fieldType === "dropdown" || fieldType === "radio" ? [{ id: `opt-${Date.now()}-1`, text: "Option 1" }] : []
          }));
        } }, void 0, !1, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 233,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/FormBuilder.jsx",
        lineNumber: 225,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/FormBuilder.jsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsxDEV16(
        "div",
        {
          className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-[600px] transition-colors",
          onDragOver: handleCanvasDragOver,
          onDrop: handleCanvasDrop,
          children: [
            /* @__PURE__ */ jsxDEV16(
              "input",
              {
                type: "text",
                value: formTitle,
                onChange: (e) => dispatch(updateFormDetails({ title: e.target.value })),
                placeholder: "Form Title",
                className: "w-full text-3xl font-bold mb-4 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent dark:text-white transition-colors"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FormBuilder.jsx",
                lineNumber: 245,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV16(
              "textarea",
              {
                value: formDescription,
                onChange: (e) => dispatch(updateFormDetails({ description: e.target.value })),
                placeholder: "Form Description",
                className: "w-full text-gray-600  mb-8 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent resize-none transition-colors dark:text-white",
                rows: "2"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FormBuilder.jsx",
                lineNumber: 254,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV16(
              FormCanvas_default,
              {
                questions,
                onQuestionDragStart: handleQuestionDragStart,
                onQuestionDragOver: handleQuestionDragOver,
                onQuestionDrop: handleQuestionDrop,
                onUpdateQuestion: (id, updates) => dispatch(updateQuestion({ id, updates })),
                onRemoveQuestion: (id) => dispatch(removeQuestion(id))
              },
              void 0,
              !1,
              {
                fileName: "app/components/FormBuilder.jsx",
                lineNumber: 263,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-end space-x-4 mt-8", children: [
              /* @__PURE__ */ jsxDEV16(
                "button",
                {
                  onClick: handleSaveForm,
                  className: "px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors",
                  children: "Save Form"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/FormBuilder.jsx",
                  lineNumber: 274,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV16(
                "button",
                {
                  onClick: handlePreview,
                  className: "px-6 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors",
                  children: "Preview"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/FormBuilder.jsx",
                  lineNumber: 280,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/FormBuilder.jsx",
              lineNumber: 273,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 239,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/FormBuilder.jsx",
        lineNumber: 238,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FormBuilder.jsx",
      lineNumber: 222,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FormBuilder.jsx",
    lineNumber: 220,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/FormBuilder.jsx",
    lineNumber: 219,
    columnNumber: 5
  }, this);
}
var FormBuilder_default = FormBuilder;

// app/routes/edit-form.$formId.jsx
import { useParams as useParams4 } from "@remix-run/react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function EditFormPage() {
  let { formId } = useParams4();
  return /* @__PURE__ */ jsxDEV17("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors", children: [
    /* @__PURE__ */ jsxDEV17(ThemeToggle, {}, void 0, !1, {
      fileName: "app/routes/edit-form.$formId.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(FormBuilder_default, { formId }, void 0, !1, {
      fileName: "app/routes/edit-form.$formId.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/edit-form.$formId.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var edit_form_formId_default = EditFormPage;

// app/routes/form-builder.jsx
var form_builder_exports = {};
__export(form_builder_exports, {
  default: () => form_builder_default
});
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function FormBuilderPage() {
  return /* @__PURE__ */ jsxDEV18("div", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ jsxDEV18(FormBuilder_default, {}, void 0, !1, {
    fileName: "app/routes/form-builder.jsx",
    lineNumber: 6,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/form-builder.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
var form_builder_default = FormBuilderPage;

// app/routes/form.$formId.jsx
var form_formId_exports = {};
__export(form_formId_exports, {
  default: () => FormRoute
});
import { useParams as useParams5 } from "@remix-run/react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function FormRoute() {
  let { formId } = useParams5();
  return /* @__PURE__ */ jsxDEV19(FormPreview, { formId, isUserMode: !0 }, void 0, !1, {
    fileName: "app/routes/form.$formId.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useState as useState4, useEffect as useEffect4 } from "react";
import { Link as Link2, useNavigate as useNavigate3 } from "@remix-run/react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function Index() {
  let [forms, setForms] = useState4([]), [copiedId, setCopiedId] = useState4(null), navigate = useNavigate3();
  useEffect4(() => {
    let storedForms = JSON.parse(localStorage.getItem("forms") || "[]");
    setForms(storedForms);
  }, []);
  let handleDeleteForm = (formId) => {
    if (window.confirm("Are you sure you want to delete this form?")) {
      let updatedForms = JSON.parse(localStorage.getItem("forms") || "[]").filter((form) => form.id !== formId);
      localStorage.setItem("forms", JSON.stringify(updatedForms)), setForms(updatedForms);
    }
  }, handleCreateNewForm = () => {
    navigate("/form-builder");
  }, handleTemplateSelect = (templateType) => {
    let template = formTemplates[templateType];
    if (!template)
      return;
    let newForm = {
      ...template,
      id: `form-${Date.now()}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isTemplate: !0,
      // Flag to identify template-based forms
      originalTemplate: templateType
      // Store the template type for future reference
    }, storedForms = JSON.parse(localStorage.getItem("forms") || "[]");
    localStorage.setItem("forms", JSON.stringify([...storedForms, newForm])), navigate(`/edit-form/${newForm.id}`);
  };
  return /* @__PURE__ */ jsxDEV20("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-800 p-8 text-gray-900 dark:text-gray-300", children: [
    /* @__PURE__ */ jsxDEV20(ThemeToggle, {}, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("header", { className: "mb-10", children: [
      /* @__PURE__ */ jsxDEV20("h1", { className: "text-4xl font-extrabold text-gray-900 dark:text-white mb-6", children: "Form Builder" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxDEV20(
          "div",
          {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow",
            onClick: handleCreateNewForm,
            children: [
              /* @__PURE__ */ jsxDEV20("div", { className: "bg-blue-600 rounded-full p-3 mb-3", children: /* @__PURE__ */ jsxDEV20(
                "svg",
                {
                  className: "w-8 h-8 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsxDEV20(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M12 4v16m8-8H4"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_index.jsx",
                      lineNumber: 75,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 68,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 67,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV20("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Blank form" }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 83,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.jsx",
            lineNumber: 63,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV20(
          "div",
          {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow",
            onClick: () => handleTemplateSelect("contact"),
            children: [
              /* @__PURE__ */ jsxDEV20("div", { className: "bg-green-200 dark:bg-green-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ jsxDEV20("span", { className: "text-green-800 dark:text-green-200 text-lg font-semibold", children: "Template Preview" }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 92,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 91,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV20("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Contact Information" }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 94,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.jsx",
            lineNumber: 87,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV20(
          "div",
          {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow",
            onClick: () => handleTemplateSelect("rsvp"),
            children: [
              /* @__PURE__ */ jsxDEV20("div", { className: "bg-purple-200 dark:bg-purple-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ jsxDEV20("span", { className: "text-purple-800 dark:text-purple-200 text-lg font-semibold", children: "Template Preview" }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 103,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 102,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV20("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "RSVP" }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 105,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.jsx",
            lineNumber: 98,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV20(
          "div",
          {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow",
            onClick: () => handleTemplateSelect("partyInvite"),
            children: [
              /* @__PURE__ */ jsxDEV20("div", { className: "bg-yellow-200 dark:bg-yellow-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ jsxDEV20("span", { className: "text-yellow-800 dark:text-yellow-200 text-lg font-semibold", children: "Template Preview" }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 114,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 113,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV20("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Party Invite" }, void 0, !1, {
                fileName: "app/routes/_index.jsx",
                lineNumber: 116,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.jsx",
            lineNumber: 109,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("section", { children: [
      /* @__PURE__ */ jsxDEV20("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Recent forms" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      forms.length === 0 ? /* @__PURE__ */ jsxDEV20("p", { className: "text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md", children: "No recent forms. Create one to see it here!" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV20("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: forms.map((form) => /* @__PURE__ */ jsxDEV20(
        "div",
        {
          className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsxDEV20("h3", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200 truncate mb-2", title: form.title, children: form.title }, void 0, !1, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 134,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV20("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-1", children: [
              "Fields: ",
              form.fields.length
            ] }, void 0, !0, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV20("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-4", children: [
              "Created: ",
              new Date(form.createdAt).toLocaleDateString()
            ] }, void 0, !0, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 138,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV20("div", { className: "flex space-x-3", children: [
              /* @__PURE__ */ jsxDEV20(
                Link2,
                {
                  to: `/edit-form/${form.id}`,
                  className: "text-blue-600 hover:underline font-medium",
                  children: "View/Edit"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 142,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV20(
                Link2,
                {
                  to: `/form-preview/${form.id}`,
                  className: "text-green-600 hover:underline font-medium",
                  children: "Preview"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 148,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV20(
                "button",
                {
                  onClick: () => copyFormLink(form.id, setCopiedId),
                  className: "relative text-purple-600 hover:underline font-medium flex items-center cursor-pointer",
                  "aria-label": "Copy form link",
                  children: [
                    /* @__PURE__ */ jsxDEV20(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 mr-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsxDEV20(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_index.jsx",
                            lineNumber: 166,
                            columnNumber: 23
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_index.jsx",
                        lineNumber: 159,
                        columnNumber: 21
                      },
                      this
                    ),
                    "Copy Link",
                    copiedId === form.id && /* @__PURE__ */ jsxDEV20("span", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded w-max", children: "Link copied!" }, void 0, !1, {
                      fileName: "app/routes/_index.jsx",
                      lineNumber: 175,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 154,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV20(
                "button",
                {
                  onClick: () => handleDeleteForm(form.id),
                  className: "relative text-red-600 hover:underline font-medium flex items-center cursor-pointer",
                  "aria-label": "Delete form",
                  children: [
                    /* @__PURE__ */ jsxDEV20(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 mr-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsxDEV20(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_index.jsx",
                            lineNumber: 192,
                            columnNumber: 23
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_index.jsx",
                        lineNumber: 185,
                        columnNumber: 21
                      },
                      this
                    ),
                    "Delete"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 180,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 141,
              columnNumber: 17
            }, this)
          ]
        },
        form.id,
        !0,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 130,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 128,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-F2XDGM6L.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-NXADKNYK.js", "/build/_shared/chunk-P6OU7LJU.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MY3TLIEZ.js", imports: ["/build/_shared/chunk-JCIKCEJC.js", "/build/_shared/chunk-H3IBRTCX.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-VGLPTUCC.js", imports: ["/build/_shared/chunk-3W5JBBFO.js", "/build/_shared/chunk-RHCCIYCA.js", "/build/_shared/chunk-FXUYPZOC.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/edit-form.$formId": { id: "routes/edit-form.$formId", parentId: "root", path: "edit-form/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/edit-form.$formId-6CIMWYU2.js", imports: ["/build/_shared/chunk-K5SWTM3Z.js", "/build/_shared/chunk-3W5JBBFO.js", "/build/_shared/chunk-FXUYPZOC.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/form-builder": { id: "routes/form-builder", parentId: "root", path: "form-builder", index: void 0, caseSensitive: void 0, module: "/build/routes/form-builder-FAX7EYUF.js", imports: ["/build/_shared/chunk-K5SWTM3Z.js", "/build/_shared/chunk-3W5JBBFO.js", "/build/_shared/chunk-FXUYPZOC.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/form-preview.$formId": { id: "routes/form-preview.$formId", parentId: "root", path: "form-preview/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/form-preview.$formId-AJNA2XX2.js", imports: ["/build/_shared/chunk-EMC6MKFJ.js", "/build/_shared/chunk-RHCCIYCA.js", "/build/_shared/chunk-FXUYPZOC.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/form.$formId": { id: "routes/form.$formId", parentId: "root", path: "form/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/form.$formId-WBKAVMZA.js", imports: ["/build/_shared/chunk-EMC6MKFJ.js", "/build/_shared/chunk-RHCCIYCA.js", "/build/_shared/chunk-FXUYPZOC.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "0fff18e2", hmr: { runtime: "/build/_shared\\chunk-P6OU7LJU.js", timestamp: 1751116302893 }, url: "/build/manifest-0FFF18E2.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/form-preview.$formId": {
    id: "routes/form-preview.$formId",
    parentId: "root",
    path: "form-preview/:formId",
    index: void 0,
    caseSensitive: void 0,
    module: form_preview_formId_exports
  },
  "routes/edit-form.$formId": {
    id: "routes/edit-form.$formId",
    parentId: "root",
    path: "edit-form/:formId",
    index: void 0,
    caseSensitive: void 0,
    module: edit_form_formId_exports
  },
  "routes/form-builder": {
    id: "routes/form-builder",
    parentId: "root",
    path: "form-builder",
    index: void 0,
    caseSensitive: void 0,
    module: form_builder_exports
  },
  "routes/form.$formId": {
    id: "routes/form.$formId",
    parentId: "root",
    path: "form/:formId",
    index: void 0,
    caseSensitive: void 0,
    module: form_formId_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};

// server.js
var handler = createRequestHandler({
  build: server_build_exports,
  mode: "development"
});
export {
  handler
};
//# sourceMappingURL=server.js.map
