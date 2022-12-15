import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";

import { useState } from "react";
import Dropdown from "./components/Dropdown";

const dropDownOptions = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
];

function App() {
  //Defining a broad piece of state to define what option was selected on the dropdown - Option or null
  const [selectedOption, setSelectedOption] = useState(null);

  //Defining broad callback to define the selected item on our dropdown component
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const content = selectedOption ? selectedOption.label : "";

  return (
    <div className="flex m-4 items-center">
      <Dropdown
        onChange={handleSelect}
        value={selectedOption}
        options={dropDownOptions}
      />
      <Dropdown
        onChange={handleSelect}
        value={selectedOption}
        options={dropDownOptions}
      />
      <div className="ml-5">
        Selected Color: {selectedOption?.label || "none"}
      </div>
    </div>
  );
}

export default App;
