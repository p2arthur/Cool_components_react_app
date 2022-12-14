import { useState, useEffect } from "react";

import Panel from "./Panel";

import { FiChevronDown } from "react-icons/fi";

function Dropdown({ options, onChange, value }) {
  //Defining a local piece of state to define if the dropdown is opened or closed - Boolean
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handler = (event) => {
      console.log(event.target);
    };

    //Adding an event listener on the document during the capturing phase - That's why the third argument is true
    document.addEventListener("click", handler, true);
  }, []);

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //Set the state isOpen to false, closing the dropdown
    setIsOpen(!isOpen);
    //Passing the selected value to the parent component through the handle select subscriber
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        className="hover:bg-sky-100 rounded cursor-pointer"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {value?.label || "Select..."} <FiChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
