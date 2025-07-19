const functions = require("firebase-functions");
const { createRequestHandler } = require("@remix-run/node");

const remixHandler = createRequestHandler({
  build: require("./index.js"),
  mode: process.env.NODE_ENV,
  getLoadContext: (req, res) => ({
    // Add any context you want to pass to your Remix app
  })
});

exports.server = functions.https.onRequest((req, res) => {
  // Set CORS headers if needed
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    // Handle OPTIONS method for CORS preflight
    res.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  // Handle the request with Remix
  return remixHandler(req, res);
});
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
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
var tailwind_default = "/build/_assets/tailwind-Q4QZUFQJ.css";

// app/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx2(ThemeContext.Provider, { value: { theme, toggleTheme }, children });
}
function useTheme() {
  let context = useContext(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

// app/root.jsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx3("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx3("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ jsx3(Meta, {}),
      /* @__PURE__ */ jsx3(Links, {})
    ] }),
    /* @__PURE__ */ jsx3("body", { className: "h-full", children: /* @__PURE__ */ jsx3(ThemeProvider, { children: /* @__PURE__ */ jsx3(Provider, { store, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-900 transition-colors", children: [
      /* @__PURE__ */ jsx3(Outlet, {}),
      /* @__PURE__ */ jsx3(ScrollRestoration, {}),
      /* @__PURE__ */ jsx3(Scripts, {}),
      /* @__PURE__ */ jsx3(LiveReload, {})
    ] }) }) }) })
  ] });
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
  navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(formUrl).then(() => {
    setCopiedId(formId), setTimeout(() => {
      setCopiedId(null);
    }, 3e3);
  }).catch(() => fallbackCopy(formUrl, setCopiedId, formId)) : fallbackCopy(formUrl, setCopiedId, formId);
};
function fallbackCopy(text, setCopiedId, formId) {
  try {
    let textarea = document.createElement("textarea");
    textarea.value = text, textarea.setAttribute("readonly", ""), textarea.style.position = "absolute", textarea.style.left = "-9999px", document.body.appendChild(textarea), textarea.select(), document.execCommand("copy"), document.body.removeChild(textarea), setCopiedId(formId), setTimeout(() => setCopiedId(null), 3e3);
  } catch (err) {
    console.error("Failed to copy form link:", err), alert("Failed to copy link to clipboard");
  }
}

