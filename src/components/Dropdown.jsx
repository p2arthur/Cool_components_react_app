import { useState, useEffect, useRef } from "react";

import Panel from "./Panel";

import { FiChevronDown } from "react-icons/fi";

function Dropdown({ options, onChange, value }) {
  //Defining a local piece of state to define if the dropdown is opened or closed - Boolean
  const [isOpen, setIsOpen] = useState(false);

  //Creating a reference to the div that was created by the Dropdown Component - Passed into the main div created by the dropdown
  const divEl = useRef();

  //useEffect to set a new handler function to be executed when user clicks outside of the dropdown
  useEffect(() => {
    const documentEventHandler = (event) => {
      //Guard clause in case the ref element doesn't exist anymore
      if (!divEl.current) return;

      //Check if the click happened outside of our referenced element
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    //Setting an eventlistener into the document whenever our component is first rendered
    document.addEventListener("click", documentEventHandler, true);

    //Returning a cleanup function for whenever the Dropdown components is not shown anymore
    return () => {
      document.removeEventListener("click", documentEventHandler);
    };
  }, []);

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //Set the state isOpen to false, closing the dropdown
    setIsOpen(!isOpen);
    //Passing the selected value to the parent component through the onChange subscriber
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
    <div ref={divEl} className="w-48 relative">
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
