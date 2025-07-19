import {
  addOption,
  addQuestion,
  removeOption,
  removeQuestion,
  reorderQuestions,
  setInitialForm,
  updateFormDetails,
  updateOption,
  updateQuestion,
  useDispatch,
  useSelector
} from "/build/_shared/chunk-JCIKCEJC.js";
import {
  formTemplates
} from "/build/_shared/chunk-3W5JBBFO.js";
import {
  ThemeToggle
} from "/build/_shared/chunk-HW4NUVRA.js";
import {
  useNavigate,
  useParams
} from "/build/_shared/chunk-D376OADO.js";
import {
  createHotContext
} from "/build/_shared/chunk-P6OU7LJU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/FormBuilder.jsx
var import_react4 = __toESM(require_react(), 1);

// app/components/Question/QuestionHeader.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Question\\\\QuestionHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Question\\QuestionHeader.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
var questionTypes = [{
  id: "short-answer",
  label: "Short answer"
}, {
  id: "paragraph",
  label: "Paragraph"
}, {
  id: "multiple-choice",
  label: "Multiple Choice"
}, {
  id: "checkboxes",
  label: "Checkboxes"
}, {
  id: "dropdown",
  label: "Drop-down"
}, {
  id: "date",
  label: "Date"
}, {
  id: "radio",
  label: "Radio"
}];
function QuestionHeader({
  title,
  type,
  onTitleChange,
  onTypeChange,
  onRemove
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 mr-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", value: title || "", onChange: onTitleChange, placeholder: "Question Title", className: "w-full text-lg font-semibold mb-2 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent dark:text-white transition-colors" }, void 0, false, {
      fileName: "app/components/Question/QuestionHeader.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: type, onChange: onTypeChange, className: "text-sm px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors", children: questionTypes.map((questionType) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: questionType.id, children: questionType.label }, questionType.id, false, {
      fileName: "app/components/Question/QuestionHeader.jsx",
      lineNumber: 60,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/components/Question/QuestionHeader.jsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Question/QuestionHeader.jsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Question/QuestionHeader.jsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_c = QuestionHeader;
var QuestionHeader_default = QuestionHeader;
var _c;
$RefreshReg$(_c, "QuestionHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FieldTypes.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\FieldTypes.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\FieldTypes.jsx"
  );
  import.meta.hot.lastModified = "1751124128220.632";
}
function FieldTypes({
  onAddField
}) {
  const handleDragStart = (e, typeId) => {
    e.dataTransfer.setData("fieldType", typeId);
  };
  const handleClick = (typeId) => {
    onAddField(typeId);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: questionTypes.map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { draggable: true, className: "bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 \r\n                     text-blue-800 dark:text-blue-100 font-semibold py-2 px-4 rounded-md mb-2 \r\n                     cursor-pointer transition-colors shadow-sm hover:shadow-md\r\n                     flex justify-between items-center", onDragStart: (e) => handleDragStart(e, type.id), onClick: () => handleClick(type.id), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: type.label }, void 0, false, {
      fileName: "app/components/FieldTypes.jsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 ml-2 md:hidden", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }, void 0, false, {
      fileName: "app/components/FieldTypes.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/FieldTypes.jsx",
      lineNumber: 37,
      columnNumber: 11
    }, this)
  ] }, type.id, true, {
    fileName: "app/components/FieldTypes.jsx",
    lineNumber: 32,
    columnNumber: 34
  }, this)) }, void 0, false, {
    fileName: "app/components/FieldTypes.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c2 = FieldTypes;
var FieldTypes_default = FieldTypes;
var _c2;
$RefreshReg$(_c2, "FieldTypes");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/io5/index.mjs
function IoMoveOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "m176 112 80-80 80 80m-80.02-80 .02 448m-80-80 80 80 80-80m64-224 80 80-80 80M112 176l-80 80 80 80m-80-80h448" }, "child": [] }] })(props);
}
function IoTrashOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "m112 112 20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M80 112h352" }, "child": [] }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224 8 224m136-224-8 224" }, "child": [] }] })(props);
}