// app/components/ThemeToggle.jsx
import { jsx as jsx4 } from "react/jsx-runtime";
function ThemeToggle() {
  let { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsx4(
    "button",
    {
      onClick: toggleTheme,
      className: "fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300",
      "aria-label": "Toggle theme",
      children: theme === "dark" ? (
        // Sun icon for dark mode
        /* @__PURE__ */ jsx4("svg", { className: "w-6 h-6 text-yellow-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) })
      ) : (
        // Moon icon for light mode
        /* @__PURE__ */ jsx4("svg", { className: "w-6 h-6 text-gray-700", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }) })
      )
    }
  );
}

// app/components/FormPreview.jsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var renderFormField = (field, register, errors) => {
  let { id, type, title, required, options, minLength, maxLength, pattern } = field, fieldName = id, validationRules = {
    required: required && "This field is required.",
    minLength: minLength ? { value: minLength, message: `Minimum length is ${minLength} characters.` } : void 0,
    maxLength: maxLength ? { value: maxLength, message: `Maximum length is ${maxLength} characters.` } : void 0,
    pattern: pattern ? { value: new RegExp(pattern), message: "Please match the required format." } : void 0
  };
  switch (type) {
    case "short-answer":
      return /* @__PURE__ */ jsxs2("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxs2("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsx5("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx5(
          "input",
          {
            type: "text",
            id: fieldName,
            ...register(fieldName, validationRules),
            className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : ""} dark:bg-gray-700 dark:text-white dark:border-none`
          }
        ),
        errors[fieldName] && /* @__PURE__ */ jsx5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message })
      ] }, id);
    case "paragraph":
      return /* @__PURE__ */ jsxs2("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxs2("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsx5("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx5(
          "textarea",
          {
            id: fieldName,
            rows: "3",
            ...register(fieldName, validationRules),
            className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : ""} dark:bg-gray-700 dark:text-white dark:border-none`
          }
        ),
        errors[fieldName] && /* @__PURE__ */ jsx5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message })
      ] }, id);
    case "multiple-choice":
    case "radio":
      return /* @__PURE__ */ jsxs2("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxs2("label", { className: "block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsx5("span", { className: "text-red-500", children: "*" })
        ] }),
        options.map((option) => /* @__PURE__ */ jsxs2("div", { className: "flex items-center mb-1", children: [
          /* @__PURE__ */ jsx5(
            "input",
            {
              type: "radio",
              id: `${fieldName}-${option.id}`,
              value: option.text,
              ...register(fieldName, { required: required && "Please select an option." }),
              className: "focus:ring-blue-500 h-4 w-4 text-blue-600  dark:bg-gray-700 dark:text-white rounded"
            }
          ),
          /* @__PURE__ */ jsx5("label", { htmlFor: `${fieldName}-${option.id}`, className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: option.text })
        ] }, `${id}-${option.id}`)),
        errors[fieldName] && /* @__PURE__ */ jsx5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message })
      ] }, id);
    case "checkboxes":
      return /* @__PURE__ */ jsxs2("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxs2("label", { className: "block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsx5("span", { className: "text-red-500", children: "*" })
        ] }),
        options.map((option) => /* @__PURE__ */ jsxs2("div", { className: "flex items-center mb-1", children: [
          /* @__PURE__ */ jsx5(
            "input",
            {
              type: "checkbox",
              id: `${fieldName}-${option.id}`,
              value: option.text,
              ...register(fieldName, {
                validate: required ? (value) => Array.isArray(value) && value.length > 0 || "Please select at least one option." : void 0
              }),
              className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded dark:bg-gray-700 dark:text-white"
            }
          ),
          /* @__PURE__ */ jsx5("label", { htmlFor: `${fieldName}-${option.id}`, className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: option.text })
        ] }, `${id}-${option.id}`)),
        errors[fieldName] && /* @__PURE__ */ jsx5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message })
      ] }, id);
    case "dropdown":
      return /* @__PURE__ */ jsxs2("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxs2("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsx5("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsxs2(
          "select",
          {
            id: fieldName,
            ...register(fieldName, validationRules),
            className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : "border-gray-300"} dark:bg-gray-700 dark:text-white dark:border-none`,
            children: [
              /* @__PURE__ */ jsx5("option", { value: "", children: "Select an option" }),
              options.map((option) => /* @__PURE__ */ jsx5("option", { value: option.text, children: option.text }, `${id}-${option.id}`))
            ]
          }
        ),
        errors[fieldName] && /* @__PURE__ */ jsx5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message })
      ] }, id);
    case "date":
      return /* @__PURE__ */ jsxs2("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxs2("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ jsx5("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx5(
          "input",
          {
            type: "date",
            id: fieldName,
            ...register(fieldName, validationRules),
            className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : "border-gray-300"} dark:bg-gray-700 dark:text-white dark:border-none`
          }
        ),
        errors[fieldName] && /* @__PURE__ */ jsx5("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message })
      ] }, id);
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
  return form ? /* @__PURE__ */ jsxs2("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-8", children: [
    /* @__PURE__ */ jsx5(ThemeToggle, {}),
    /* @__PURE__ */ jsx5("div", { className: "flex flex-col sm:flex-row justify-between items-center mb-6 gap-4", children: !isUserMode && /* @__PURE__ */ jsxs2("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ jsx5(
        Link,
        {
          to: `/edit-form/${form?.id}`,
          className: "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors",
          children: "\u2190 Back to Editor"
        }
      ),
      /* @__PURE__ */ jsxs2(
        "button",
        {
          onClick: () => copyFormLink(form?.id, setShowCopyNotification),
          className: "relative px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center",
          children: [
            /* @__PURE__ */ jsx5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) }),
            "Copy Share Link",
            showCopyNotification && /* @__PURE__ */ jsx5("span", { className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded", children: "Link copied!" })
          ]
        }
      )
    ] }) }),
    "      ",
    /* @__PURE__ */ jsxs2("div", { className: `mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 ${previewWidth}`, children: [
      /* @__PURE__ */ jsx5("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left", children: form?.title || "Loading..." }),
      /* @__PURE__ */ jsx5("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: form.description }),
      /* @__PURE__ */ jsxs2("div", { className: "mb-8", children: [
        "          ",
        /* @__PURE__ */ jsxs2("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsx5("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Form Completion" }),
          /* @__PURE__ */ jsxs2("span", { className: "text-sm font-medium text-blue-600 dark:text-blue-400", children: [
            progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx5("div", { className: "w-full bg-gray-200 rounded-full h-2.5", children: /* @__PURE__ */ jsx5(
          "div",
          {
            className: `h-2.5 rounded-full transition-all duration-500 ease-out ${progress === 100 ? "bg-green-600" : progress > 70 ? "bg-blue-600" : progress > 30 ? "bg-yellow-400" : "bg-red-400"}`,
            style: { width: `${progress}%` }
          }
        ) })
      ] }),
      form ? /* @__PURE__ */ jsxs2("form", { onSubmit: handleSubmit(onSubmit), children: [
        /* @__PURE__ */ jsxs2("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxs2("label", { htmlFor: "previewEmailField", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
            "Email ",
            /* @__PURE__ */ jsx5("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsx5(
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
            }
          ),
          errors.previewEmailField && /* @__PURE__ */ jsx5("p", { className: "text-red-500 text-xs mt-1", children: errors.previewEmailField.message })
        ] }),
        /* @__PURE__ */ jsx5("div", { className: "space-y-6", children: form.fields?.map((field) => /* @__PURE__ */ jsx5("div", { children: renderFormField(field, register, errors) }, field.id)) }),
        /* @__PURE__ */ jsx5(
          "button",
          {
            type: "submit",
            className: "mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold w-full sm:w-auto",
            children: "Submit Form"
          }
        )
      ] }, form.id) : /* @__PURE__ */ jsxs2("div", { className: "text-center py-8", children: [
        /* @__PURE__ */ jsx5("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto" }),
        /* @__PURE__ */ jsx5("p", { className: "mt-4 text-gray-600", children: "Loading form..." })
      ] })
    ] })
  ] }) : /* @__PURE__ */ jsx5("div", { className: "text-center p-8 text-gray-600", children: "Loading form or form not found..." });
}

