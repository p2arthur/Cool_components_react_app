//Importing use State to set the expanded index
import { useState } from "react";
import { BiCaretDown, BiLeftArrow } from "react-icons/bi";

//Importing the icons for the accordion component

//Creating the accordion component
function Accordion({ items }) {
  //Defining the state of the index of the expanded accordion to be setted when the user clicks on one item of the list
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //Defining a handleClick outside of the mapping function that receives a nextIndex as argument - The nextIndex parameter is used inside the mapping function that passes the current index as argument to this function so it can set the Expanded index
  const handleClick = (nextIndex) => {
    if (nextIndex === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  //Mapping through the faqResponse items to create a list of renders
  const renderedItems = items.map((item, index) => {
    //Setting a boolean variable to set the condition if the list item will be expanded or not
    const isExpanded = index === expandedIndex;

    //Defining a conditional for the icon using ternary expression
    const icon = (
      <span>
        {isExpanded ? (
          <BiCaretDown className="inline-block text-2xl" />
        ) : (
          <BiLeftArrow className="inline-block" />
        )}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-2 items-center cursor-pointer select-none"
          onClick={() => handleClick(index)}
        >
          {item.label} {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-p rounded-lg">{renderedItems}</div>;
}

export default Accordion;
