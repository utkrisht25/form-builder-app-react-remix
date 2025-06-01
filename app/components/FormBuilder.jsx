import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from '@remix-run/react';
import { useSelector, useDispatch } from 'react-redux';
import ThemeToggle from './ThemeToggle';
import FieldTypes from './FieldTypes';
import FormCanvas from './FormCanvas';
import {
  setInitialForm,
  updateFormDetails,
  addQuestion,
  removeQuestion,
  updateQuestion,
  reorderQuestions,
} from '../store/formSlice.js';

// Accept formId as a prop, with a fallback to useParams if not provided
function FormBuilder({ formId: propFormId }) {
  const formTitle = useSelector((state) => state.form.title);
  const formDescription = useSelector((state) => state.form.description);
  const questions = useSelector((state) => state.form.questions);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Use propFormId if available, otherwise get from useParams
  const params = useParams();
  const currentFormId = propFormId || params.formId;


  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  useEffect(() => {
    if (currentFormId) { // Use currentFormId here
      const forms = JSON.parse(localStorage.getItem('forms') || '[]');
      const existingForm = forms.find(form => form.id === currentFormId); // Use currentFormId
      if (existingForm) {
        dispatch(setInitialForm(existingForm));
      } else {
        console.warn(`Form with ID ${currentFormId} not found. Navigating to new form.`);
        navigate('/form-builder');
      }
    } else {
      dispatch(setInitialForm({ title: 'Untitled form', description: '', fields: [] }));
    }
  }, [currentFormId, navigate, dispatch]); // Dependency array updated


  const handleCanvasDragOver = (e) => {
    e.preventDefault();
  };

  const handleCanvasDrop = (e) => {
    e.preventDefault();
    const fieldType = e.dataTransfer.getData('fieldType');
    if (fieldType) {
      dispatch(addQuestion({
        id: `q-${Date.now()}-${Math.random()}`,
        title: 'Untitled Question',
        type: fieldType,
        required: false,
        options: (fieldType === 'multiple-choice' || fieldType === 'checkboxes' || fieldType === 'dropdown' || fieldType === 'radio')
          ? [{ id: `opt-${Date.now()}-1`, text: 'Option 1' }]
          : [],
      }));
    }
  };

  const handleQuestionDragStart = (e, index) => {
    dragItem.current = index;
    e.dataTransfer.effectAllowed = "move";
  };

  const handleQuestionDragOver = (e, index) => {
    e.preventDefault();
    dragOverItem.current = index;
  };

  const handleQuestionDrop = (e, dropIndex) => {
    e.preventDefault();
    const draggedIndex = dragItem.current;
    const droppedOverIndex = dragOverItem.current;

    if (draggedIndex !== null && droppedOverIndex !== null && draggedIndex !== droppedOverIndex) {
      dispatch(reorderQuestions({ draggedIndex, droppedOverIndex }));
      dragItem.current = null;
      dragOverItem.current = null;
    }
  };

  const handleSaveForm = () => {
    let forms = JSON.parse(localStorage.getItem('forms') || '[]');

    const currentFormData = {
      title: formTitle,
      description: formDescription,
      fields: questions,
    };

    if (currentFormId) { // Use currentFormId here
      const formIndex = forms.findIndex(form => form.id === currentFormId); // Use currentFormId
      if (formIndex > -1) {
        forms[formIndex] = {
          ...forms[formIndex],
          ...currentFormData,
          updatedAt: new Date().toISOString(),
        };
        console.log('Form updated successfully!');
      } else {
        console.warn('Form not found for update, creating new one.');
        const newFormId = `form-${Date.now()}`;
        forms.push({ ...currentFormData, id: newFormId, createdAt: new Date().toISOString() });
        console.log('New form created as fallback!');
      }
    } else {
      const newFormId = `form-${Date.now()}`;
      forms.push({ ...currentFormData, id: newFormId, createdAt: new Date().toISOString() });
      console.log('New form saved successfully!');
    }

    localStorage.setItem('forms', JSON.stringify(forms));
    navigate('/');
  };

  const handleDeleteForm = () => {
    if (window.confirm("Are you sure you want to delete this form?")) {
      let forms = JSON.parse(localStorage.getItem('forms') || '[]');
      const updatedForms = forms.filter(form => form.id !== currentFormId); // Use currentFormId
      localStorage.setItem('forms', JSON.stringify(updatedForms));
      console.log('Form deleted successfully!');
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ThemeToggle />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Field Types Section */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white transition-colors">Form Elements</h2>
            <FieldTypes />
          </div>
        </div>

        {/* Form Canvas Section */}
        <div className="md:col-span-3">
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-[600px] transition-colors"
            onDragOver={handleCanvasDragOver}
            onDrop={handleCanvasDrop}
          >
            {/* Form Title Input */}
            <input
              type="text"
              value={formTitle}
              onChange={(e) => dispatch(updateFormDetails({ title: e.target.value }))}
              placeholder="Form Title"
              className="w-full text-3xl font-bold mb-4 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent dark:text-white transition-colors"
            />

            {/* Form Description Input */}
            <textarea
              value={formDescription}
              onChange={(e) => dispatch(updateFormDetails({ description: e.target.value }))}
              placeholder="Form Description"
              className="w-full text-gray-600 dark:text-gray-300 mb-8 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent resize-none transition-colors"
              rows="2"
            />

            {/* Form Canvas for Questions */}
            <FormCanvas
              questions={questions}
              onQuestionDragStart={handleQuestionDragStart}
              onQuestionDragOver={handleQuestionDragOver}
              onQuestionDrop={handleQuestionDrop}
              onUpdateQuestion={(id, updates) => dispatch(updateQuestion({ id, updates }))}
              onRemoveQuestion={(id) => dispatch(removeQuestion(id))}
            />

            {/* Save and Preview Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <button
                onClick={handleSaveForm}
                className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Save Form
              </button>
              <button
                onClick={() => navigate(`/form-preview/${currentFormId}`)}
                className="px-6 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBuilder;
// Note: Ensure that the Redux store and actions are correctly set up in your application.
// This code assumes you have a Redux store set up with the necessary actions and reducers.