// app/routes/form-preview.$formId.jsx
import { useParams as useParams2 } from "@remix-run/react";
import { jsx as jsx6 } from "react/jsx-runtime";
function FormPreviewRoute() {
  let { formId } = useParams2();
  return /* @__PURE__ */ jsx6(FormPreview, { formId, isUserMode: !1 });
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
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx7("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs3("div", { className: "flex-1 mr-4", children: [
    /* @__PURE__ */ jsx7(
      "input",
      {
        type: "text",
        value: title || "",
        onChange: onTitleChange,
        placeholder: "Question Title",
        className: "w-full text-lg font-semibold mb-2 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent dark:text-white transition-colors"
      }
    ),
    /* @__PURE__ */ jsx7(
      "select",
      {
        value: type,
        onChange: onTypeChange,
        className: "text-sm px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
        children: questionTypes.map((questionType) => /* @__PURE__ */ jsx7("option", { value: questionType.id, children: questionType.label }, questionType.id))
      }
    )
  ] }) });
}
var QuestionHeader_default = QuestionHeader;

// app/components/FieldTypes.jsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function FieldTypes({ onAddField }) {
  let handleDragStart = (e, typeId) => {
    e.dataTransfer.setData("fieldType", typeId);
  }, handleClick = (typeId) => {
    onAddField(typeId);
  };
  return /* @__PURE__ */ jsx8("div", { children: questionTypes.map((type) => /* @__PURE__ */ jsxs4(
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
        /* @__PURE__ */ jsx8("span", { children: type.label }),
        /* @__PURE__ */ jsx8(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5 ml-2 md:hidden",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx8(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 4v16m8-8H4"
              }
            )
          }
        )
      ]
    },
    type.id
  )) });
}
var FieldTypes_default = FieldTypes;

// app/components/FormCanvas.jsx
import "react";
import { useSelector as useSelector3, useDispatch as useDispatch4 } from "react-redux";

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
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs5("div", { className: "flex items-center mb-2", children: [
    /* @__PURE__ */ jsx9("input", { type: type === "multiple-choice" ? "radio" : "checkbox", className: "mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500", disabled: !0 }),
    /* @__PURE__ */ jsx9(
      "input",
      {
        type: "text",
        className: "flex-grow p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-800 mr-2",
        value: option.text,
        onChange: handleOptionTextChange,
        placeholder: `Option ${option.text}`
      }
    ),
    type !== "dropdown" && type !== "radio" && option.text !== "Option 1" && // Added conditions to prevent deleting 'Option 1' or in dropdown/radio
    /* @__PURE__ */ jsx9(
      "button",
      {
        onClick: handleDeleteOption,
        className: "text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
      }
    )
  ] });
}
var OptionItem_default = OptionItem;

