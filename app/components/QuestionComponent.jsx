
import { useSelector , useDispatch } from 'react-redux';
import { IoMoveOutline } from 'react-icons/io5'; // IoTrashOutline moved to QuestionFooter

// Import new sub-components from the 'Question' folder
import QuestionHeader from './Question/QuestionHeader';
import QuestionBody from './Question/QuestionBody';
import QuestionFooter from './Question/QuestionFooter';
import ValidationRules from './Question/ValidationRules'; // Now inside the Question folder

// Import actions from formSlice
import {
    updateQuestion,
    removeQuestion,
    // addOption, removeOptionAction, updateOption are dispatched within QuestionOptions and OptionItem
} from '../store/formSlice'

function QuestionComponent({
  questionId,
  onDragStart,
  onDragOver,
  onDrop,
  index
}) {
  const dispatch = useDispatch();

  const question = useSelector((state) => state.form.questions.find(q => q.id === questionId));

  if (!question) {
    return null;
  }
  // Destructure all necessary properties from the question object
  const { id, title, type, required, options = [], minLength, maxLength, pattern } = question;

  // Handlers to be passed down to sub-components, dispatching Redux actions
  const handleTitleChange = (e) => {
    dispatch(updateQuestion({ ...question, title: e.target.value }));
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    const newOptions = (newType === 'multiple-choice' || newType === 'checkboxes' || newType === 'dropdown' || newType === 'radio')
      ? (options.length > 0 ? options : [{ id: `opt-${Date.now()}-1`, text: 'Option 1' }])
      : [];
    const updatedQuestion = { ...question, type: newType, options: newOptions };
    // Clear validation rules that might not apply to the new type
    if (newType !== 'short-answer' && newType !== 'paragraph') {
      delete updatedQuestion.minLength;
      delete updatedQuestion.maxLength;
    }
    if (newType !== 'short-answer') { // Pattern typically only for short-answer
      delete updatedQuestion.pattern;
    }
    dispatch(updateQuestion(updatedQuestion));
  };

  const handleRequiredToggle = () => {
    dispatch(updateQuestion({ ...question, required: !required }));
  };

  const handleDeleteQuestion = () => {
    dispatch(removeQuestion(id));
  };

  const handleMinLengthChange = (e) => {
    const value = e.target.value === '' ? undefined : parseInt(e.target.value, 10);
    dispatch(updateQuestion({ ...question, minLength: value }));
  };

  const handleMaxLengthChange = (e) => {
    const value = e.target.value === '' ? undefined : parseInt(e.target.value, 10);
    dispatch(updateQuestion({ ...question, maxLength: value }));
  };

  const handlePatternChange = (e) => {
    dispatch(updateQuestion({ ...question, pattern: e.target.value }));
  };

  const handleStandardPatternSelect = (e) => {
    const selectedPattern = e.target.value;
    dispatch(updateQuestion({ ...question, pattern: selectedPattern }));
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-300 relative group"
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
    >
      {/* Drag handle */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full p-1 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <IoMoveOutline size={18} className="text-gray-600" />
      </div>

      {/* Question Header */}
      <QuestionHeader
        title={title}
        type={type}
        onTitleChange={handleTitleChange}
        onTypeChange={handleTypeChange}
      />

      {/* Question Body (Input fields or Options) */}
      {/* QuestionBody now directly receives the question object */}
      <QuestionBody question={question} />

      {/* Validation Rules Section */}
      <ValidationRules
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        onMinLengthChange={handleMinLengthChange}
        onMaxLengthChange={handleMaxLengthChange}
        onPatternChange={handlePatternChange}
        onStandardPatternSelect={handleStandardPatternSelect}
      />

      {/* Question Footer (Required toggle and Delete button) */}
      <QuestionFooter
        questionId={id}
        required={required}
        onRequiredToggle={handleRequiredToggle}
        onDeleteQuestion={handleDeleteQuestion}
      />
    </div>
  );
}

export default QuestionComponent;
