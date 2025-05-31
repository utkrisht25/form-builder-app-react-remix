
    import FormBuilder from '../components/FormBuilder.jsx';
    import { useParams } from '@remix-run/react';

    function EditFormPage() {
      const { formId } = useParams();

      return (
        <div className="min-h-screen bg-gray-100">
          {/* The FormBuilder will receive the formId from the URL */}
          <FormBuilder formId={formId} />
        </div>
      );
    }

    export default EditFormPage;