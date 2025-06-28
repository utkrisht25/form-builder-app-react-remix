// Helper function to copy form link to clipboard
export const copyFormLink = (formId, setCopiedId) => {
    const formUrl = `${window.location.origin}/form/${formId}`;
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(formUrl)
            .then(() => {
                setCopiedId(formId);
                // Reset the copied state after 3 seconds
                setTimeout(() => {
                    setCopiedId(null);
                }, 3000);
            })
            .catch(() => fallbackCopy(formUrl, setCopiedId, formId));
    } else {
        fallbackCopy(formUrl, setCopiedId, formId);
    }
};

function fallbackCopy(text, setCopiedId, formId) {
    try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        // This old-school method tells the browser to copy whatever is selected
        document.body.removeChild(textarea);
        setCopiedId(formId);
        setTimeout(() => setCopiedId(null), 3000);
    } catch (err) {
        console.error('Failed to copy form link:', err);
        alert('Failed to copy link to clipboard');
    }
}