import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import Table from "./Table";

//Add a new Sortable Table component
function SortableTable(props) {
  //Add state to rerender our component when user clicks on a sortable column label
  //1- State to track the sorting state
  const [sortOrder, setSortOrder] = useState(null);

  //2-State to track what column to sort
  const [sortBy, setSortBy] = useState(null);

  //Destructure the config array from the props
  const { config, data } = props;

  //Add a click event handler to be called when headed column get's clicked
  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("ascending");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("ascending");
      setSortBy(label);
    } else if (sortOrder === "ascending") {
      setSortOrder("descending");
      setSortBy(label);
    } else if (sortOrder === "descending") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  //Map through the configs and create a new array containing all columns + adding a header to those whith a sortValue function inside it
  const updatedConfig = config.map((column) => {
    //If there's no sortValue return the column to the updatedConfig
    if (!column.sortValue) {
      return column;
    }
    //If there's sortValue return a new column object with a header function to the updatedConfig
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  //Only sort data if sort data and sort by aren't null
  //If they're aren't null we have to make a copy of the 'data' but sorted - Never modify an array prop
  // Figure out the correct sorting function and use it for sorting
  //Pass all props received by the sortable table down to the Table instance

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "ascending" ? 1 : -1;

      if (typeof valueA === "number") {
        return (valueA - valueB) * reverseOrder;
      } else {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

//Defining the icons
function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "ascending") {
    return (
      <div>
        <GoChevronUp />
      </div>
    );
  } else if (sortOrder === "descending") {
    return (
      <div>
        <GoChevronDown />
      </div>
    );
  }
}
export default SortableTable;