// app/components/Question/QuestionOptions.jsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function QuestionOptions({ question }) {
  let dispatch = useDispatch2();
  if (!question)
    return null;
  let { id, type, options = [] } = question, handleAddOption = () => {
    let newOption = { id: `opt-${Date.now()}-${Math.random()}`, text: `Option ${options.length + 1}` };
    dispatch(addOption({ questionId: id, newOption }));
  };
  return /* @__PURE__ */ jsxs6("div", { className: "space-y-2 mt-2", children: [
    options.map((option) => /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx10("div", { className: "w-4 h-4 rounded-full border border-gray-400 dark:border-gray-500 flex-shrink-0" }),
      /* @__PURE__ */ jsx10(
        OptionItem_default,
        {
          questionId: id,
          optionId: option.id,
          type
        }
      ),
      /* @__PURE__ */ jsx10(
        "button",
        {
          onClick: () => dispatch(removeOption({ questionId: id, optionIdToRemove: option.id })),
          className: "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors",
          "aria-label": "Remove option",
          children: /* @__PURE__ */ jsx10("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx10("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) })
        }
      )
    ] }, option.id)),
    /* @__PURE__ */ jsxs6(
      "button",
      {
        onClick: handleAddOption,
        className: "mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
        children: [
          /* @__PURE__ */ jsx10("span", { className: "mr-2 text-xl", children: "+" }),
          " Add option"
        ]
      }
    )
  ] });
}
var QuestionOptions_default = QuestionOptions;

// app/components/Question/QuestionBody.jsx
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
function QuestionBody({ question, onUpdate }) {
  let hasOptions = ["multiple-choice", "checkboxes", "dropdown", "radio"].includes(question.type);
  return /* @__PURE__ */ jsxs7("div", { className: "mb-4", children: [
    "      ",
    hasOptions ? /* @__PURE__ */ jsx11(
      QuestionOptions_default,
      {
        question
      }
    ) : (
      // Show placeholder input for other question types
      /* @__PURE__ */ jsx11("div", { className: "mt-2", children: /* @__PURE__ */ jsx11(
        "input",
        {
          type: question.type === "date" ? "date" : "text",
          disabled: !0,
          placeholder: question.type === "short-answer" ? "Short answer text" : question.type === "paragraph" ? "Long answer text" : "Answer",
          className: "w-full p-2 border border-gray-300  rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed transition-colors"
        }
      ) })
    )
  ] });
}
var QuestionBody_default = QuestionBody;

// app/components/Question/QuestionFooter.jsx
import { IoTrashOutline } from "react-icons/io5";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
function QuestionFooter({ questionId, required, onRequiredToggle, onDeleteQuestion }) {
  return /* @__PURE__ */ jsxs8("div", { className: "border-t border-gray-200 pt-4 flex justify-end items-center dark:border-gray-700", children: [
    /* @__PURE__ */ jsxs8("label", { className: "flex items-center cursor-pointer mr-4", children: [
      /* @__PURE__ */ jsx12(
        "input",
        {
          type: "checkbox",
          className: "form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 transition-colors",
          checked: required,
          onChange: onRequiredToggle
        }
      ),
      /* @__PURE__ */ jsx12("span", { className: "ml-2 text-gray-700 dark:text-gray-300", children: "Required" })
    ] }),
    /* @__PURE__ */ jsx12(
      "button",
      {
        onClick: () => onDeleteQuestion(questionId),
        className: "text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition-colors",
        children: /* @__PURE__ */ jsx12(IoTrashOutline, { size: 22 })
      }
    )
  ] });
}
var QuestionFooter_default = QuestionFooter;

// app/components/Question/ValidationRules.jsx
import "react";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
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
  return !showLengthValidation && !showPatternValidation ? null : /* @__PURE__ */ jsxs9("div", { className: "mt-4 p-3 bg-gray-50 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ jsx13("h4", { className: "text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300", children: "Validation Rules" }),
    showLengthValidation && /* @__PURE__ */ jsxs9("div", { className: "flex items-center mb-2", children: [
      /* @__PURE__ */ jsx13("label", { className: "text-sm text-gray-600 dark:text-gray-400 w-24", children: "Min Length:" }),
      /* @__PURE__ */ jsx13(
        "input",
        {
          type: "number",
          className: `ml-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded \r
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white \r
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`,
          value: minLength === void 0 ? "" : minLength,
          onChange: onMinLengthChange,
          min: "0"
        }
      ),
      /* @__PURE__ */ jsx13("label", { className: "text-sm text-gray-600 dark:text-gray-400 w-24 ml-4", children: "Max Length:" }),
      /* @__PURE__ */ jsx13(
        "input",
        {
          type: "number",
          className: `ml-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded \r
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white \r
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`,
          value: maxLength === void 0 ? "" : maxLength,
          onChange: onMaxLengthChange,
          min: "0"
        }
      )
    ] }),
    showPatternValidation && /* @__PURE__ */ jsxs9("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx13("label", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: "Standard Patterns:" }),
      /* @__PURE__ */ jsx13(
        "select",
        {
          className: "block appearance-none w-full bg-white border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-2",
          value: pattern || "",
          onChange: onStandardPatternSelect,
          children: standardPatterns.map((p) => /* @__PURE__ */ jsx13("option", { value: p.value, children: p.label }, p.label))
        }
      ),
      /* @__PURE__ */ jsx13("label", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: "Custom Pattern (Regex):" }),
      /* @__PURE__ */ jsx13(
        "input",
        {
          type: "text",
          className: "flex-grow p-1 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 outline-none text-gray-700 dark:text-white bg-white dark:bg-gray-700",
          value: pattern || "",
          onChange: onPatternChange,
          placeholder: "e.g., ^\\\\S+@\\\\S+\\\\.\\\\S+$ for email"
        }
      )
    ] })
  ] });
}
var ValidationRules_default = ValidationRules;

