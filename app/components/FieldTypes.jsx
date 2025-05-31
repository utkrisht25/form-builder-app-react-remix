import { questionTypes } from "./Question/QuestionHeader"; 
function FieldTypes() {
  return (
    <div>
      {questionTypes.map((type) => (
        <div
          key={type.id}
          draggable // This makes the element draggable
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-md mb-2 cursor-grab"
          onDragStart={(e) => {
            // Set the data to be transferred during the drag operation
            e.dataTransfer.setData('fieldType', type.id);
            // Optionally, set a drag image
            // e.dataTransfer.setDragImage(e.target, 0, 0);
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