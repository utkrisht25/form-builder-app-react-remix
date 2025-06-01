// Helper function to copy form link to clipboard
export const copyFormLink = (formId, setCopiedId) => {
    const baseUrl = window.location.origin;
    const formUrl = `${baseUrl}/form/${formId}`;
    
    navigator.clipboard.writeText(formUrl).then(() => {
        setCopiedId(formId);
        // Reset the copied state after 2 seconds
        setTimeout(() => setCopiedId(null), 2000);
    })
    .catch(err => {
        console.error('Failed to copy form link:', err);
        alert('Failed to copy link to clipboard');
    });
};

export const showNotification = (message, type = 'success') => {
    // You can implement a more sophisticated notification system here
    const notificationClasses = {
        success: 'bg-green-500 dark:bg-green-600',
        error: 'bg-red-500 dark:bg-red-600',
        info: 'bg-blue-500 dark:bg-blue-600'
    };

    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white 
                            shadow-lg transition-all duration-300 transform translate-y-0 
                            ${notificationClasses[type]}`;
    notification.textContent = message;

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.transform = 'translateY(-100%)';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
};