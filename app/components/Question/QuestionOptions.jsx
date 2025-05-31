import { useDispatch } from 'react-redux';
import OptionItem from '../OptionItem';
import { addOption } from '../../store/formSlice';

function QuestionOptions({ question }) {
  const dispatch = useDispatch();
  const { id, type, options } = question;

  const handleAddOption = () => {
    const newOption = { id: `opt-${Date.now()}-${Math.random()}`, text: `Option ${options.length + 1}` };
    dispatch(addOption({ questionId: id, newOption }));
  };

  return (
    <div className="mt-2">
      {options.map((option) => (
        <OptionItem
          key={option.id}
          questionId={id}
          optionId={option.id}
          type={type}
        />
      ))}
      <button
        onClick={handleAddOption}
        className="mt-2 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
      >
        <span className="mr-2 text-xl">+</span> Add option
      </button>
    </div>
  );
}

export default QuestionOptions;