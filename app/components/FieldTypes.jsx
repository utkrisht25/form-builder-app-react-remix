import { questionTypes } from "./Question/QuestionHeader"; 

function FieldTypes() {
  return (
    <div>
      {questionTypes.map((type) => (
        <div
          key={type.id}
          draggable
          className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 
                     text-blue-800 dark:text-blue-100 font-semibold py-2 px-4 rounded-md mb-2 
                     cursor-grab transition-colors shadow-sm hover:shadow-md"
          onDragStart={(e) => {
            e.dataTransfer.setData('fieldType', type.id);
          }}
        >
          {type.label}
        </div>
      ))}
    </div>
  );
}

export default FieldTypes;
// This component renders a list of field types that can be dragged and dropped into a form.
// Each field type is represented by a div that is styled and has a drag-and-drop functionality.