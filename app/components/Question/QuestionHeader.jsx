import React from 'react';

// Define available question types for the dropdown (can be imported from a central place later)
export const questionTypes = [
  { id: 'short-answer', label: 'Short answer' },
  { id: 'paragraph', label: 'Paragraph' },
  { id: 'multiple-choice', label: 'Multiple Choice' },
  { id: 'checkboxes', label: 'Checkboxes' },
  { id: 'dropdown', label: 'Drop-down' },
  { id: 'date', label: 'Date' },
  { id: 'radio', label: 'Radio' },
];

function QuestionHeader({ title, type, onTitleChange, onTypeChange, onRemove }) {
  return (
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1 mr-4">
        {/* Question Title Input */}
        <input
          type="text"          value={title || ''}
          onChange={onTitleChange}
          placeholder="Question Title"
          className="w-full text-lg font-semibold mb-2 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent dark:text-white transition-colors"
        />

        {/* Question Type Selector */}
        <select
          value={type}
          onChange={onTypeChange}
          className="text-sm px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          {questionTypes.map((questionType) => (
            <option key={questionType.id} value={questionType.id}>
              {questionType.label}
            </option>
          ))}
        </select>
      </div>

      
    </div>
  );
}

export default QuestionHeader;