// app/components/QuestionComponent.jsx
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
function QuestionComponent({
  questionId,
  onDragStart,
  onDragOver,
  onDrop,
  index,
  onMoveUp,
  onMoveDown,
  totalQuestions
}) {
  let dispatch = useDispatch3(), [isTouching, setIsTouching] = useState3(!1), touchTimeout = useRef(null), question = useSelector2((state) => state.form.questions.find((q) => q.id === questionId));
  if (!question)
    return null;
  let { id, title, type, required, options = [], minLength, maxLength, pattern } = question, handleTouchStart = (e) => {
    e.preventDefault(), touchTimeout.current = setTimeout(() => {
      setIsTouching(!0);
    }, 500);
  }, handleTouchEnd = (e) => {
    e.preventDefault(), clearTimeout(touchTimeout.current), setIsTouching(!1);
  }, handleTouchMove = (e) => {
    if (isTouching) {
      e.preventDefault();
      let touch = e.touches[0], targetQuestion = document.elementsFromPoint(touch.clientX, touch.clientY).find((el) => el.hasAttribute("data-question-index"));
      if (targetQuestion) {
        let targetIndex = parseInt(targetQuestion.getAttribute("data-question-index"));
        targetIndex !== index && onDrop(e, targetIndex);
      }
    }
  }, handleTitleChange = (e) => {
    dispatch(updateQuestion({ ...question, title: e.target.value }));
  }, handleTypeChange = (e) => {
    let newType = e.target.value, newOptions = newType === "multiple-choice" || newType === "checkboxes" || newType === "dropdown" || newType === "radio" ? options.length > 0 ? options : [{ id: `opt-${Date.now()}-1`, text: "Option 1" }] : [], updatedQuestion = { ...question, type: newType, options: newOptions };
    newType !== "short-answer" && newType !== "paragraph" && (delete updatedQuestion.minLength, delete updatedQuestion.maxLength), newType !== "short-answer" && delete updatedQuestion.pattern, dispatch(updateQuestion(updatedQuestion));
  }, handleRequiredToggle = () => {
    dispatch(updateQuestion({ ...question, required: !required }));
  }, handleDeleteQuestion = () => {
    dispatch(removeQuestion(id));
  }, handleMinLengthChange = (e) => {
    let value = e.target.value === "" ? void 0 : parseInt(e.target.value, 10);
    dispatch(updateQuestion({ ...question, minLength: value }));
  }, handleMaxLengthChange = (e) => {
    let value = e.target.value === "" ? void 0 : parseInt(e.target.value, 10);
    dispatch(updateQuestion({ ...question, maxLength: value }));
  }, handlePatternChange = (e) => {
    dispatch(updateQuestion({ ...question, pattern: e.target.value }));
  }, handleStandardPatternSelect = (e) => {
    let selectedPattern = e.target.value;
    dispatch(updateQuestion({ ...question, pattern: selectedPattern }));
  };
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      className: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4 border border-gray-300 relative group",
      draggable: !0,
      onDragStart: (e) => onDragStart(e, index),
      onDragOver: (e) => onDragOver(e, index),
      onDrop: (e) => onDrop(e, index),
      children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex flex-col gap-1 absolute right-2 top-2 md:hidden z-20", children: [
          /* @__PURE__ */ jsx14(
            "button",
            {
              "aria-label": "Move up",
              onClick: () => onMoveUp(index),
              disabled: index === 0,
              className: "p-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50",
              children: "\u25B2"
            }
          ),
          /* @__PURE__ */ jsx14(
            "button",
            {
              "aria-label": "Move down",
              onClick: () => onMoveDown(index),
              disabled: index === totalQuestions - 1,
              className: "p-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50",
              children: "\u25BC"
            }
          )
        ] }),
        /* @__PURE__ */ jsx14(
          "div",
          {
            className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full p-1 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity z-10 md:block hidden",
            onTouchStart: handleTouchStart,
            onTouchEnd: handleTouchEnd,
            onTouchMove: handleTouchMove,
            children: /* @__PURE__ */ jsx14(IoMoveOutline, { size: 18, className: "text-gray-600" })
          }
        ),
        /* @__PURE__ */ jsx14(
          QuestionHeader_default,
          {
            title,
            type,
            onTitleChange: handleTitleChange,
            onTypeChange: handleTypeChange
          }
        ),
        /* @__PURE__ */ jsx14(QuestionBody_default, { question }),
        /* @__PURE__ */ jsx14(
          ValidationRules_default,
          {
            type,
            minLength,
            maxLength,
            pattern,
            onMinLengthChange: handleMinLengthChange,
            onMaxLengthChange: handleMaxLengthChange,
            onPatternChange: handlePatternChange,
            onStandardPatternSelect: handleStandardPatternSelect
          }
        ),
        /* @__PURE__ */ jsx14(
          QuestionFooter_default,
          {
            questionId: id,
            required,
            onRequiredToggle: handleRequiredToggle,
            onDeleteQuestion: handleDeleteQuestion
          }
        )
      ]
    }
  );
}
var QuestionComponent_default = QuestionComponent;

