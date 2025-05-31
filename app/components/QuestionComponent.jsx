// import React from 'react';
// import { useSelector , useDispatch } from 'react-redux';
// import { IoTrashOutline, IoMoveOutline } from 'react-icons/io5';
// import OptionItem from './OptionItem';

// // import actions from formslice
// import {
//     updateQuestion,
//     removeQuestion,
//     addOption,
//     removeOption as removeOptionAction,
//     updateOption
// } from '../store/formSlice'

// // Define available question types for the dropdown
// const questionTypes = [
//   { id: 'short-answer', label: 'Short answer' },
//   { id: 'paragraph', label: 'Paragraph' },
//   { id: 'multiple-choice', label: 'Multiple choice' },
//   { id: 'checkboxes', label: 'Checkboxes' },
//   { id: 'dropdown', label: 'Drop-down' },
//   { id: 'date', label: 'Date' },
//   { id: 'radio', label: 'Radio Button' },
// ];

// function QuestionComponent({
//   questionId,
//   onDragStart,
//   onDragOver,
//   onDrop,
//   index
// }) {
//   const dispatch = useDispatch();

//   const question = useSelector((state) => state.form.questions.find(q => q.id === questionId));

//   if (!question) {
//     return null;
//   }
//   // Destructure new validation properties with defaults
//   const { id, title, type, required, options = [], minLength, maxLength, pattern } = question;

//   const handleTitleChange = (e) => {
//     dispatch(updateQuestion({ ...question, title: e.target.value }));
//   };

//   const handleTypeChange = (e) => {
//     const newType = e.target.value;
//     const newOptions = (newType === 'multiple-choice' || newType === 'checkboxes' || newType === 'dropdown')
//       ? (options.length > 0 ? options : [{ id: `opt-${Date.now()}-1`, text: 'Option 1' }])
//       : [];
//     // When type changes, clear validation rules that might not apply
//     const updatedQuestion = { ...question, type: newType, options: newOptions };
//     if (newType !== 'short-answer' && newType !== 'paragraph') {
//       delete updatedQuestion.minLength;
//       delete updatedQuestion.maxLength;
//       delete updatedQuestion.pattern;
//     }
//     dispatch(updateQuestion(updatedQuestion));
//   };

//   const handleRequiredToggle = () => {
//     dispatch(updateQuestion({ ...question, required: !required }));
//   };

//   const handleAddOption = () => {
//     const newOption = { id: `opt-${Date.now()}-${Math.random()}`, text: `Option ${options.length + 1}` };
//     dispatch(addOption({ questionId: id, newOption }));
//   };

//   const handleDeleteQuestion = () => {
//     dispatch(removeQuestion(id));
//   };

//   // Handlers for validation inputs
//   const handleMinLengthChange = (e) => {
//     const value = e.target.value === '' ? undefined : parseInt(e.target.value, 10);
//     dispatch(updateQuestion({ ...question, minLength: value }));
//   };

//   const handleMaxLengthChange = (e) => {
//     const value = e.target.value === '' ? undefined : parseInt(e.target.value, 10);
//     dispatch(updateQuestion({ ...question, maxLength: value }));
//   };

//   const handlePatternChange = (e) => {
//     dispatch(updateQuestion({ ...question, pattern: e.target.value }));
//   };

//   const showOptions = type === 'multiple-choice' || type === 'checkboxes' || type === 'dropdown';
//   const showLengthValidation = type === 'short-answer' || type === 'paragraph';
//   const showPatternValidation = type === 'short-answer'; // Typically for email/phone patterns

//   return (
//     <div
//       className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-300 relative group"
//       draggable
//       onDragStart={(e) => onDragStart(e, index)}
//       onDragOver={(e) => onDragOver(e, index)}
//       onDrop={(e) => onDrop(e, index)}
//     >
//       {/* Drag handle */}
//       <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full p-1 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity z-10">
//         <IoMoveOutline size={18} className="text-gray-600" />
//       </div>

