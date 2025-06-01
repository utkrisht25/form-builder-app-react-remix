import { useParams } from '@remix-run/react';
import FormPreview from '../components/FormPreview.jsx'; // Adjust the import path as necessary

export default function FormRoute() {
  const { formId } = useParams();

  return (
    <FormPreview formId={formId} isUserMode={true} />
  );
}