// app/components/QuestionComponent.jsx
var import_react3 = __toESM(require_react(), 1);

// app/components/OptionItem.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\OptionItem.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\OptionItem.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
function OptionItem({
  questionId,
  optionId,
  type
}) {
  _s();
  const dispatch = useDispatch();
  const option = useSelector((state) => {
    const question = state.form.questions.find((q) => q.id === questionId);
    return question ? question.options.find((opt) => opt.id === optionId) : null;
  });
  if (!option) {
    return null;
  }
  const handleOptionTextChange = (e) => {
    dispatch(updateOption({
      questionId,
      updatedOption: {
        ...option,
        text: e.target.value
      }
    }));
  };
  const handleDeleteOption = () => {
    dispatch(removeOption({
      questionId,
      optionIdToRemove: option.id
    }));
  };
  const inputType = type === "multiple-choice" ? "radio" : "checkbox";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center mb-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: inputType, className: "mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500", disabled: true }, void 0, false, {
      fileName: "app/components/OptionItem.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", className: "flex-grow p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-800 mr-2", value: option.text, onChange: handleOptionTextChange, placeholder: `Option ${option.text}` }, void 0, false, {
      fileName: "app/components/OptionItem.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    type !== "dropdown" && type !== "radio" && option.text !== "Option 1" && // Added conditions to prevent deleting 'Option 1' or in dropdown/radio
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: handleDeleteOption, className: "text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-gray-100 transition-colors" }, void 0, false, {
      fileName: "app/components/OptionItem.jsx",
      lineNumber: 74,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OptionItem.jsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(OptionItem, "zPTPEbFNjBsuleR8H46UtHTCJ8Y=", false, function() {
  return [useDispatch, useSelector];
});
_c3 = OptionItem;
var OptionItem_default = OptionItem;
var _c3;
$RefreshReg$(_c3, "OptionItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Question/QuestionOptions.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Question\\\\QuestionOptions.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Question\\QuestionOptions.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
function QuestionOptions({
  question
}) {
  _s2();
  const dispatch = useDispatch();
  if (!question) {
    return null;
  }
  const {
    id,
    type,
    options = []
  } = question;
  const handleAddOption = () => {
    const newOption = {
      id: `opt-${Date.now()}-${Math.random()}`,
      text: `Option ${options.length + 1}`
    };
    dispatch(addOption({
      questionId: id,
      newOption
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-2 mt-2", children: [
    options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-4 h-4 rounded-full border border-gray-400 dark:border-gray-500 flex-shrink-0" }, void 0, false, {
        fileName: "app/components/Question/QuestionOptions.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(OptionItem_default, { questionId: id, optionId: option.id, type }, void 0, false, {
        fileName: "app/components/Question/QuestionOptions.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => dispatch(removeOption({
        questionId: id,
        optionIdToRemove: option.id
      })), className: "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors", "aria-label": "Remove option", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }, void 0, false, {
        fileName: "app/components/Question/QuestionOptions.jsx",
        lineNumber: 57,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Question/QuestionOptions.jsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Question/QuestionOptions.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, option.id, true, {
      fileName: "app/components/Question/QuestionOptions.jsx",
      lineNumber: 49,
      columnNumber: 30
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: handleAddOption, className: "mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "mr-2 text-xl", children: "+" }, void 0, false, {
        fileName: "app/components/Question/QuestionOptions.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      " Add option"
    ] }, void 0, true, {
      fileName: "app/components/Question/QuestionOptions.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Question/QuestionOptions.jsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s2(QuestionOptions, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
  return [useDispatch];
});
_c4 = QuestionOptions;
var QuestionOptions_default = QuestionOptions;
var _c4;
$RefreshReg$(_c4, "QuestionOptions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Question/QuestionBody.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Question\\\\QuestionBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Question\\QuestionBody.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
function QuestionBody({
  question,
  onUpdate
}) {
  const hasOptions = ["multiple-choice", "checkboxes", "dropdown", "radio"].includes(question.type);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-4", children: [
    "      ",
    hasOptions ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(QuestionOptions_default, { question }, void 0, false, {
      fileName: "app/components/Question/QuestionBody.jsx",
      lineNumber: 30,
      columnNumber: 94
    }, this) : (
      // Show placeholder input for other question types
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: question.type === "date" ? "date" : "text", disabled: true, placeholder: question.type === "short-answer" ? "Short answer text" : question.type === "paragraph" ? "Long answer text" : "Answer", className: "w-full p-2 border border-gray-300  rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed transition-colors" }, void 0, false, {
        fileName: "app/components/Question/QuestionBody.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Question/QuestionBody.jsx",
        lineNumber: 32,
        columnNumber: 5
      }, this)
    )
  ] }, void 0, true, {
    fileName: "app/components/Question/QuestionBody.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c5 = QuestionBody;
var QuestionBody_default = QuestionBody;
var _c5;
$RefreshReg$(_c5, "QuestionBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Question/QuestionFooter.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Question\\\\QuestionFooter.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Question\\QuestionFooter.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
function QuestionFooter({
  questionId,
  required,
  onRequiredToggle,
  onDeleteQuestion
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border-t border-gray-200 pt-4 flex justify-end items-center dark:border-gray-700", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "flex items-center cursor-pointer mr-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "checkbox", className: "form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 transition-colors", checked: required, onChange: onRequiredToggle }, void 0, false, {
        fileName: "app/components/Question/QuestionFooter.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "ml-2 text-gray-700 dark:text-gray-300", children: "Required" }, void 0, false, {
        fileName: "app/components/Question/QuestionFooter.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Question/QuestionFooter.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        onClick: () => onDeleteQuestion(questionId),
        className: "text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition-colors",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IoTrashOutline, { size: 22 }, void 0, false, {
          fileName: "app/components/Question/QuestionFooter.jsx",
          lineNumber: 35,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Question/QuestionFooter.jsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Question/QuestionFooter.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c6 = QuestionFooter;
var QuestionFooter_default = QuestionFooter;
var _c6;
$RefreshReg$(_c6, "QuestionFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Question/ValidationRules.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Question\\\\ValidationRules.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Question\\ValidationRules.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
var standardPatterns = [{
  label: "None",
  value: ""
}, {
  label: "Email Address",
  value: "^\\S+@\\S+\\.\\S+$"
}, {
  label: "10-digit Mobile Number (India)",
  value: "^[6-9]\\d{9}$"
}];
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
  const showLengthValidation = type === "short-answer" || type === "paragraph";
  const showPatternValidation = type === "short-answer";
  if (!showLengthValidation && !showPatternValidation) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-4 p-3 bg-gray-50 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300", children: "Validation Rules" }, void 0, false, {
      fileName: "app/components/Question/ValidationRules.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    showLengthValidation && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-sm text-gray-600 dark:text-gray-400 w-24", children: "Min Length:" }, void 0, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "number", className: "ml-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded \r\n                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white \r\n                          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors", value: minLength === void 0 ? "" : minLength, onChange: onMinLengthChange, min: "0" }, void 0, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-sm text-gray-600 dark:text-gray-400 w-24 ml-4", children: "Max Length:" }, void 0, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "number", className: "ml-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded \r\n                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white \r\n                          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors", value: maxLength === void 0 ? "" : maxLength, onChange: onMaxLengthChange, min: "0" }, void 0, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Question/ValidationRules.jsx",
      lineNumber: 51,
      columnNumber: 32
    }, this),
    showPatternValidation && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: "Standard Patterns:" }, void 0, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("select", { className: "block appearance-none w-full bg-white border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-2", value: pattern || "", onChange: onStandardPatternSelect, children: standardPatterns.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: p.value, children: p.label }, p.label, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 64,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: "Custom Pattern (Regex):" }, void 0, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "text", className: "flex-grow p-1 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 outline-none text-gray-700 dark:text-white bg-white dark:bg-gray-700", value: pattern || "", onChange: onPatternChange, placeholder: "e.g., ^\\\\S+@\\\\S+\\\\.\\\\S+$ for email" }, void 0, false, {
        fileName: "app/components/Question/ValidationRules.jsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Question/ValidationRules.jsx",
      lineNumber: 61,
      columnNumber: 33
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Question/ValidationRules.jsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_c7 = ValidationRules;
var ValidationRules_default = ValidationRules;
var _c7;
$RefreshReg$(_c7, "ValidationRules");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/QuestionComponent.jsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\QuestionComponent.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\QuestionComponent.jsx"
  );
  import.meta.hot.lastModified = "1751124128234.8552";
}
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
  _s3();
  const dispatch = useDispatch();
  const [isTouching, setIsTouching] = (0, import_react3.useState)(false);
  const touchTimeout = (0, import_react3.useRef)(null);
  const question = useSelector((state) => state.form.questions.find((q) => q.id === questionId));
  if (!question) {
    return null;
  }
  const {
    id,
    title,
    type,
    required,
    options = [],
    minLength,
    maxLength,
    pattern
  } = question;
  const handleTouchStart = (e) => {
    e.preventDefault();
    touchTimeout.current = setTimeout(() => {
      setIsTouching(true);
    }, 500);
  };
  const handleTouchEnd = (e) => {
    e.preventDefault();
    clearTimeout(touchTimeout.current);
    setIsTouching(false);
  };
  const handleTouchMove = (e) => {
    if (isTouching) {
      e.preventDefault();
      const touch = e.touches[0];
      const elements = document.elementsFromPoint(touch.clientX, touch.clientY);
      const targetQuestion = elements.find((el) => el.hasAttribute("data-question-index"));
      if (targetQuestion) {
        const targetIndex = parseInt(targetQuestion.getAttribute("data-question-index"));
        if (targetIndex !== index) {
          onDrop(e, targetIndex);
        }
      }
    }
  };
  const handleTitleChange = (e) => {
    dispatch(updateQuestion({
      ...question,
      title: e.target.value
    }));
  };
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    const newOptions = newType === "multiple-choice" || newType === "checkboxes" || newType === "dropdown" || newType === "radio" ? options.length > 0 ? options : [{
      id: `opt-${Date.now()}-1`,
      text: "Option 1"
    }] : [];
    const updatedQuestion = {
      ...question,
      type: newType,
      options: newOptions
    };
    if (newType !== "short-answer" && newType !== "paragraph") {
      delete updatedQuestion.minLength;
      delete updatedQuestion.maxLength;
    }
    if (newType !== "short-answer") {
      delete updatedQuestion.pattern;
    }
    dispatch(updateQuestion(updatedQuestion));
  };
  const handleRequiredToggle = () => {
    dispatch(updateQuestion({
      ...question,
      required: !required
    }));
  };
  const handleDeleteQuestion = () => {
    dispatch(removeQuestion(id));
  };
  const handleMinLengthChange = (e) => {
    const value = e.target.value === "" ? void 0 : parseInt(e.target.value, 10);
    dispatch(updateQuestion({
      ...question,
      minLength: value
    }));
  };
  const handleMaxLengthChange = (e) => {
    const value = e.target.value === "" ? void 0 : parseInt(e.target.value, 10);
    dispatch(updateQuestion({
      ...question,
      maxLength: value
    }));
  };
  const handlePatternChange = (e) => {
    dispatch(updateQuestion({
      ...question,
      pattern: e.target.value
    }));
  };
  const handleStandardPatternSelect = (e) => {
    const selectedPattern = e.target.value;
    dispatch(updateQuestion({
      ...question,
      pattern: selectedPattern
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4 border border-gray-300 relative group", draggable: true, onDragStart: (e) => onDragStart(e, index), onDragOver: (e) => onDragOver(e, index), onDrop: (e) => onDrop(e, index), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-1 absolute right-2 top-2 md:hidden z-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { "aria-label": "Move up", onClick: () => onMoveUp(index), disabled: index === 0, className: "p-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50", children: "\u25B2" }, void 0, false, {
        fileName: "app/components/QuestionComponent.jsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { "aria-label": "Move down", onClick: () => onMoveDown(index), disabled: index === totalQuestions - 1, className: "p-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50", children: "\u25BC" }, void 0, false, {
        fileName: "app/components/QuestionComponent.jsx",
        lineNumber: 160,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/QuestionComponent.jsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full p-1 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity z-10 md:block hidden", onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd, onTouchMove: handleTouchMove, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IoMoveOutline, { size: 18, className: "text-gray-600" }, void 0, false, {
      fileName: "app/components/QuestionComponent.jsx",
      lineNumber: 164,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/QuestionComponent.jsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(QuestionHeader_default, { title, type, onTitleChange: handleTitleChange, onTypeChange: handleTypeChange }, void 0, false, {
      fileName: "app/components/QuestionComponent.jsx",
      lineNumber: 168,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(QuestionBody_default, { question }, void 0, false, {
      fileName: "app/components/QuestionComponent.jsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ValidationRules_default, { type, minLength, maxLength, pattern, onMinLengthChange: handleMinLengthChange, onMaxLengthChange: handleMaxLengthChange, onPatternChange: handlePatternChange, onStandardPatternSelect: handleStandardPatternSelect }, void 0, false, {
      fileName: "app/components/QuestionComponent.jsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(QuestionFooter_default, { questionId: id, required, onRequiredToggle: handleRequiredToggle, onDeleteQuestion: handleDeleteQuestion }, void 0, false, {
      fileName: "app/components/QuestionComponent.jsx",
      lineNumber: 178,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/QuestionComponent.jsx",
    lineNumber: 156,
    columnNumber: 10
  }, this);
}
_s3(QuestionComponent, "V6owl3/azPvDWnjZKCVfJCzgJSw=", false, function() {
  return [useDispatch, useSelector];
});
_c8 = QuestionComponent;
var QuestionComponent_default = QuestionComponent;
var _c8;
$RefreshReg$(_c8, "QuestionComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FormCanvas.jsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\FormCanvas.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\FormCanvas.jsx"
  );
  import.meta.hot.lastModified = "1751124128224.656";
}
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
  _s4();
  const questions = useSelector((state) => state.form.questions);
  const dispatch = useDispatch();
  const handleMoveUp = (idx) => {
    if (idx > 0) {
      dispatch(reorderQuestions({
        draggedIndex: idx,
        droppedOverIndex: idx - 1
      }));
    }
  };
  const handleMoveDown = (idx) => {
    if (idx < questions.length - 1) {
      dispatch(reorderQuestions({
        draggedIndex: idx,
        droppedOverIndex: idx + 1
      }));
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      className: "min-h-96 border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50",
      onDragOver,
      onDrop,
      children: questions.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-gray-500 text-center py-10", children: "Drag and drop form fields here to add questions" }, void 0, false, {
        fileName: "app/components/FormCanvas.jsx",
        lineNumber: 62,
        columnNumber: 33
      }, this) : questions.map((question, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        question.id,
        false,
        {
          fileName: "app/components/FormCanvas.jsx",
          lineNumber: 62,
          columnNumber: 169
        },
        this
      ))
    },
    void 0,
    false,
    {
      fileName: "app/components/FormCanvas.jsx",
      lineNumber: 59,
      columnNumber: 10
    },
    this
  );
}
_s4(FormCanvas, "Fj5wp2IGDm2N+h/Y3qCDJL1Ai6w=", false, function() {
  return [useSelector, useDispatch];
});
_c9 = FormCanvas;
var FormCanvas_default = FormCanvas;
var _c9;
$RefreshReg$(_c9, "FormCanvas");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FormBuilder.jsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\FormBuilder.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\FormBuilder.jsx"
  );
  import.meta.hot.lastModified = "1751124128222.6455";
}
function FormBuilder({
  formId: propFormId
}) {
  _s5();
  const formTitle = useSelector((state) => state.form.title);
  const formDescription = useSelector((state) => state.form.description);
  const questions = useSelector((state) => state.form.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const currentFormId = propFormId || params.formId;
  const dragItem = (0, import_react4.useRef)(null);
  const dragOverItem = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (currentFormId) {
      const forms = JSON.parse(localStorage.getItem("forms") || "[]");
      const existingForm = forms.find((form) => form.id === currentFormId);
      if (existingForm) {
        if (existingForm.isTemplate && existingForm.originalTemplate) {
          const template = formTemplates[existingForm.originalTemplate];
          if (template) {
            const templateQuestionIds = template.fields.map((f) => f.id);
            const existingQuestionIds = existingForm.fields.map((f) => f.id);
            const missingTemplateQuestions = template.fields.filter((f) => !existingQuestionIds.includes(f.id));
            if (missingTemplateQuestions.length > 0) {
              existingForm.fields = [...missingTemplateQuestions, ...existingForm.fields];
            }
          }
        }
        dispatch(setInitialForm(existingForm));
      } else {
        console.warn(`Form with ID ${currentFormId} not found. Navigating to new form.`);
        navigate("/form-builder");
      }
    } else {
      dispatch(setInitialForm({
        title: "Untitled form",
        description: "",
        fields: []
      }));
    }
  }, [currentFormId, navigate, dispatch]);
  const handleCanvasDragOver = (e) => {
    e.preventDefault();
  };
  const handleCanvasDrop = (e) => {
    e.preventDefault();
    const fieldType = e.dataTransfer.getData("fieldType");
    if (fieldType) {
      dispatch(addQuestion({
        id: `q-${Date.now()}-${Math.random()}`,
        title: "Untitled Question",
        type: fieldType,
        required: false,
        options: fieldType === "multiple-choice" || fieldType === "checkboxes" || fieldType === "dropdown" || fieldType === "radio" ? [{
          id: `opt-${Date.now()}-1`,
          text: "Option 1"
        }] : []
      }));
    }
  };
  const handleQuestionDragStart = (e, index) => {
    dragItem.current = index;
    e.dataTransfer.effectAllowed = "move";
  };
  const handleQuestionDragOver = (e, index) => {
    e.preventDefault();
    dragOverItem.current = index;
  };
  const handleQuestionDrop = (e, dropIndex) => {
    e.preventDefault();
    const draggedIndex = dragItem.current;
    const droppedOverIndex = dragOverItem.current;
    if (draggedIndex !== null && droppedOverIndex !== null && draggedIndex !== droppedOverIndex) {
      dispatch(reorderQuestions({
        draggedIndex,
        droppedOverIndex
      }));
      dragItem.current = null;
      dragOverItem.current = null;
    }
  };
  const saveFormToStorage = () => {
    try {
      let forms = JSON.parse(localStorage.getItem("forms") || "[]");
      const currentForm = forms.find((f) => f.id === currentFormId);
      const currentFormData = {
        title: formTitle,
        description: formDescription,
        fields: questions
      };
      let newFormId = currentFormId;
      if (currentFormId) {
        const formIndex = forms.findIndex((form) => form.id === currentFormId);
        if (formIndex > -1) {
          forms[formIndex] = {
            ...forms[formIndex],
            ...currentFormData,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
            // If it was a template form, ensure template questions remain
            fields: currentForm?.isTemplate ? ensureTemplateQuestions(currentFormData.fields, forms[formIndex].originalTemplate) : currentFormData.fields
          };
          console.log("Form updated successfully!");
        } else {
          console.warn("Form not found for update, creating new one.");
          newFormId = `form-${Date.now()}`;
          forms.push({
            ...currentFormData,
            id: newFormId,
            createdAt: (/* @__PURE__ */ new Date()).toISOString()
          });
          console.log("New form created as fallback!");
        }
      } else {
        newFormId = `form-${Date.now()}`;
        forms.push({
          ...currentFormData,
          id: newFormId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        });
        console.log("New form saved successfully!");
      }
      localStorage.setItem("forms", JSON.stringify(forms));
      return {
        success: true,
        formId: newFormId
      };
    } catch (error) {
      console.error("Error saving form:", error);
      return {
        success: false,
        error: error.message
      };
    }
  };
  const handleSaveForm = () => {
    const result = saveFormToStorage();
    if (result.success) {
      navigate("/");
    } else {
      console.error("Failed to save form:", result.error);
    }
  };
  const handlePreview = () => {
    const result = saveFormToStorage();
    if (result.success) {
      navigate(`/form-preview/${result.formId}`);
    } else {
      console.error("Failed to save form:", result.error);
    }
  };
  const ensureTemplateQuestions = (currentFields, templateType) => {
    if (!templateType)
      return currentFields;
    const template = formTemplates[templateType];
    if (!template)
      return currentFields;
    const templateQuestionIds = template.fields.map((f) => f.id);
    const modifiedTemplateQuestions = currentFields.filter((f) => templateQuestionIds.includes(f.id));
    const unmodifiedTemplateQuestions = template.fields.filter((f) => !modifiedTemplateQuestions.find((mf) => mf.id === f.id));
    return [...unmodifiedTemplateQuestions, ...currentFields];
  };
  const handleAddField = (fieldType) => {
    dispatch(addQuestion({
      id: `q-${Date.now()}-${Math.random()}`,
      title: "Untitled Question",
      type: fieldType,
      required: false,
      options: fieldType === "multiple-choice" || fieldType === "checkboxes" || fieldType === "dropdown" || fieldType === "radio" ? [{
        id: `opt-${Date.now()}-1`,
        text: "Option 1"
      }] : []
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container mx-auto px-4 py-8 dark:bg-gray-900 transition-colors", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ThemeToggle, {}, void 0, false, {
      fileName: "app/components/FormBuilder.jsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "md:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-xl font-bold mb-4 text-gray-800 dark:text-white transition-colors", children: "Form Elements" }, void 0, false, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 228,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4 md:hidden", children: "Tap a field type to add it to your form" }, void 0, false, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4 hidden md:block", children: "Drag and drop fields to add them to your form" }, void 0, false, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 232,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FieldTypes_default, { onAddField: handleAddField }, void 0, false, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 235,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/FormBuilder.jsx",
        lineNumber: 227,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/FormBuilder.jsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-[600px] transition-colors", onDragOver: handleCanvasDragOver, onDrop: handleCanvasDrop, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", value: formTitle, onChange: (e) => dispatch(updateFormDetails({
          title: e.target.value
        })), placeholder: "Form Title", className: "w-full text-3xl font-bold mb-4 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent dark:text-white transition-colors" }, void 0, false, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 243,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("textarea", { value: formDescription, onChange: (e) => dispatch(updateFormDetails({
          description: e.target.value
        })), placeholder: "Form Description", className: "w-full text-gray-600  mb-8 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent resize-none transition-colors dark:text-white", rows: "2" }, void 0, false, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FormCanvas_default, { questions, onQuestionDragStart: handleQuestionDragStart, onQuestionDragOver: handleQuestionDragOver, onQuestionDrop: handleQuestionDrop, onUpdateQuestion: (id, updates) => dispatch(updateQuestion({
          id,
          updates
        })), onRemoveQuestion: (id) => dispatch(removeQuestion(id)) }, void 0, false, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 253,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-end space-x-4 mt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: handleSaveForm, className: "px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors", children: "Save Form" }, void 0, false, {
            fileName: "app/components/FormBuilder.jsx",
            lineNumber: 260,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: handlePreview, className: "px-6 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors", children: "Preview" }, void 0, false, {
            fileName: "app/components/FormBuilder.jsx",
            lineNumber: 263,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormBuilder.jsx",
          lineNumber: 259,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/FormBuilder.jsx",
        lineNumber: 241,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/FormBuilder.jsx",
        lineNumber: 240,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FormBuilder.jsx",
      lineNumber: 224,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FormBuilder.jsx",
    lineNumber: 222,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/FormBuilder.jsx",
    lineNumber: 221,
    columnNumber: 10
  }, this);
}
_s5(FormBuilder, "dul2QJdVOZwU6Z0dsGkwzv5S3IY=", false, function() {
  return [useSelector, useSelector, useSelector, useDispatch, useNavigate, useParams];
});
_c10 = FormBuilder;
var FormBuilder_default = FormBuilder;
var _c10;
$RefreshReg$(_c10, "FormBuilder");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FormBuilder_default
};
//# sourceMappingURL=/build/_shared/chunk-CUDZ4ZFX.js.map
