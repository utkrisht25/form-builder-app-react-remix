import FormPreviewComponent from '../components/FormPreview';
import { useParams } from '@remix-run/react';

export default function FormPreviewRoute() {
  const { formId } = useParams();

  return (
    <FormPreviewComponent formId={formId} isUserMode={false} />
  );
}


