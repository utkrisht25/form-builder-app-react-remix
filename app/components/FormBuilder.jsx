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
import { formTemplates } from '../data/formTemplates';

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
    if (currentFormId) {
      const forms = JSON.parse(localStorage.getItem('forms') || '[]');
      const existingForm = forms.find(form => form.id === currentFormId);
      if (existingForm) {
        // If it's a template-based form and we're loading it for the first time,
        // make sure we have all the template questions
        if (existingForm.isTemplate && existingForm.originalTemplate) {
          const template = formTemplates[existingForm.originalTemplate];
          if (template) {
            // Ensure all template questions exist
            const templateQuestionIds = template.fields.map(f => f.id);
            const existingQuestionIds = existingForm.fields.map(f => f.id);
            const missingTemplateQuestions = template.fields.filter(
              f => !existingQuestionIds.includes(f.id)
            );
            
            // Add any missing template questions at the beginning
            if (missingTemplateQuestions.length > 0) {
              existingForm.fields = [...missingTemplateQuestions, ...existingForm.fields];
            }
          }
        }
        dispatch(setInitialForm(existingForm));
      } else {
        console.warn(`Form with ID ${currentFormId} not found. Navigating to new form.`);
        navigate('/form-builder');
      }
    } else {
      dispatch(setInitialForm({ title: 'Untitled form', description: '', fields: [] }));
    }
  }, [currentFormId, navigate, dispatch]);


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

  const saveFormToStorage = () => {
    try {
      let forms = JSON.parse(localStorage.getItem('forms') || '[]');
      const currentForm = forms.find(f => f.id === currentFormId);

      const currentFormData = {
        title: formTitle,
        description: formDescription,
        fields: questions,
      };

      let newFormId = currentFormId;

      if (currentFormId) {
        const formIndex = forms.findIndex(form => form.id === currentFormId);
        if (formIndex > -1) {
          // Preserve template status and original template reference
          forms[formIndex] = {
            ...forms[formIndex],
            ...currentFormData,
            updatedAt: new Date().toISOString(),
            // If it was a template form, ensure template questions remain
            fields: currentForm?.isTemplate
              ? ensureTemplateQuestions(currentFormData.fields, forms[formIndex].originalTemplate)
              : currentFormData.fields,
          };
          console.log('Form updated successfully!');
        } else {
          console.warn('Form not found for update, creating new one.');
          newFormId = `form-${Date.now()}`;
          forms.push({
            ...currentFormData,
            id: newFormId,
            createdAt: new Date().toISOString()
          });
          console.log('New form created as fallback!');
        }
      } else {
        newFormId = `form-${Date.now()}`;
        forms.push({
          ...currentFormData,
          id: newFormId,
          createdAt: new Date().toISOString()
        });
        console.log('New form saved successfully!');
      }

      localStorage.setItem('forms', JSON.stringify(forms));
      return { success: true, formId: newFormId };
    } catch (error) {
      console.error('Error saving form:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSaveForm = () => {
    const result = saveFormToStorage();
    if (result.success) {
      navigate('/');
    } else {
      console.error('Failed to save form:', result.error);
    }
  };

  const handlePreview=()=>  {
    const result = saveFormToStorage();
    if (result.success) {
      navigate(`/form-preview/${result.formId}`);
    } else {
      console.error('Failed to save form:', result.error);
    }
  }

  // Helper function to ensure template questions are preserved
  const ensureTemplateQuestions = (currentFields, templateType) => {
    if (!templateType) return currentFields;
    
    const template = formTemplates[templateType];
    if (!template) return currentFields;

    // Get template question IDs
    const templateQuestionIds = template.fields.map(f => f.id);
    
    // Filter out any existing template questions that were modified
    const modifiedTemplateQuestions = currentFields.filter(
      f => templateQuestionIds.includes(f.id)
    );

    // Get template questions that weren't modified
    const unmodifiedTemplateQuestions = template.fields.filter(
      f => !modifiedTemplateQuestions.find(mf => mf.id === f.id)
    );

    // Combine unmodified template questions with all current fields
    return [...unmodifiedTemplateQuestions, ...currentFields];
  };


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900 transition-colors">
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
              className="w-full text-gray-600  mb-8 p-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none bg-transparent resize-none transition-colors dark:text-white"
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
                onClick={handlePreview}
                className="px-6 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
              >
                Preview
              </button>
            </div>
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

