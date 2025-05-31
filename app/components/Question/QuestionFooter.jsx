import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';

function QuestionFooter({ questionId, required, onRequiredToggle, onDeleteQuestion }) {
  return (
    <div className="border-t border-gray-200 pt-4 flex justify-end items-center">
      <label className="flex items-center cursor-pointer mr-4">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={required}
          onChange={onRequiredToggle}
        />
        <span className="ml-2 text-gray-700">Required</span>
      </label>
      <button
        onClick={() => onDeleteQuestion(questionId)} // Pass questionId to delete handler
        className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <IoTrashOutline size={22} />
      </button>
    </div>
  );
}

export default QuestionFooter;