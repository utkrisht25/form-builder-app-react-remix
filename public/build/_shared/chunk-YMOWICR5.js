import {
  createHotContext
} from "/build/_shared/chunk-P6OU7LJU.js";

// app/components/helper.jsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\helper.jsx"
  );
  import.meta.hot.lastModified = "1751120554679.8384";
}
var copyFormLink = (formId, setCopiedId) => {
  const formUrl = `${window.location.origin}/form/${formId}`;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(formUrl).then(() => {
      setCopiedId(formId);
      setTimeout(() => {
        setCopiedId(null);
      }, 3e3);
    }).catch(() => fallbackCopy(formUrl, setCopiedId, formId));
  } else {
    fallbackCopy(formUrl, setCopiedId, formId);
  }
};
function fallbackCopy(text, setCopiedId, formId) {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setCopiedId(formId);
    setTimeout(() => setCopiedId(null), 3e3);
  } catch (err) {
    console.error("Failed to copy form link:", err);
    alert("Failed to copy link to clipboard");
  }
}

export {
  copyFormLink
};
//# sourceMappingURL=/build/_shared/chunk-YMOWICR5.js.map
