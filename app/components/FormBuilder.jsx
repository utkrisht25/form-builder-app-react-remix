import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from '@remix-run/react';
import { useSelector, useDispatch } from 'react-redux';

import FieldTypes from './FieldTypes';
import FormCanvas from './FormCanvas';
import {
  setInitialForm,
  updateFormDetails,
  addQuestion,
  removeQuestion,
  updateQuestion,
  reorderQuestions,
} from '../store/formSlice.js'; // Ensure this path is correct

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
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0 md:mr-4 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Drag to Add</h2>
          <FieldTypes />
        </aside>

        <main className="flex-1 min-w-0">
          <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <input
              type="text"
              className="text-3xl font-bold text-gray-800 mb-2 p-2 border-b-2 border-transparent focus:border-blue-500 outline-none w-full"
              value={formTitle}
              onChange={(e) => dispatch(updateFormDetails({ title: e.target.value }))}
              placeholder="Untitled form"
            />
            <textarea
              className="w-full p-2 border-b-2 border-transparent focus:border-blue-500 outline-none text-gray-600 resize-none"
              rows="1"
              value={formDescription}
              onChange={(e) => dispatch(updateFormDetails({ description: e.target.value }))}
              placeholder="Form description"
            />
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-300">
            <label className="block text-gray-700 text-lg font-semibold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-gray-800"
              placeholder="Valid email address"
              readOnly
            />
            <p className="text-xs text-gray-500 mt-1">
              This form is collecting email addresses. <span className="text-blue-600 cursor-pointer">Change settings</span>
            </p>
          </div>

          <FormCanvas
            onDragOver={handleCanvasDragOver}
            onDrop={handleCanvasDrop}
            onQuestionDragStart={handleQuestionDragStart}
            onQuestionDragOver={handleQuestionDragOver}
            onQuestionDrop={handleQuestionDrop}
          />

          <div className="mt-6 flex justify-end gap-4">
            {currentFormId && ( // Use currentFormId here
              <>
                <button
                  onClick={() => navigate(`/form-preview/${currentFormId}`)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-colors text-lg"
                >
                  Preview Form
                </button>
                <button
                  onClick={handleDeleteForm}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-colors text-lg"
                >
                  Delete Form
                </button>
              </>
            )}
            <button
              onClick={handleSaveForm}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-colors text-lg"
            >
              {currentFormId ? 'Update Form' : 'Save New Form'}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FormBuilder;
