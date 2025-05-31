import  { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from '@remix-run/react';
import { setInitialForm } from '~/store/formSlice';

function FormPreview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const formId = params.formId;

  // Select form data from Redux store
  const formTitle = useSelector(state => state.form.title);
  const formDescription = useSelector(state => state.form.description);
  const questions = useSelector(state => state.form.questions);

  // State to manage input values and errors for preview
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [previewMode, setPreviewMode] = useState('desktop'); // 'desktop', 'tablet', 'mobile'

  // Load form data when component mounts or formId changes
  useEffect(() => {
    if (formId) {
      const forms = JSON.parse(localStorage.getItem('forms') || '[]');
      const existingForm = forms.find(form => form.id === formId);
      if (existingForm) {
        dispatch(setInitialForm(existingForm));
        // Initialize formData with empty strings for all fields for preview
        const initialData = {};
        existingForm.fields.forEach(field => {
          if (field.type === 'checkboxes') {
            initialData[field.id] = [];
          } else {
            initialData[field.id] = '';
          }
        });
        setFormData(initialData);
        setFormErrors({}); // Clear errors on load
      } else {
        console.warn(`Form with ID ${formId} not found for preview.`);
        navigate('/'); // Go back to home if form not found
      }
    } else {
      navigate('/');
    }
  }, [formId, dispatch, navigate]);

  const handleInputChange = (questionId, value, type) => {
    setFormData(prev => {
      let newValue = value;
      if (type === 'checkboxes') {
        // For checkboxes, value is the option ID. Add/remove it from array
        const currentValues = prev[questionId] || [];
        if (currentValues.includes(value)) {
          newValue = currentValues.filter(item => item !== value);
        } else {
          newValue = [...currentValues, value];
        }
      }
      return { ...prev, [questionId]: newValue };
    });
    // Clear error for this field as user types
    setFormErrors(prev => ({ ...prev, [questionId]: '' }));
  };

  // Helper to determine CSS class for preview mode
  const getPreviewClasses = () => {
    switch (previewMode) {
      case 'tablet':
        return 'max-w-xl mx-auto shadow-lg'; // Tablet width
      case 'mobile':
        return 'max-w-sm mx-auto shadow-lg'; // Mobile width
      default:
        return 'max-w-3xl mx-auto shadow-lg'; // Desktop width
    }
  };

  // Enhanced validation logic
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate static Email field
    const emailValue = formData['emailField'] || '';
    if (!emailValue) {
      errors['emailField'] = 'Email is required.';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      errors['emailField'] = 'Please enter a valid email address.';
      isValid = false;
    }

    questions.forEach(q => {
      const value = formData[q.id];
      let questionHasError = false;

      // Required validation
      if (q.required) {
        if (q.type === 'checkboxes') {
          if (!value || value.length === 0) {
            errors[q.id] = `${q.title} is required. Please select at least one option.`;
            questionHasError = true;
          }
        } else if (!value || String(value).trim() === '') {
          errors[q.id] = `${q.title} is required.`;
          questionHasError = true;
        }
      }

      // Min/Max Length validation (for short-answer, paragraph)
      if (!questionHasError && (q.type === 'short-answer' || q.type === 'paragraph')) {
        const textValue = String(value || '');
        if (q.minLength !== undefined && textValue.length < q.minLength) {
          errors[q.id] = `${q.title} must be at least ${q.minLength} characters long.`;
          questionHasError = true;
        }
        if (q.maxLength !== undefined && textValue.length > q.maxLength) {
          errors[q.id] = `${q.title} must be at most ${q.maxLength} characters long.`;
          questionHasError = true;
        }
      }

      // Pattern validation (for short-answer)
      if (!questionHasError && q.type === 'short-answer' && q.pattern) {
        try {
          const regex = new RegExp(q.pattern);
          if (!regex.test(String(value || ''))) {
            errors[q.id] = `${q.title} does not match the required pattern.`;
            questionHasError = true;
          }
        } catch (e) {
          console.error("Invalid regex pattern:", q.pattern, e);
          errors[q.id] = `Invalid pattern defined for ${q.title}.`;
          questionHasError = true;
        }
      }

      if (questionHasError) {
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form is valid and ready to submit! (In preview mode, no actual submission)');
      console.log('Form Data:', formData);
    } else {
      alert('Please fix the errors in the form.');
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center">
        <button
          onClick={() => navigate(`/edit-form/${formId}`)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md shadow-md transition-colors"
        >
          &larr; Back to Builder
        </button>

        {/* Preview Mode Controls */}
        <div className="flex bg-white rounded-md shadow-md p-1">
          <button
            onClick={() => setPreviewMode('desktop')}
            className={`py-2 px-4 rounded-md text-sm font-semibold ${previewMode === 'desktop' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Desktop
          </button>
          <button
            onClick={() => setPreviewMode('tablet')}
            className={`py-2 px-4 rounded-md text-sm font-semibold ${previewMode === 'tablet' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Tablet
          </button>
          <button
            onClick={() => setPreviewMode('mobile')}
            className={`py-2 px-4 rounded-md text-sm font-semibold ${previewMode === 'mobile' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className={`bg-white rounded-lg p-6 ${getPreviewClasses()} transition-all duration-300`}>
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{formTitle}</h1>
          <p className="text-gray-600 mb-6">{formDescription}</p>

          {/* Static Email Field */}
          <div className="mb-6">
            <label htmlFor="emailField" className="block text-gray-700 text-lg font-semibold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="emailField"
              type="email"
              className={`w-full p-3 border rounded-md focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-800 ${formErrors['emailField'] ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Valid email address"
              value={formData['emailField'] || ''}
              onChange={(e) => handleInputChange('emailField', e.target.value)}
              required
            />
            {formErrors['emailField'] && (
              <p className="text-red-500 text-sm mt-1">{formErrors['emailField']}</p>
            )}
          </div>

          {/* Render Dynamic Questions */}
          {questions.map(question => (
            <div key={question.id} className="mb-6">
              <label htmlFor={question.id} className="block text-gray-700 text-lg font-semibold mb-1">
                {question.title} {question.required && <span className="text-red-500">*</span>}
              </label>
              {/* Render input based on question type */}
              {question.type === 'short-answer' && (
                <input
                  id={question.id}
                  type="text"
                  className={`w-full p-3 border rounded-md focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-800 ${formErrors[question.id] ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Short answer text"
                  value={formData[question.id] || ''}
                  onChange={(e) => handleInputChange(question.id, e.target.value, question.type)}
                  required={question.required}
                  minLength={question.minLength || undefined}
                  maxLength={question.maxLength || undefined}
                  pattern={question.pattern || undefined}
                />
              )}
              {question.type === 'paragraph' && (
                <textarea
                  id={question.id}
                  className={`w-full p-3 border rounded-md focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-800 resize-y ${formErrors[question.id] ? 'border-red-500' : 'border-gray-300'}`}
                  rows="4"
                  placeholder="Long answer text"
                  value={formData[question.id] || ''}
                  onChange={(e) => handleInputChange(question.id, e.target.value, question.type)}
                  required={question.required}
                  minLength={question.minLength || undefined}
                  maxLength={question.maxLength || undefined}
                ></textarea>
              )}
              {question.type === 'date' && (
                <input
                  id={question.id}
                  type="date"
                  className={`w-full p-3 border rounded-md focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-800 ${formErrors[question.id] ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData[question.id] || ''}
                  onChange={(e) => handleInputChange(question.id, e.target.value, question.type)}
                  required={question.required}
                />
              )}
              {(question.type === 'multiple-choice' || question.type === 'radio') && (
                <div>
                  {question.options.map(option => (
                    <label key={option.id} className="block mb-2 text-gray-700">
                      <input
                        type="radio"
                        name={question.id}
                        value={option.text}
                        checked={formData[question.id] === option.text}
                        onChange={(e) => handleInputChange(question.id, e.target.value, question.type)}
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        required={question.required && !formData[question.id]} // Apply required to at least one radio button if none selected
                      />
                      {option.text}
                    </label>
                  ))}
                </div>
              )}
              {question.type === 'checkboxes' && (
                <div>
                  {question.options.map(option => (
                    <label key={option.id} className="block mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        value={option.text}
                        checked={(formData[question.id] || []).includes(option.text)}
                        onChange={(e) => handleInputChange(question.id, e.target.value, question.type)}
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      {option.text}
                    </label>
                  ))}
                </div>
              )}
              {question.type === 'dropdown' && (
                <select
                  id={question.id}
                  className={`w-full p-3 border rounded-md focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-800 ${formErrors[question.id] ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData[question.id] || ''}
                  onChange={(e) => handleInputChange(question.id, e.target.value, question.type)}
                  required={question.required}
                >
                  <option value="" disabled>Select an option</option>
                  {question.options.map(option => (
                    <option key={option.id} value={option.text}>
                      {option.text}
                    </option>
                  ))}
                </select>
              )}

              {/* Display error message */}
              {formErrors[question.id] && (
                <p className="text-red-500 text-sm mt-1">{formErrors[question.id]}</p>
              )}
            </div>
          ))}

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-colors text-lg"
            >
              Submit Form (Preview)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPreview;