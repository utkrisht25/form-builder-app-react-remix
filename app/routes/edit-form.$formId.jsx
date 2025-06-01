import FormBuilder from '../components/FormBuilder.jsx';
import { useParams } from '@remix-run/react';
import ThemeToggle from '../components/ThemeToggle.jsx';

function EditFormPage() {
  const { formId } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      {/* The FormBuilder will receive the formId from the URL */}
      <FormBuilder formId={formId} />
    </div>
  );
}

export default EditFormPage;