import { GoChevronUp, GoChevronDown } from "react-icons/go";
import useSort from "../hooks/use-sort";
import Table from "./Table";

//Add a new Sortable Table component
function SortableTable(props) {
  //Destructure the config array from the props
  const { config, data } = props;

  const { handleClick, sortedData, sortBy, sortOrder } = useSort(data, config);

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
