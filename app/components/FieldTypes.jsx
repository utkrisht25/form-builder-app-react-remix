// import React from 'react';

// const fieldTypes = [
//   { id: 'text', label: 'Text Input' },
//   { id: 'textarea', label: 'Textarea' },
//   { id: 'dropdown', label: 'Dropdown' },
//   { id: 'checkbox', label: 'Checkbox' },
//   { id: 'date', label: 'Date Input' },
//   { id: 'radio', label: 'Radio Button' },
// ];

// function FieldTypes() {
//   const handleDragStart = (e, typeId) => {
//     e.dataTransfer.setData('fieldType', typeId);
//     e.currentTarget.style.cursor = 'grabbing';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.cursor = 'grab';
//   };

//   return (
//     <div>
//       {fieldTypes.map((type) => (
//         <div
//           key={type.id}
//           draggable
//           className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-md mb-2 cursor-grab"
//           onDragStart={(e) => handleDragStart(e, type.id)}
//           onDragEnd={handleDragEnd}
//         >
//           {type.label}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FieldTypes;
import React from 'react';

const fieldTypes = [
  { id: 'text', label: 'Text Input' },
  { id: 'textarea', label: 'Textarea' },
  { id: 'dropdown', label: 'Dropdown' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'date', label: 'Date Input' },
  // You can add 'radio' if you want to support it
  { id: 'radio', label: 'Radio Button' },
];

function FieldTypes() {
  return (
    <div>
      {fieldTypes.map((type) => (
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
