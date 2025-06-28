import { questionTypes } from "./Question/QuestionHeader"; 

function FieldTypes({ onAddField }) {
  const handleDragStart = (e, typeId) => {
    e.dataTransfer.setData('fieldType', typeId);
  };

  const handleClick = (typeId) => {
    onAddField(typeId);
  };

  return (
    <div>
      {questionTypes.map((type) => (
        <div
          key={type.id}
          draggable
          className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 
                     text-blue-800 dark:text-blue-100 font-semibold py-2 px-4 rounded-md mb-2 
                     cursor-pointer transition-colors shadow-sm hover:shadow-md
                     flex justify-between items-center"
          onDragStart={(e) => handleDragStart(e, type.id)}
          onClick={() => handleClick(type.id)}
        >
          <span>{type.label}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2 md:hidden" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4v16m8-8H4" 
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default FieldTypes;
// This component renders a list of field types that can be dragged and dropped into a form.
// Each field type is represented by a div that is styled and has a drag-and-drop functionality.