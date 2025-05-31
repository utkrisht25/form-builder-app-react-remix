import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import Redux hooks
import QuestionComponent from './QuestionComponent';

// Import the reorderQuestions action
import { reorderQuestions } from '../store/formSlice';

function FormCanvas({
  onDragOver, // Still needed for dropping new field types from sidebar
  onDrop,     // Still needed for dropping new field types from sidebar
  onQuestionDragStart, // Passed from FormBuilder for reordering
  onQuestionDragOver,  // Passed from FormBuilder for reordering
  onQuestionDrop       // Passed from FormBuilder for reordering
}) {
  // Select questions array directly from Redux store
  const questions = useSelector((state) => state.form.questions);

  return (
    <div
      className="min-h-96 border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50"
      onDragOver={onDragOver} // For new field types from sidebar
      onDrop={onDrop}         // For new field types from sidebar
    >
      {questions.length === 0 ? (
        <p className="text-gray-500 text-center py-10">Drag and drop form fields here to add questions</p>
      ) : (
        questions.map((question, index) => (
          <QuestionComponent
            key={question.id}
            questionId={question.id} // Pass only the questionId, QuestionComponent will fetch its own data
            index={index} // Pass the current index for reordering
            onDragStart={onQuestionDragStart} // Pass the reordering drag start handler
            onDragOver={onQuestionDragOver}   // Pass the reordering drag over handler
            onDrop={onQuestionDrop}           // Pass the reordering drop handler
          />
        ))
      )}
    </div>
  );
}

export default FormCanvas;