// app/components/FormCanvas.jsx
import { jsx as jsx15 } from "react/jsx-runtime";
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
  let questions = useSelector3((state) => state.form.questions), dispatch = useDispatch4(), handleMoveUp = (idx) => {
    idx > 0 && dispatch(reorderQuestions({ draggedIndex: idx, droppedOverIndex: idx - 1 }));
  }, handleMoveDown = (idx) => {
    idx < questions.length - 1 && dispatch(reorderQuestions({ draggedIndex: idx, droppedOverIndex: idx + 1 }));
  };
  return /* @__PURE__ */ jsx15(
    "div",
    {
      className: "min-h-96 border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50",
      onDragOver,
      onDrop,
      children: questions.length === 0 ? /* @__PURE__ */ jsx15("p", { className: "text-gray-500 text-center py-10", children: "Drag and drop form fields here to add questions" }) : questions.map((question, index) => /* @__PURE__ */ jsx15(
        QuestionComponent_default,
        {
          questionId: question.id,
          index,
          onDragStart: onQuestionDragStart,
          onDragOver: onQuestionDragOver,
          onDrop: onQuestionDrop,
          onMoveUp: handleMoveUp,
          onMoveDown: handleMoveDown,
          totalQuestions: questions.length
        },
        question.id
      ))
    }
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
import { jsx as jsx16, jsxs as jsxs11 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx16("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors", children: /* @__PURE__ */ jsxs11("div", { className: "container mx-auto px-4 py-8 dark:bg-gray-900 transition-colors", children: [
    /* @__PURE__ */ jsx16(ThemeToggle, {}),
    /* @__PURE__ */ jsxs11("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsx16("div", { className: "md:col-span-1", children: /* @__PURE__ */ jsxs11("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors", children: [
        /* @__PURE__ */ jsx16("h2", { className: "text-xl font-bold mb-4 text-gray-800 dark:text-white transition-colors", children: "Form Elements" }),
        /* @__PURE__ */ jsx16("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4 md:hidden", children: "Tap a field type to add it to your form" }),
        /* @__PURE__ */ jsx16("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4 hidden md:block", children: "Drag and drop fields to add them to your form" }),
        /* @__PURE__ */ jsx16(FieldTypes_default, { onAddField: (fieldType) => {
          dispatch(addQuestion({
            id: `q-${Date.now()}-${Math.random()}`,
            title: "Untitled Question",
            type: fieldType,
            required: !1,
            options: fieldType === "multiple-choice" || fieldType === "checkboxes" || fieldType === "dropdown" || fieldType === "radio" ? [{ id: `opt-${Date.now()}-1`, text: "Option 1" }] : []
          }));
        } })
      ] }) }),
      /* @__PURE__ */ jsx16("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsxs11(
        "div",
        {
          className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-[600px] transition-colors",
          onDragOver: handleCanvasDragOver,
          onDrop: handleCanvasDrop,
          children: [
            /* @__PURE__ */ jsx16(
              "input",
              {
                type: "text",
                value: formTitle,
                onChange: (e) => dispatch(updateFormDetails({ title: e.target.value })),
                placeholder: "Form Title",
                className: "w-full text-3xl font-bold mb-4 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent dark:text-white transition-colors"
              }
            ),
            /* @__PURE__ */ jsx16(
              "textarea",
              {
                value: formDescription,
                onChange: (e) => dispatch(updateFormDetails({ description: e.target.value })),
                placeholder: "Form Description",
                className: "w-full text-gray-600  mb-8 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent resize-none transition-colors dark:text-white",
                rows: "2"
              }
            ),
            /* @__PURE__ */ jsx16(
              FormCanvas_default,
              {
                questions,
                onQuestionDragStart: handleQuestionDragStart,
                onQuestionDragOver: handleQuestionDragOver,
                onQuestionDrop: handleQuestionDrop,
                onUpdateQuestion: (id, updates) => dispatch(updateQuestion({ id, updates })),
                onRemoveQuestion: (id) => dispatch(removeQuestion(id))
              }
            ),
            /* @__PURE__ */ jsxs11("div", { className: "flex justify-end space-x-4 mt-8", children: [
              /* @__PURE__ */ jsx16(
                "button",
                {
                  onClick: handleSaveForm,
                  className: "px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors",
                  children: "Save Form"
                }
              ),
              /* @__PURE__ */ jsx16(
                "button",
                {
                  onClick: handlePreview,
                  className: "px-6 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors",
                  children: "Preview"
                }
              )
            ] })
          ]
        }
      ) })
    ] })
  ] }) });
}
var FormBuilder_default = FormBuilder;

