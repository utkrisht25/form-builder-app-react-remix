import {
  copyFormLink
} from "/build/_shared/chunk-YMOWICR5.js";
import {
  ThemeToggle
} from "/build/_shared/chunk-FXUYPZOC.js";
import {
  Link,
  useNavigate
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

// app/components/FormPreview.jsx
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-hook-form/dist/index.esm.mjs
var React = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
var isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  const isFileListInstance = typeof FileList !== "undefined" ? data instanceof FileList : false;
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (!(isWeb && (data instanceof Blob || isFileListInstance)) && (isArray || isObject(data))) {
    copy = isArray ? [] : {};
    if (!isArray && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          copy[key] = cloneObject(data[key]);
        }
      }
    }
  } else {
    return data;
  }
  return copy;
}
var isKey = (value) => /^\w*$/.test(value);
var isUndefined = (val) => val === void 0;
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var get = (object, path, defaultValue) => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }
  const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], object);
  return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var set = (object, path, value) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    object[key] = newValue;
    object = object[key];
  }
};
var EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
};
var VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
var INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
var HookFormContext = import_react.default.createContext(null);
HookFormContext.displayName = "HookFormContext";
var useFormContext = () => import_react.default.useContext(HookFormContext);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
function useWatch(props) {
  const methods = useFormContext();
  const { control = methods.control, name, defaultValue, disabled, exact } = props || {};
  const _defaultValue = import_react.default.useRef(defaultValue);
  const [value, updateValue] = import_react.default.useState(control._getWatch(name, _defaultValue.current));
  useIsomorphicLayoutEffect(() => control._subscribe({
    name,
    formState: {
      values: true
    },
    exact,
    callback: (formState) => !disabled && updateValue(generateWatchOutput(name, control._names, formState.values || control._formValues, false, _defaultValue.current))
  }), [name, control, disabled, exact]);
  import_react.default.useEffect(() => control._removeUnmounted());
  return value;
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
var createSubject = () => {
  let _observers = [];
  const next = (value) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o) => o !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2, _internal_visited = /* @__PURE__ */ new WeakSet()) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
    return true;
  }
  _internal_visited.add(object1);
  _internal_visited.add(object2);
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var isFileInput = (element) => element.type === "file";
var isFunction = (value) => typeof value === "function";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioInput = (element) => element.type === "radio";
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    object = isUndefined(object) ? index++ : object[updatePath[index++]];
  }
  return object;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object : baseGet(object, paths);
  const index = paths.length - 1;
  const key = paths[index];
  if (childObject) {
    delete childObject[key];
  }
  if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object, paths.slice(0, -1));
  }
  return object;
}
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function markFieldsDirty(data, fields = {}) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : { ...markFieldsDirty(data[key]) };
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
var defaultResult = {
  value: false,
  isValid: false
};
var validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
var defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var isRegex = (value) => value instanceof RegExp;
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
var ASYNC_FUNCTION = "AsyncFunction";
var hasPromiseValidation = (fieldReference) => !!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
var iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f) {
        if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
          return true;
        } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
          return true;
        } else {
          if (iterateFieldsByAction(currentField, action)) {
            break;
          }
        }
      } else if (isObject(currentField)) {
        if (iterateFieldsByAction(currentField, action)) {
          break;
        }
      }
    }
  }
  return;
};
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    if (foundError && foundError.root && foundError.root.type) {
      return {
        name: `${fieldName}.root`,
        error: foundError.root
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName) => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name) => {
  const fieldArrayErrors = convertToArrayPayload(get(errors, name));
  set(fieldArrayErrors, "root", error[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
var isMessage = (value) => isString(value);
function getValidateError(result, ref, type = "validate") {
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
  const inputValue = get(formValues, name);
  if (!mount || disabledFieldNames.has(name)) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
var defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isReady: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: _options.errors || {},
    disabled: _options.disabled || false
  };
  const _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    validatingFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  let _proxySubscribeFormState = {
    ..._proxyFormState
  };
  const _subjects = {
    array: createSubject(),
    state: createSubject()
  };
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _setValid = async (shouldUpdateValid) => {
    if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
      const isValid = _options.resolver ? isEmptyObject((await _runSchema()).errors) : await executeBuiltInValidation(_fields, true);
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = (names, isValidating) => {
    if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
      (names || Array.from(_names.mount)).forEach((name) => {
        if (name) {
          isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
        }
      });
      _subjects.state.next({
        validatingFields: _formState.validatingFields,
        isValidating: !isEmptyObject(_formState.validatingFields)
      });
    }
  };
  const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method && !_options.disabled) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
        const fieldValues = method(get(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
        const errors = method(get(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
        const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const _setErrors = (errors) => {
    _formState.errors = errors;
    _subjects.state.next({
      errors: _formState.errors,
      isValid: false
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && _setValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!_options.disabled) {
      if (!isBlurEvent || shouldDirty) {
        if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
          isPreviousDirty = _formState.isDirty;
          _formState.isDirty = output.isDirty = _getDirty();
          shouldUpdateField = isPreviousDirty !== output.isDirty;
        }
        const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
        isPreviousDirty = !!get(_formState.dirtyFields, name);
        isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
        output.dirtyFields = _formState.dirtyFields;
        shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
      }
      if (isBlurEvent) {
        const isPreviousFieldTouched = get(_formState.touchedFields, name);
        if (!isPreviousFieldTouched) {
          set(_formState.touchedFields, name, isBlurEvent);
          output.touchedFields = _formState.touchedFields;
          shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
        }
      }
      shouldUpdateField && shouldRender && _subjects.state.next(output);
    }
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
    if (_options.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(_options.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
  };
  const _runSchema = async (name) => {
    _updateIsValidating(name, true);
    const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
    _updateIsValidating(name);
    return result;
  };
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _runSchema(names);
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
    valid: true
  }) => {
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const isPromiseFunction = field._f && hasPromiseValidation(field._f);
          if (isPromiseFunction && _proxyFormState.validatingFields) {
            _updateIsValidating([name], true);
          }
          const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
          if (isPromiseFunction && _proxyFormState.validatingFields) {
            _updateIsValidating([name]);
          }
          if (fieldError[_f.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
        }
        !isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => !_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.forEach((checkboxRef) => {
              if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                if (Array.isArray(fieldValue)) {
                  checkboxRef.checked = !!fieldValue.find((data) => data === checkboxRef.value);
                } else {
                  checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                }
              }
            });
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.state.next({
              name,
              values: cloneObject(_formValues)
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      if (!value.hasOwnProperty(fieldKey)) {
        return;
      }
      const fieldValue = value[fieldKey];
      const fieldName = name + "." + fieldKey;
      const field = get(_fields, fieldName);
      (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: cloneObject(_formValues)
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({ ..._formState });
    _subjects.state.next({
      name: _state.mount ? name : void 0,
      values: cloneObject(_formValues)
    });
  };
  const onChange = async (event) => {
    _state.mount = true;
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get(_fields, name);
    const _updateIsFieldValueUpdated = (fieldValue) => {
      isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
    };
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    if (field) {
      let error;
      let isValid;
      const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
        delayErrorCallback && delayErrorCallback(0);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.state.next({
        name,
        type: event.type,
        values: cloneObject(_formValues)
      });
      if (shouldSkipValidation) {
        if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
          if (_options.mode === "onBlur") {
            if (isBlurEvent) {
              _setValid();
            }
          } else if (!isBlurEvent) {
            _setValid();
          }
        }
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      if (_options.resolver) {
        const { errors } = await _runSchema([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
          const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
          error = errorLookupResult.error;
          name = errorLookupResult.name;
          isValid = isEmptyObject(errors);
        }
      } else {
        _updateIsValidating([name], true);
        error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        _updateIsValidating([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid = false;
          } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
            isValid = await executeBuiltInValidation(_fields, true);
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    }
  };
  const _focusInput = (ref, key) => {
    if (get(_formState.errors, key) && ref.focus) {
      ref.focus();
      return 1;
    }
    return;
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get(_fields, fieldName);
        return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _setValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation(_fields);
    }
    _subjects.state.next({
      ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid } : {},
      errors: _formState.errors
    });
    options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames) => {
    const values = {
      ..._state.mount ? _formValues : _defaultValues
    };
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: !!get((formState || _formState).dirtyFields, name),
    error: get((formState || _formState).errors, name),
    isValidating: !!get(_formState.validatingFields, name),
    isTouched: !!get((formState || _formState).touchedFields, name)
  });
  const clearErrors = (name) => {
    name && convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
    _subjects.state.next({
      errors: name ? _formState.errors : {}
    });
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
    const currentError = get(_formState.errors, name) || {};
    const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
    set(_formState.errors, name, {
      ...restOfErrorTree,
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.state.subscribe({
    next: (payload) => name(_getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const _subscribe = (props2) => _subjects.state.subscribe({
    next: (formState) => {
      if (shouldSubscribeByName(props2.name, formState.name, props2.exact) && shouldRenderFormState(formState, props2.formState || _proxyFormState, _setFormState, props2.reRenderRoot)) {
        props2.callback({
          values: { ..._formValues },
          ..._formState,
          ...formState
        });
      }
    }
  }).unsubscribe;
  const subscribe = (props2) => {
    _state.mount = true;
    _proxySubscribeFormState = {
      ..._proxySubscribeFormState,
      ...props2.formState
    };
    return _subscribe({
      ...props2,
      formState: _proxySubscribeFormState
    });
  };
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.state.next({
      values: cloneObject(_formValues)
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _setValid();
  };
  const _setDisabledField = ({ disabled, name }) => {
    if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
      disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
    }
  };
  const register = (name, options = {}) => {
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
    set(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (field) {
      _setDisabledField({
        disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
        name
      });
    } else {
      updateValidAndValue(name, true, options.value);
    }
    return {
      ...disabledIsDefined ? { disabled: options.disabled || _options.disabled } : {},
      ..._options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
  const _disableForm = (disabled) => {
    if (isBoolean(disabled)) {
      _subjects.state.next({ disabled });
      iterateFieldsByAction(_fields, (ref, name) => {
        const currentField = get(_fields, name);
        if (currentField) {
          ref.disabled = currentField._f.disabled || disabled;
          if (Array.isArray(currentField._f.refs)) {
            currentField._f.refs.forEach((inputRef) => {
              inputRef.disabled = currentField._f.disabled || disabled;
            });
          }
        }
      }, 0, false);
    }
  };
  const handleSubmit = (onValid, onInvalid) => async (e) => {
    let onValidError = void 0;
    if (e) {
      e.preventDefault && e.preventDefault();
      e.persist && e.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _runSchema();
      _formState.errors = errors;
      fieldValues = cloneObject(values);
    } else {
      await executeBuiltInValidation(_fields);
    }
    if (_names.disabled.size) {
      for (const name of _names.disabled) {
        unset(fieldValues, name);
      }
    }
    unset(_formState.errors, "root");
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      try {
        await onValid(fieldValues, e);
      } catch (error) {
        onValidError = error;
      }
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
    if (onValidError) {
      throw onValidError;
    }
  };
  const resetField = (name, options = {}) => {
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, cloneObject(get(_defaultValues, name)));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, cloneObject(options.defaultValue));
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _setValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const isEmptyResetValues = isEmptyObject(formValues);
    const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues) {
        const fieldsToCheck = /* @__PURE__ */ new Set([
          ..._names.mount,
          ...Object.keys(getDirtyFields(_defaultValues, _formValues))
        ]);
        for (const fieldName of Array.from(fieldsToCheck)) {
          get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        for (const fieldName of _names.mount) {
          const value = get(values, fieldName, get(_defaultValues, fieldName));
          if (!isUndefined(value)) {
            set(values, fieldName, value);
            setValue(fieldName, get(values, fieldName));
          }
        }
      }
      _formValues = cloneObject(values);
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.state.next({
        values: { ...values }
      });
    }
    _names = {
      mount: keepStateOptions.keepDirtyValues ? _names.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues;
    _state.watch = !!_options.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
      isSubmitting: false
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
  const setFocus = (name, options = {}) => {
    const field = get(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        fieldRef.focus();
        options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
      }
    }
  };
  const _setFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  const methods = {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _subscribe,
      _runSchema,
      _focusError,
      _getWatch,
      _getDirty,
      _setValid,
      _setFieldArray,
      _setDisabledField,
      _setErrors,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _removeUnmounted,
      _disableForm,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    subscribe,
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
  return {
    ...methods,
    formControl: methods
  };
}
function useForm(props = {}) {
  const _formControl = import_react.default.useRef(void 0);
  const _values = import_react.default.useRef(void 0);
  const [formState, updateFormState] = import_react.default.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: props.errors || {},
    disabled: props.disabled || false,
    isReady: false,
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  });
  if (!_formControl.current) {
    if (props.formControl) {
      _formControl.current = {
        ...props.formControl,
        formState
      };
      if (props.defaultValues && !isFunction(props.defaultValues)) {
        props.formControl.reset(props.defaultValues, props.resetOptions);
      }
    } else {
      const { formControl, ...rest } = createFormControl(props);
      _formControl.current = {
        ...rest,
        formState
      };
    }
  }
  const control = _formControl.current.control;
  control._options = props;
  useIsomorphicLayoutEffect(() => {
    const sub = control._subscribe({
      formState: control._proxyFormState,
      callback: () => updateFormState({ ...control._formState }),
      reRenderRoot: true
    });
    updateFormState((data) => ({
      ...data,
      isReady: true
    }));
    control._formState.isReady = true;
    return sub;
  }, [control]);
  import_react.default.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
  import_react.default.useEffect(() => {
    if (props.mode) {
      control._options.mode = props.mode;
    }
    if (props.reValidateMode) {
      control._options.reValidateMode = props.reValidateMode;
    }
  }, [control, props.mode, props.reValidateMode]);
  import_react.default.useEffect(() => {
    if (props.errors) {
      control._setErrors(props.errors);
      control._focusError();
    }
  }, [control, props.errors]);
  import_react.default.useEffect(() => {
    props.shouldUnregister && control._subjects.state.next({
      values: control._getWatch()
    });
  }, [control, props.shouldUnregister]);
  import_react.default.useEffect(() => {
    if (control._proxyFormState.isDirty) {
      const isDirty = control._getDirty();
      if (isDirty !== formState.isDirty) {
        control._subjects.state.next({
          isDirty
        });
      }
    }
  }, [control, formState.isDirty]);
  import_react.default.useEffect(() => {
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, control._options.resetOptions);
      _values.current = props.values;
      updateFormState((state) => ({ ...state }));
    } else {
      control._resetDefaultValues();
    }
  }, [control, props.values]);
  import_react.default.useEffect(() => {
    if (!control._state.mount) {
      control._setValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = getProxyFormState(formState, control);
  return _formControl.current;
}

// app/components/FormPreview.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\FormPreview.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\FormPreview.jsx"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
var renderFormField = (field, register, errors) => {
  const {
    id,
    type,
    title,
    required,
    options,
    minLength,
    maxLength,
    pattern
  } = field;
  const fieldName = id;
  const validationRules = {
    required: required && "This field is required.",
    minLength: minLength ? {
      value: minLength,
      message: `Minimum length is ${minLength} characters.`
    } : void 0,
    maxLength: maxLength ? {
      value: maxLength,
      message: `Maximum length is ${maxLength} characters.`
    } : void 0,
    pattern: pattern ? {
      value: new RegExp(pattern),
      message: "Please match the required format."
    } : void 0
  };
  switch (type) {
    case "short-answer":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 61,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: fieldName, ...register(fieldName, validationRules), className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : ""} dark:bg-gray-700 dark:text-white dark:border-none` }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        errors[fieldName] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 64,
          columnNumber: 33
        }, this)
      ] }, id, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 59,
        columnNumber: 14
      }, this);
    case "paragraph":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 69,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: fieldName, rows: "3", ...register(fieldName, validationRules), className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : ""} dark:bg-gray-700 dark:text-white dark:border-none` }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        errors[fieldName] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 72,
          columnNumber: 33
        }, this)
      ] }, id, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 67,
        columnNumber: 14
      }, this);
    case "multiple-choice":
    case "radio":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 78,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", id: `${fieldName}-${option.id}`, value: option.text, ...register(fieldName, {
            required: required && "Please select an option."
          }), className: "focus:ring-blue-500 h-4 w-4 text-blue-600  dark:bg-gray-700 dark:text-white rounded" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `${fieldName}-${option.id}`, className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: option.text }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, `${id}-${option.id}`, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 80,
          columnNumber: 34
        }, this)),
        errors[fieldName] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 88,
          columnNumber: 33
        }, this)
      ] }, id, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 76,
        columnNumber: 14
      }, this);
    case "checkboxes":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 93,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: `${fieldName}-${option.id}`, value: option.text, ...register(fieldName, {
            validate: required ? (value) => {
              const isAnyChecked = Array.isArray(value) && value.length > 0;
              return isAnyChecked || "Please select at least one option.";
            } : void 0
          }), className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded dark:bg-gray-700 dark:text-white" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `${fieldName}-${option.id}`, className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: option.text }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 102,
            columnNumber: 15
          }, this)
        ] }, `${id}-${option.id}`, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 95,
          columnNumber: 34
        }, this)),
        errors[fieldName] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 106,
          columnNumber: 33
        }, this)
      ] }, id, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 91,
        columnNumber: 14
      }, this);
    case "dropdown":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 111,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: fieldName, ...register(fieldName, validationRules), className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : "border-gray-300"} dark:bg-gray-700 dark:text-white dark:border-none`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select an option" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.text, children: option.text }, `${id}-${option.id}`, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 115,
            columnNumber: 36
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        errors[fieldName] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 119,
          columnNumber: 33
        }, this)
      ] }, id, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 109,
        columnNumber: 14
      }, this);
    case "date":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: fieldName, className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
          title,
          " ",
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 124,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", id: fieldName, ...register(fieldName, validationRules), className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[fieldName] ? "border-red-500" : "border-gray-300"} dark:bg-gray-700 dark:text-white dark:border-none` }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        errors[fieldName] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors[fieldName].message }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 127,
          columnNumber: 33
        }, this)
      ] }, id, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 122,
        columnNumber: 14
      }, this);
    default:
      return null;
  }
};
function FormPreview({
  formId: propFormId,
  isUserMode = false
}) {
  _s();
  const formId = propFormId;
  const navigate = useNavigate();
  const [form, setForm] = (0, import_react2.useState)(null);
  const [previewWidth, setPreviewWidth] = (0, import_react2.useState)("w-full lg:max-w-3xl");
  const [showCopyNotification, setShowCopyNotification] = (0, import_react2.useState)(false);
  const [progress, setProgress] = (0, import_react2.useState)(0);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    control,
    getValues,
    reset
  } = useForm({
    mode: "onChange",
    defaultValues: {
      previewEmailField: ""
    },
    shouldUnregister: true
    // This helps with hydration by cleaning up unmounted fields
  });
  const formValues = useWatch({
    control,
    defaultValue: {}
  });
  (0, import_react2.useEffect)(() => {
    if (!form)
      return;
    const allFields = [{
      name: "previewEmailField",
      required: true
    }];
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
    let validFieldCount = 0;
    let totalFieldCount = 0;
    allFields.forEach((field) => {
      const fieldValue = getValues(field.name);
      const hasValue = Array.isArray(fieldValue) ? fieldValue.length > 0 : fieldValue !== null && fieldValue !== void 0 && fieldValue !== "";
      const hasError = errors[field.name] !== void 0;
      let isValid = true;
      if (hasValue) {
        if (field.minLength && typeof fieldValue === "string" && fieldValue.length < field.minLength) {
          isValid = false;
        }
        if (field.maxLength && typeof fieldValue === "string" && fieldValue.length > field.maxLength) {
          isValid = false;
        }
        if (field.pattern && typeof fieldValue === "string") {
          try {
            const regex = new RegExp(field.pattern);
            if (!regex.test(fieldValue)) {
              isValid = false;
            }
          } catch (e) {
            isValid = false;
          }
        }
      }
      if (field.required) {
        totalFieldCount++;
        if (hasValue && isValid && !hasError) {
          validFieldCount++;
        }
      } else if (hasValue) {
        totalFieldCount++;
        if (isValid && !hasError) {
          validFieldCount++;
        }
      }
    });
    let calculatedProgress = totalFieldCount === 0 ? 0 : Math.round(validFieldCount / totalFieldCount * 100);
    if (errors.previewEmailField && Object.keys(errors).length > 1) {
      calculatedProgress = 0;
    }
    setProgress(calculatedProgress);
  }, [form, formValues, errors, getValues]);
  (0, import_react2.useEffect)(() => {
    if (typeof window !== "undefined" && formId) {
      const storedForms = JSON.parse(localStorage.getItem("forms") || "[]");
      const foundForm = storedForms.find((f) => f.id === formId);
      if (foundForm) {
        setForm(foundForm);
        const defaultValues = {
          previewEmailField: ""
          // Initialize email field
        };
        foundForm.fields.forEach((field) => {
          if (field.type === "checkboxes") {
            defaultValues[field.id] = [];
          } else {
            defaultValues[field.id] = "";
          }
        });
        if (reset) {
          reset(defaultValues);
        }
      } else {
        console.warn(`Form with ID ${formId} not found for preview.`);
        navigate("/");
      }
    }
  }, [formId, navigate, reset]);
  const onSubmit = (data) => {
    console.log("Form Submitted!", data);
    alert("Form submitted successfully! Check console for data.");
  };
  if (!form) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center p-8 text-gray-600", children: "Loading form or form not found..." }, void 0, false, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 286,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 289,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-between items-center mb-6 gap-4", children: !isUserMode && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/edit-form/${form?.id}`, className: "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors", children: "\u2190 Back to Editor" }, void 0, false, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 292,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => copyFormLink(form?.id, setShowCopyNotification), className: "relative px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 297,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 296,
          columnNumber: 15
        }, this),
        "Copy Share Link",
        showCopyNotification && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded", children: "Link copied!" }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 300,
          columnNumber: 40
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 295,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 291,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    "      ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 ${previewWidth}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left", children: form?.title || "Loading..." }, void 0, false, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 306,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: form.description }, void 0, false, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 307,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
        "          ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Form Completion" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 311,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-blue-600 dark:text-blue-400", children: [
            progress,
            "%"
          ] }, void 0, true, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 312,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 310,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2.5 rounded-full transition-all duration-500 ease-out ${progress === 100 ? "bg-green-600" : progress > 70 ? "bg-blue-600" : progress > 30 ? "bg-yellow-400" : "bg-red-400"}`, style: {
          width: `${progress}%`
        } }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 315,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 314,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 310,
        columnNumber: 9
      }, this),
      !form ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto" }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 323,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-gray-600", children: "Loading form..." }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 324,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 322,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "previewEmailField", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
            "Email ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
              fileName: "app/components/FormPreview.jsx",
              lineNumber: 329,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 328,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "previewEmailField", ...register("previewEmailField", {
            required: "Email is required.",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please enter a valid email address."
            }
          }), className: `mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.previewEmailField ? "border-red-500" : "border-gray-300"} dark:border-gray-600 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                  }`, placeholder: "Valid email address" }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 331,
            columnNumber: 15
          }, this),
          errors.previewEmailField && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors.previewEmailField.message }, void 0, false, {
            fileName: "app/components/FormPreview.jsx",
            lineNumber: 339,
            columnNumber: 44
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 327,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: form.fields?.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: renderFormField(field, register, errors) }, field.id, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 344,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 343,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold w-full sm:w-auto", children: "Submit Form" }, void 0, false, {
          fileName: "app/components/FormPreview.jsx",
          lineNumber: 348,
          columnNumber: 13
        }, this)
      ] }, form.id, true, {
        fileName: "app/components/FormPreview.jsx",
        lineNumber: 325,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FormPreview.jsx",
      lineNumber: 305,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FormPreview.jsx",
    lineNumber: 288,
    columnNumber: 10
  }, this);
}
_s(FormPreview, "/tGgjxCQ5usaDU+Y0NMPu0o1/gI=", false, function() {
  return [useNavigate, useForm, useWatch];
});
_c = FormPreview;
var _c;
$RefreshReg$(_c, "FormPreview");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FormPreview
};
//# sourceMappingURL=/build/_shared/chunk-YRSIEQOB.js.map
