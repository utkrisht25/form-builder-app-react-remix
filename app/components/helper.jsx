// Helper function to copy form link to clipboard
export const copyFormLink = (formId, setCopiedId) => {
    const formUrl = `${window.location.origin}/form/${formId}`;
    navigator.clipboard.writeText(formUrl)
        .then(() => {
            setCopiedId(formId);
            // Reset the copied state after 3 seconds
            setTimeout(() => {
                setCopiedId(null);
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy form link:', err);
            alert('Failed to copy link to clipboard');
        });
};