// app/routes/edit-form.$formId.jsx
import { useParams as useParams4 } from "@remix-run/react";
import { jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
function EditFormPage() {
  let { formId } = useParams4();
  return /* @__PURE__ */ jsxs12("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors", children: [
    /* @__PURE__ */ jsx17(ThemeToggle, {}),
    /* @__PURE__ */ jsx17(FormBuilder_default, { formId })
  ] });
}
var edit_form_formId_default = EditFormPage;

// app/routes/form-builder.jsx
var form_builder_exports = {};
__export(form_builder_exports, {
  default: () => form_builder_default
});
import { jsx as jsx18 } from "react/jsx-runtime";
function FormBuilderPage() {
  return /* @__PURE__ */ jsx18("div", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ jsx18(FormBuilder_default, {}) });
}
var form_builder_default = FormBuilderPage;

// app/routes/form.$formId.jsx
var form_formId_exports = {};
__export(form_formId_exports, {
  default: () => FormRoute
});
import { useParams as useParams5 } from "@remix-run/react";
import { jsx as jsx19 } from "react/jsx-runtime";
function FormRoute() {
  let { formId } = useParams5();
  return /* @__PURE__ */ jsx19(FormPreview, { formId, isUserMode: !0 });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useState as useState4, useEffect as useEffect4 } from "react";
