import { useDispatch } from 'react-redux';
import OptionItem from '../OptionItem';
import { addOption, removeOption } from '../../store/formSlice';

function QuestionOptions({ question }) {
  const dispatch = useDispatch();
  
  if (!question) {
    return null;
  }

  const { id, type, options = [] } = question;

  const handleAddOption = () => {
    const newOption = { id: `opt-${Date.now()}-${Math.random()}`, text: `Option ${options.length + 1}` };
    dispatch(addOption({ questionId: id, newOption }));
  };

  return (
    <div className="space-y-2 mt-2">
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full border border-gray-400 dark:border-gray-500 flex-shrink-0" />
          <OptionItem
            questionId={id}
            optionId={option.id}
            type={type}
          />
          <button            onClick={() => dispatch(removeOption({ questionId: id, optionIdToRemove: option.id }))}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
            aria-label="Remove option"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ))}
      <button
        onClick={handleAddOption}
        className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        <span className="mr-2 text-xl">+</span> Add option
      </button>
    </div>
  );
}

export default QuestionOptions;