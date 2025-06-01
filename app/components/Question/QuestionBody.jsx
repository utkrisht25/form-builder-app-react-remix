import React from 'react';
import QuestionOptions from './QuestionOptions';

function QuestionBody({ question, onUpdate }) {
  // For types that need options (multiple-choice, checkboxes, dropdown, radio)
  const hasOptions = ['multiple-choice', 'checkboxes', 'dropdown', 'radio'].includes(question.type);

  return (
    <div className="mb-4">
      {/* Show options component for question types that need options */}      {hasOptions ? (
        <QuestionOptions
          question={question}
        />
      ) : (
        // Show placeholder input for other question types
        <div className="mt-2">
          <input
            type={question.type === 'date' ? 'date' : 'text'}
            disabled
            placeholder={
              question.type === 'short-answer'
                ? 'Short answer text'
                : question.type === 'paragraph'
                ? 'Long answer text'
                : 'Answer'
            }
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed transition-colors"
          />
        </div>
      )}
    </div>
  );
}

export default QuestionBody;