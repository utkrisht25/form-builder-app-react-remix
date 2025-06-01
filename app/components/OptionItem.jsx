import { useSelector, useDispatch } from 'react-redux'; // Import Redux hooks

// Import actions from your formSlice
import { updateOption, removeOption } from '../store/formSlice';

function OptionItem({ questionId, optionId, type }) { // Now receives questionId and optionId
  const dispatch = useDispatch();

  // Select the specific option from the Redux store based on questionId and optionId
  const option = useSelector((state) => {
    const question = state.form.questions.find(q => q.id === questionId);
    return question ? question.options.find(opt => opt.id === optionId) : null;
  });

  // If option is not found (e.g., deleted by another action), render nothing
  if (!option) {
    return null;
  }

  const handleOptionTextChange = (e) => {
    dispatch(updateOption({ questionId, updatedOption: { ...option, text: e.target.value } }));
  };

  const handleDeleteOption = () => {
    dispatch(removeOption({ questionId, optionIdToRemove: option.id }));
  };

  // Determine the input type based on the question type
  const inputType = type === 'multiple-choice' ? 'radio' : 'checkbox';

  return (
    <div className="flex items-center mb-2">
      {/* Input type (radio or checkbox) */}
      <input type={inputType} className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" disabled />

      {/* Option Text Input */}
      <input
        type="text"
        className="flex-grow p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-800 mr-2"
        value={option.text}
        onChange={handleOptionTextChange}
        placeholder={`Option ${option.text}`}
      />

      {/* Delete Option Button */}
      {/* Only show delete button if there's more than one option */}
      {type !== 'dropdown' && type !== 'radio' && option.text !== 'Option 1' && ( // Added conditions to prevent deleting 'Option 1' or in dropdown/radio
        <button
          onClick={handleDeleteOption}
          className="text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
        </button>
      )}
    </div>
  );
}

export default OptionItem;