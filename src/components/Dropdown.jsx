import { useState } from "react";

function Dropdown({ options, onSelection, selectedOption }) {
  //Defining a local piece of state to define if the dropdown is opened or closed - Boolean
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //Set the state isOpen to false, closing the dropdown
    setIsOpen(!isOpen);
    //Passing the selected value to the parent component through the handle select subscriber
    onSelection(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        className="border-b-2 border-gray-200 cursor-pointer w-20"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer bg-gray-200 w-60 rounded-tl rounded-tr"
      >
        {selectedOption ? selectedOption.label : "Select..."}
      </div>
      {isOpen ? <div className="bg-gray-100">{renderedOptions}</div> : ""}
    </div>
  );
}

export default Dropdown;
