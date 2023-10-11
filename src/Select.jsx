import React from 'react';

// Define a functional component called Select that accepts props: selects and setSelects
export const Select = ({ selects, setSelects,setSkills,skills }) => {
  // Define a function called deleteItem that takes an index parameter
  const deleteItem = (index,value) => {
    // Use the filter method to create a new array without the item to be deleted
    const updatedSelects = selects.filter((select, i) => i !== index);
    // Update the state with the new array, effectively removing the item
    setSelects(updatedSelects);
    setSkills([...skills,value]);

    
    
  };

  // Return a list of div elements based on the items in the 'selects' array
  return (
    selects.map((select, index) => (
      <div key={index} className='p-4 flex items-center justify-between py-3 rounded-xl w-5/6 bg-blue-950 text-white'>
        <p>{index}. {select.text}</p>
        {/* Add an 'x' icon that calls the deleteItem function when clicked */}
        <p onClick={() => deleteItem(index,select.text)} className="cursor-pointer">&#x2715;</p>
      </div>
    ))
  );
};
