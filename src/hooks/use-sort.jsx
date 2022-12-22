import { useState } from "react";

function useSort(data, config) {
  //Add state to rerender our component when user clicks on a sortable column label
  //1- State to track the sorting state
  const [sortOrder, setSortOrder] = useState(null);

  //2-State to track what column to sort
  const [sortBy, setSortBy] = useState(null);

  //Add a click event handler to be called when headed column get's clicked
  const setSortColumn = (label) => {
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
  //Only sort data if sort data and sort by aren't null
  //If they're aren't null we have to make a copy of the 'data' but sorted - Never modify an array prop
  // Figure out the correct sorting function and use it for sorting

  let sortedData = data;
  //Pass all props received by the sortable table down to the Table instance
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
  return { setSortColumn, sortedData, sortBy, sortOrder };
}

export default useSort;
