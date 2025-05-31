import React from 'react';
import QuestionOptions from './QuestionOptions'; // Will create this next

function QuestionBody({ question }) {
  const { type, options } = question;

  const showOptions = type === 'multiple-choice' || type === 'checkboxes' || type === 'dropdown' || type === 'radio';

  return (
    <div className="mb-4">
      {type === 'short-answer' && (
        <input
          type="text"
          placeholder="Short answer text"
          className="w-full p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-700"
        />
      )}
      {type === 'paragraph' && (
        <textarea
          placeholder="Long answer text"
          className="w-full p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-700 resize-y"
          rows="3"
        ></textarea>
      )}
      {type === 'date' && (
        <input
          type="date"
          className="w-full p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-700"
          disabled
        />
      )}

      {/* Render QuestionOptions if applicable */}
      {showOptions && (
        <QuestionOptions question={question} />
      )}
    </div>
  );
}

export default QuestionBody;