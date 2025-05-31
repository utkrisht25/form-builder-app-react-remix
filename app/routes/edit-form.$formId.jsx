    import React from 'react';
    import FormBuilderComponent from '../components/FormBuilder.jsx';

    function EditFormPage() {
      return (
        <div className="min-h-screen bg-gray-100">
          {/* The FormBuilderComponent will receive the formId from the URL */}
          <FormBuilderComponent />
        </div>
      );
    }

    export default EditFormPage;