//       <div className="flex justify-between items-start mb-4">
//         {/* Question Title Input */}
//         <input
//           type="text"
//           className="text-lg font-semibold text-gray-800 p-2 border-b-2 border-transparent focus:border-blue-500 outline-none flex-grow mr-4"
//           value={title}
//           onChange={handleTitleChange}
//           placeholder="Untitled Question"
//         />

//         {/* Question Type Selector */}
//         <div className="relative inline-block text-gray-700">
//           <select
//             className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//             value={type}
//             onChange={handleTypeChange}
//           >
//             {questionTypes.map((qType) => (
//               <option key={qType.id} value={qType.id}>
//                 {qType.label}
//               </option>
//             ))}
//           </select>
//           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//             <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//               <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Render based on question type */}
//       <div className="mb-4">
//         {type === 'short-answer' && (
//           <input
//             type="text"
//             placeholder="Short answer text"
//             className="w-full p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-700"
//           />
//         )}
//         {type === 'paragraph' && (
//           <textarea
//             placeholder="Long answer text"
//             className="w-full p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-700 resize-y"
//             rows="3"
//           ></textarea>
//         )}
//         {type === 'date' && (
//           <input
//             type="date"
//             className="w-full p-2 border-b border-gray-300 focus:border-blue-500 outline-none text-gray-700"
//             disabled
//           />
//         )}

//         {/* Options for Multiple Choice, Checkboxes, Dropdown */}
//         {showOptions && (
//           <div className="mt-2">
//             {options.map((option) => (
//               <OptionItem
//                 key={option.id}
//                 questionId={id}
//                 optionId={option.id}
//                 type={type}
//               />
//             ))}
//             <button
//               onClick={handleAddOption}
//               className="mt-2 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
//             >
//               <span className="mr-2 text-xl">+</span> Add option
//             </button>
//           </div>
//         )}

//         {/* Validation Inputs (Conditional) */}
//         {(showLengthValidation || showPatternValidation) && (
//           <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
//             <h4 className="text-sm font-semibold mb-2 text-gray-700">Validation Rules</h4>
//             {showLengthValidation && (
//               <div className="flex items-center mb-2">
//                 <label className="text-sm text-gray-600 w-24">Min Length:</label>
//                 <input
//                   type="number"
//                   className="w-20 p-1 border border-gray-300 rounded-md focus:border-blue-500 outline-none text-gray-700"
//                   value={minLength === undefined ? '' : minLength}
//                   onChange={handleMinLengthChange}
//                   min="0"
//                 />
//                 <label className="text-sm text-gray-600 w-24 ml-4">Max Length:</label>
//                 <input
//                   type="number"
//                   className="w-20 p-1 border border-gray-300 rounded-md focus:border-blue-500 outline-none text-gray-700"
//                   value={maxLength === undefined ? '' : maxLength}
//                   onChange={handleMaxLengthChange}
//                   min="0"
//                 />
//               </div>
//             )}
//             {showPatternValidation && (
//               <div className="flex items-center">
//                 <label className="text-sm text-gray-600 w-24">Pattern (Regex):</label>
//                 <input
//                   type="text"
//                   className="flex-grow p-1 border border-gray-300 rounded-md focus:border-blue-500 outline-none text-gray-700"
//                   value={pattern || ''}
//                   onChange={handlePatternChange}
//                   placeholder="e.g., ^\\S+@\\S+\\.\\S+$ for email"
//                 />
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Footer options: Required and Delete */}
//       <div className="border-t border-gray-200 pt-4 flex justify-end items-center">
//         <label className="flex items-center cursor-pointer mr-4">
//           <input
//             type="checkbox"
//             className="form-checkbox h-5 w-5 text-blue-600"
//             checked={required}
//             onChange={handleRequiredToggle}
//           />
//           <span className="ml-2 text-gray-700">Required</span>
//         </label>
//         <button
//           onClick={handleDeleteQuestion}
//           className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
//         >
//           <IoTrashOutline size={22} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default QuestionComponent;































import React from 'react';
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