import { Link as Link2, useNavigate as useNavigate3 } from "@remix-run/react";
import { jsx as jsx20, jsxs as jsxs13 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs13("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-800 p-8 text-gray-900 dark:text-gray-300", children: [
    /* @__PURE__ */ jsx20(ThemeToggle, {}),
    /* @__PURE__ */ jsxs13("header", { className: "mb-10", children: [
      /* @__PURE__ */ jsx20("h1", { className: "text-4xl font-extrabold text-gray-900 dark:text-white mb-6", children: "Form Builder" }),
      /* @__PURE__ */ jsxs13("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs13(
          "div",
          {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow",
            onClick: handleCreateNewForm,
            children: [
              /* @__PURE__ */ jsx20("div", { className: "bg-blue-600 rounded-full p-3 mb-3", children: /* @__PURE__ */ jsx20(
                "svg",
                {
                  className: "w-8 h-8 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx20(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M12 4v16m8-8H4"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsx20("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Blank form" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs13(
          "div",
          {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow",
            onClick: () => handleTemplateSelect("contact"),
            children: [
              /* @__PURE__ */ jsx20("div", { className: "bg-green-200 dark:bg-green-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ jsx20("span", { className: "text-green-800 dark:text-green-200 text-lg font-semibold", children: "Template Preview" }) }),
              /* @__PURE__ */ jsx20("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Contact Information" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs13(
          "div",
          {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow",
            onClick: () => handleTemplateSelect("rsvp"),
            children: [
              /* @__PURE__ */ jsx20("div", { className: "bg-purple-200 dark:bg-purple-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ jsx20("span", { className: "text-purple-800 dark:text-purple-200 text-lg font-semibold", children: "Template Preview" }) }),
              /* @__PURE__ */ jsx20("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "RSVP" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs13(
          "div",
          {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow",
            onClick: () => handleTemplateSelect("partyInvite"),
            children: [
              /* @__PURE__ */ jsx20("div", { className: "bg-yellow-200 dark:bg-yellow-800 rounded-full p-3 mb-3", children: /* @__PURE__ */ jsx20("span", { className: "text-yellow-800 dark:text-yellow-200 text-lg font-semibold", children: "Template Preview" }) }),
              /* @__PURE__ */ jsx20("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200", children: "Party Invite" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs13("section", { children: [
      /* @__PURE__ */ jsx20("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Recent forms" }),
      forms.length === 0 ? /* @__PURE__ */ jsx20("p", { className: "text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md", children: "No recent forms. Create one to see it here!" }) : /* @__PURE__ */ jsx20("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: forms.map((form) => /* @__PURE__ */ jsxs13(
        "div",
        {
          className: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsx20("h3", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200 truncate mb-2", title: form.title, children: form.title }),
            /* @__PURE__ */ jsxs13("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-1", children: [
              "Fields: ",
              form.fields.length
            ] }),
            /* @__PURE__ */ jsxs13("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-4", children: [
              "Created: ",
              new Date(form.createdAt).toLocaleDateString()
            ] }),
            /* @__PURE__ */ jsxs13("div", { className: "flex space-x-3", children: [
              /* @__PURE__ */ jsx20(
                Link2,
                {
                  to: `/edit-form/${form.id}`,
                  className: "text-blue-600 hover:underline font-medium",
                  children: "View/Edit"
                }
              ),
              /* @__PURE__ */ jsx20(
                Link2,
                {
                  to: `/form-preview/${form.id}`,
                  className: "text-green-600 hover:underline font-medium",
                  children: "Preview"
                }
              ),
              /* @__PURE__ */ jsxs13(
                "button",
                {
                  onClick: () => copyFormLink(form.id, setCopiedId),
                  className: "relative text-purple-600 hover:underline font-medium flex items-center cursor-pointer",
                  "aria-label": "Copy form link",
                  children: [
                    /* @__PURE__ */ jsx20(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 mr-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsx20(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          }
                        )
                      }
                    ),
                    "Copy Link",
                    copiedId === form.id && /* @__PURE__ */ jsx20("span", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded w-max", children: "Link copied!" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs13(
                "button",
                {
                  onClick: () => handleDeleteForm(form.id),
                  className: "relative text-red-600 hover:underline font-medium flex items-center cursor-pointer",
                  "aria-label": "Delete form",
                  children: [
                    /* @__PURE__ */ jsx20(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 mr-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsx20(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          }
                        )
                      }
                    ),
                    "Delete"
                  ]
                }
              )
            ] })
          ]
        },
        form.id
      )) })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UOFENZY3.js", imports: ["/build/_shared/chunk-2NVCE5WR.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7LQSYGRS.js", imports: ["/build/_shared/chunk-JSNKOGU6.js", "/build/_shared/chunk-2KIFTWZF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FDC6ESBA.js", imports: ["/build/_shared/chunk-656D5F2E.js", "/build/_shared/chunk-RS5FTRJB.js", "/build/_shared/chunk-IGKH4G6N.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/edit-form.$formId": { id: "routes/edit-form.$formId", parentId: "root", path: "edit-form/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/edit-form.$formId-KNGHATWY.js", imports: ["/build/_shared/chunk-OYWKUXGA.js", "/build/_shared/chunk-656D5F2E.js", "/build/_shared/chunk-IGKH4G6N.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/form-builder": { id: "routes/form-builder", parentId: "root", path: "form-builder", index: void 0, caseSensitive: void 0, module: "/build/routes/form-builder-CW622D2H.js", imports: ["/build/_shared/chunk-OYWKUXGA.js", "/build/_shared/chunk-656D5F2E.js", "/build/_shared/chunk-IGKH4G6N.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/form-preview.$formId": { id: "routes/form-preview.$formId", parentId: "root", path: "form-preview/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/form-preview.$formId-K3PI27LQ.js", imports: ["/build/_shared/chunk-G2WXQIHO.js", "/build/_shared/chunk-RS5FTRJB.js", "/build/_shared/chunk-IGKH4G6N.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/form.$formId": { id: "routes/form.$formId", parentId: "root", path: "form/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/form.$formId-DVN7QEDS.js", imports: ["/build/_shared/chunk-G2WXQIHO.js", "/build/_shared/chunk-RS5FTRJB.js", "/build/_shared/chunk-IGKH4G6N.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "a89cd9b3", hmr: void 0, url: "/build/manifest-A89CD9B3.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
