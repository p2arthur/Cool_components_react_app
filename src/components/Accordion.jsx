//We need to define a expanded index piece of state inside the accordion component
import { useState } from "react";

function Accordion({ items }) {
  //Defining the expandedIndex
  const [expandedIndex, setExpandedIndex] = useState(0);

  //Defining a conditional to render the expanded accordion that matches the expandedIndex state
  const renderedItems = items.map((item, index) => {
    //Check if the current item index is equal to the expanded piece of state
    const isExpanded = index === expandedIndex; //True or false

    //Creating a conditional rendering variable to show the div with the content only if isExpanded is true. If it's not react will no render anything

    return (
      <div key={item.id}>
        <h3>{item.label}</h3>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
