import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@remix-run/react';
import { copyFormLink } from '../components/helper.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';
import { formTemplates } from '../data/formTemplates';

export default function Index() {
  const [forms, setForms] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load forms from localStorage when component mounts
    const storedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    setForms(storedForms);
  }, []);

  // Handle form deletion
  const handleDeleteForm = (formId) => {
    if (window.confirm('Are you sure you want to delete this form?')) {
      // Remove from localStorage
      const storedForms = JSON.parse(localStorage.getItem('forms') || '[]');
      const updatedForms = storedForms.filter(form => form.id !== formId);
      localStorage.setItem('forms', JSON.stringify(updatedForms));
      
      // Update state to reflect changes
      setForms(updatedForms);
    }
  };

  // Reverted: This function now creates a new form and navigates to its edit page
  const handleCreateNewForm = () => {
    navigate('/form-builder');
  };

  const handleTemplateSelect = (templateType) => {
    const template = formTemplates[templateType];
    if (!template) return;

    // Create a new form based on the template
    const newForm = {
      ...template,
      id: `form-${Date.now()}`,
      createdAt: new Date().toISOString(),
      isTemplate: true, // Flag to identify template-based forms
      originalTemplate: templateType // Store the template type for future reference
    };

    // Save the new form
    const storedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    localStorage.setItem('forms', JSON.stringify([...storedForms, newForm]));

    // Navigate to the form editor
    navigate(`/edit-form/${newForm.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8 text-gray-900 dark:text-gray-300">
      <ThemeToggle />
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Form Builder</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleCreateNewForm}
          >
            <div className="bg-blue-600 rounded-full p-3 mb-3">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blank form</h2>
          </div>

          {/* Contact Information Template */}
          <div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleTemplateSelect('contact')}
          >
            <div className="bg-green-200 dark:bg-green-800 rounded-full p-3 mb-3">
              <span className="text-green-800 dark:text-green-200 text-lg font-semibold">Template Preview</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Contact Information</h2>
          </div>

          {/* RSVP Template */}
          <div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleTemplateSelect('rsvp')}
          >
            <div className="bg-purple-200 dark:bg-purple-800 rounded-full p-3 mb-3">
              <span className="text-purple-800 dark:text-purple-200 text-lg font-semibold">Template Preview</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">RSVP</h2>
          </div>

          {/* Party Invite Template */}
          <div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleTemplateSelect('partyInvite')}
          >
            <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full p-3 mb-3">
              <span className="text-yellow-800 dark:text-yellow-200 text-lg font-semibold">Template Preview</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Party Invite</h2>
          </div>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent forms</h2>
        {forms.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            No recent forms. Create one to see it here!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map(form => (
              <div
                key={form.id}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 truncate mb-2" title={form.title}>
                  {form.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Fields: {form.fields.length}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Created: {new Date(form.createdAt).toLocaleDateString()}
                </p>
                <div className="flex space-x-3">
                  <Link
                    to={`/edit-form/${form.id}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View/Edit
                  </Link>
                  <Link
                    to={`/form-preview/${form.id}`}
                    className="text-green-600 hover:underline font-medium"
                  >
                    Preview
                  </Link>
                  <button
                    onClick={() => copyFormLink(form.id, setCopiedId)}
                    className="relative text-purple-600 hover:underline font-medium flex items-center cursor-pointer"
                    aria-label="Copy form link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy Link
                    {copiedId === form.id && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded w-max">
                        Link copied!
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => handleDeleteForm(form.id)}
                    className="relative text-red-600 hover:underline font-medium flex items-center cursor-pointer"
                    aria-label="Delete form"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}