import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@remix-run/react';
import { copyFormLink } from '../components/helper.jsx';

export default function Index() {
  const [forms, setForms] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load forms from localStorage when component mounts
    const storedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    setForms(storedForms);
  }, []);

  // Reverted: This function now creates a new form and navigates to its edit page
  const handleCreateNewForm = () => {
    navigate('/form-builder');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Form Builder</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
               onClick={handleCreateNewForm}>
            <div className="bg-blue-600 rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Blank form</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="bg-green-200 rounded-full p-3 mb-3">
              <span className="text-green-800 text-lg font-semibold">Template Preview</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="bg-purple-200 rounded-full p-3 mb-3">
              <span className="text-purple-800 text-lg font-semibold">Template Preview</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">RSVP</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="bg-yellow-200 rounded-full p-3 mb-3">
              <span className="text-yellow-800 text-lg font-semibold">Template Preview</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Party Invite</h2>
          </div>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent forms</h2>
        {forms.length === 0 ? (
          <p className="text-gray-600 bg-white p-6 rounded-lg shadow-md">No recent forms. Create one to see it here!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map(form => (
              <div key={form.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 truncate mb-2" title={form.title}>
                  {form.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">Fields: {form.fields.length}</p>
                <p className="text-gray-600 text-sm mb-4">
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
                    className="relative text-purple-600 hover:underline font-medium flex items-center"
                    aria-label="Copy form link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Link
                    {copiedId === form.id && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded w-max">
                        Link copied!
                      </span>
                    )}
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

