import React from 'react';

// Define available question types for the dropdown (can be imported from a central place later)
const questionTypes = [
  { id: 'short-answer', label: 'Short answer' },
  { id: 'paragraph', label: 'Paragraph' },
  { id: 'multiple-choice', label: 'Multiple choice' },
  { id: 'checkboxes', label: 'Checkboxes' },
  { id: 'dropdown', label: 'Drop-down' },
  { id: 'date', label: 'Date' },
  { id: 'radio', label: 'Radio Button' },
];

function QuestionHeader({ title, type, onTitleChange, onTypeChange }) {
  return (
    <div className="flex justify-between items-start mb-4">
      {/* Question Title Input */}
      <input
        type="text"
        className="text-lg font-semibold text-gray-800 p-2 border-b-2 border-transparent focus:border-blue-500 outline-none flex-grow mr-4"
        value={title}
        onChange={onTitleChange}
        placeholder="Untitled Question"
      />

      {/* Question Type Selector */}
      <div className="relative inline-block text-gray-700">
        <select
          className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          value={type}
          onChange={onTypeChange}
        >
          {questionTypes.map((qType) => (
            <option key={qType.id} value={qType.id}>
              {qType.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default QuestionHeader;