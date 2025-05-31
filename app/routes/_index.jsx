import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@remix-run/react';
// No longer need uuid here for blank form creation, as FormBuilder handles ID generation on save.
// import { v4 as uuidv4 } from 'uuid';

export default function Index() {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load forms from localStorage when component mounts
    const storedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    setForms(storedForms);
  }, []);

  // Simplified: This function now just navigates to the blank form builder route.
  // The actual new form creation and ID generation happens when the user saves it in FormBuilder.
  const handleCreateNewForm = () => {
    navigate('/form-builder');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Form Builder</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Changed onClick to Link directly to /form-builder */}
          <Link to="/form-builder" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Blank form</h2>
          </Link>
          {/* Example Template Previews (You can make these functional later) */}
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
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}