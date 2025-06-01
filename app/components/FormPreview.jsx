import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from '@remix-run/react';
import { useForm, useWatch } from 'react-hook-form';
import {copyFormLink} from "../components/helper.jsx";

// Helper function to render individual form fields in preview mode
const renderFormField = (field, register, errors) => {
  const { name, type, title, required, options, minLength, maxLength, pattern } = field;

  // Define validation rules for react-hook-form
  const validationRules = {
    required: required && "This field is required.",
    minLength: minLength ? { value: minLength, message: `Minimum length is ${minLength} characters.` } : undefined,
    maxLength: maxLength ? { value: maxLength, message: `Maximum length is ${maxLength} characters.` } : undefined,
    pattern: pattern ? { value: new RegExp(pattern), message: "Please match the required format." } : undefined,
  };

  switch (type) {
    case 'short-answer':
      return (
        <div key={name} className="mb-4">
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {title} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            id={name} //here name (which is the field's id) is used as the input's  html id
            {...register(name, validationRules)} // here , name is used as the field's name in react-hook-form and also used for react-hook-form's register function
            className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
        </div>
      );
    case 'paragraph':
      return (
        <div key={name} className="mb-4">
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {title} {required && <span className="text-red-500">*</span>}
          </label>
          <textarea
            id={name}
            rows="3"
            {...register(name, validationRules)}
            className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
          ></textarea>
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
        </div>
      );
    case 'multiple-choice':
    case 'radio':
      return (
        <div key={name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {title} {required && <span className="text-red-500">*</span>}
          </label>
          {options.map(option => (
            <div key={option.id} className="flex items-center mb-1"> {/* Added key here */}
              <input
                type="radio"
                id={`${name}-${option.id}`}
                value={option.text}
                {...register(name, { required: required && "Please select an option." })}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label htmlFor={`${name}-${option.id}`} className="ml-2 block text-sm text-gray-900">
                {option.text}
              </label>
            </div>
          ))}
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
        </div>
      );
    case 'checkboxes':
      return (
        <div key={name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {title} {required && <span className="text-red-500">*</span>}
          </label>
          {options.map(option => (
            <div key={option.id} className="flex items-center mb-1"> {/* Added key here */}
              <input
                type="checkbox"
                id={`${name}-${option.id}`}
                value={option.text}
                {...register(name, {
                  validate: required ? (value) => {
                    const isAnyChecked = Array.isArray(value) && value.length > 0;
                    return isAnyChecked || "Please select at least one option.";
                  } : undefined
                })}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor={`${name}-${option.id}`} className="ml-2 block text-sm text-gray-900">
                {option.text}
              </label>
            </div>
          ))}
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
        </div>
      );
    case 'dropdown':
      return (
        <div key={name} className="mb-4">
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {title} {required && <span className="text-red-500">*</span>}
          </label>
          <select
            id={name}
            {...register(name, validationRules)}
            className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select an option</option>
            {options.map(option => (
              <option key={option.id} value={option.text}> {/* Added key here */}
                {option.text}
              </option>
            ))}
          </select>
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
        </div>
      );
    case 'date':
      return (
        <div key={name} className="mb-4">
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {title} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="date"
            id={name}
            {...register(name, validationRules)}
            className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
        </div>
      );
    default:
      return null;
  }
};


export default function FormPreview({ formId: propFormId , isUserMode = false }) {
  const formId = propFormId ;// Use prop or URL param
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [previewWidth, setPreviewWidth] = useState('w-full lg:max-w-3xl'); // Default to desktop-like width
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [progress, setProgress] = useState(0); // Progress state for form completion

  // Initialize react-hook-form - Using mode: 'onChange' to validate as user types
  const { register, handleSubmit, formState: { errors }, control, getValues, reset } = useForm({
    mode: 'onChange' // This enables validation as the user types
  });

  // Watch all form values for changes to update progress
  const formValues = useWatch({
    control,
    defaultValue: {}
  });

  // Calculate form completion progress
  useEffect(() => {
    if (!form) return;

    // Get all form fields including the required email field
    const allFields = [
      { name: 'previewEmailField', required: true },
      ...form.fields
    ];

    // Count total fields and valid fields according to requirements
    let validFieldCount = 0;
    let totalFieldCount = 0;

    allFields.forEach(field => {
      const fieldValue = getValues(field.name);
      const hasValue = Array.isArray(fieldValue)
        ? fieldValue.length > 0
        : fieldValue !== null && fieldValue !== undefined && fieldValue !== '';

      // Check if field has validation errors
      const hasError = errors[field.name] !== undefined;

      // Check field validity based on validation rules
      let isValid = true;
      if (hasValue) {
        // Check minLength validation for text fields
        if (field.minLength && typeof fieldValue === 'string' && fieldValue.length < field.minLength) {
          isValid = false;
        }

        // Check maxLength validation for text fields
        if (field.maxLength && typeof fieldValue === 'string' && fieldValue.length > field.maxLength) {
          isValid = false;
        }

        // Check pattern validation for text fields
        if (field.pattern && typeof fieldValue === 'string') {
          try {
            const regex = new RegExp(field.pattern);
            if (!regex.test(fieldValue)) {
              isValid = false;
            }
          } catch (e) {
            // If regex is invalid, consider the field invalid
            isValid = false;
          }
        }
      }

      // Required fields are always counted in the total
      if (field.required) {
        totalFieldCount++;
        // Count as valid only if it has a value AND passes validation AND no errors reported by React Hook Form
        if (hasValue && isValid && !hasError) {
          validFieldCount++;
        }
      }
      // Optional fields are only counted in the total if they have any value
      else if (hasValue) {
        totalFieldCount++;
        // Count as valid only if it passes validation AND no errors reported by React Hook Form
        if (isValid && !hasError) {
          validFieldCount++;
        }
      }
      // Empty optional fields are not counted at all
    });

    // Calculate percentage (avoid division by zero)
    let calculatedProgress = totalFieldCount === 0
      ? 0
      : Math.round((validFieldCount / totalFieldCount) * 100);

    // Special case for scenario 5: If email is invalid and any field has error, set to 0%
    if (errors.previewEmailField && Object.keys(errors).length > 1) {
      calculatedProgress = 0;
    }

    setProgress(calculatedProgress);
  }, [form, formValues, errors, getValues]);

  useEffect(() => {
    if (formId) {
      const storedForms = JSON.parse(localStorage.getItem('forms') || '[]');
      const foundForm = storedForms.find(f => f.id === formId);
      if (foundForm) {
        setForm(foundForm);
        // Set default values for the form fields based on the loaded form data
        const defaultValues = {};
        foundForm.fields.forEach(field => {
          // IMPORTANT: Checkboxes need to be initialized as an empty array for react-hook-form
          // if they are meant to collect multiple values.
          if (field.type === 'checkboxes') {
            defaultValues[field.name] = []; // Initialize as empty array for multi-select
          } else {
            defaultValues[field.name] = ''; // Initialize other types as empty string
          }
        });
        reset(defaultValues); // Reset form with these initial empty values
      } else {
        console.warn(`Form with ID ${formId} not found for preview.`);
        navigate('/');
      }
    }
  }, [formId, navigate, reset]);

  const onSubmit = (data) => {
    console.log('Form Submitted!', data);
    alert('Form submitted successfully! Check console for data.');
    // Here you would typically send the form data to a backend
  };

  if (!form) {
    return <div className="text-center p-8 text-gray-600">Loading form or form not found...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {!isUserMode && <div className="flex space-x-2">
          <Link to={`/edit-form/${form.id}`} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
            &larr; Back to Editor
          </Link>
          <button
            onClick={()=> copyFormLink(form.id, setShowCopyNotification)}
            className="relative px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy Share Link
            {showCopyNotification && (
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                Link copied!
              </span>
            )}
          </button>
        </div>}
        <h1 className="text-3xl font-bold text-gray-900 text-center sm:text-left">{form.title}</h1>
        {!isUserMode && <div className="flex bg-white rounded-md shadow-md p-1">
          <button
            onClick={() => setPreviewWidth('w-full sm:max-w-xs')} // Mobile width
            className={`py-2 px-4 rounded-l-md text-sm font-semibold ${previewWidth === 'w-full sm:max-w-xs' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Mobile
          </button>
          <button
            onClick={() => setPreviewWidth('w-full sm:max-w-md md:max-w-xl')} // Tablet width
            className={`py-2 px-4 text-sm font-semibold ${previewWidth === 'w-full sm:max-w-md md:max-w-xl' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Tablet
          </button>
          <button
            onClick={() => setPreviewWidth('w-full lg:max-w-3xl')} // Desktop width
            className={`py-2 px-4 rounded-r-md text-sm font-semibold ${previewWidth === 'w-full lg:max-w-3xl' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Desktop
          </button>
        </div>}
      </div>

      <div className={`mx-auto bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ${previewWidth}`}>
        <p className="text-gray-600 mb-6">{form.description}</p>

        {/* Form Completion Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Form Completion</span>
            <span className="text-sm font-medium text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                progress === 100 
                  ? 'bg-green-600' 
                  : progress > 70 
                    ? 'bg-blue-600' 
                    : progress > 30 
                      ? 'bg-yellow-400' 
                      : 'bg-red-400'
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Static Email Field: Ensure this also has a unique 'name' if you keep it */}
          <div className="mb-6">
            <label htmlFor="previewEmailField" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="previewEmailField"
              {...register("previewEmailField", {
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.previewEmailField ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Valid email address"
            />
            {errors.previewEmailField && (
              <p className="text-red-500 text-xs mt-1">{errors.previewEmailField.message}</p>
            )}
          </div>

          {/* Dynamic form fields mapped from your form data */}
          {form.fields.map(field => renderFormField(field, register, errors))}
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}
