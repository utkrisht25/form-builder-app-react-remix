import React from 'react';

// Define standard validation patterns (can be moved to a constants file later)
const standardPatterns = [
  { label: 'None', value: '' },
  { label: 'Email Address', value: '^\\S+@\\S+\\.\\S+$' },
  { label: '10-digit Mobile Number (India)', value: '^[6-9]\\d{9}$' },
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
  const showLengthValidation = type === 'short-answer' || type === 'paragraph';
  const showPatternValidation = type === 'short-answer';

  if (!showLengthValidation && !showPatternValidation) {
    return null; // Don't render if no validation rules apply
  }

  return (
    <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Validation Rules</h4>
      {showLengthValidation && (
        <div className="flex items-center mb-2">
          <label className="text-sm text-gray-600 dark:text-gray-400 w-24">Min Length:</label>
          <input
            type="number"
            className="ml-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded 
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            value={minLength === undefined ? '' : minLength}
            onChange={onMinLengthChange}
            min="0"
          />
          <label className="text-sm text-gray-600 dark:text-gray-400 w-24 ml-4">Max Length:</label>
          <input
            type="number"
            className="ml-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded 
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            value={maxLength === undefined ? '' : maxLength}
            onChange={onMaxLengthChange}
            min="0"
          />
        </div>
      )}
      {showPatternValidation && (
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 dark:text-gray-400 mb-1">Standard Patterns:</label>
          <select
            className="block appearance-none w-full bg-white border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-2"
            value={pattern || ''}
            onChange={onStandardPatternSelect}
          >
            {standardPatterns.map((p) => (
              <option key={p.label} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          <label className="text-sm text-gray-600 dark:text-gray-400 mb-1">Custom Pattern (Regex):</label>
          <input
            type="text"
            className="flex-grow p-1 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 outline-none text-gray-700 dark:text-white bg-white dark:bg-gray-700"
            value={pattern || ''}
            onChange={onPatternChange}
            placeholder="e.g., ^\\S+@\\S+\\.\\S+$ for email"
          />
        </div>
      )}
    </div>
  );
}

export default ValidationRules;