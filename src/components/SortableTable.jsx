import Table from "./Table";

//Add a new Sortable Table component
function SortableTable(props) {
  //Destructure the config array from the props
  const { config } = props;

  //Map through the configs and create a new array containing all columns + adding a header to those whith a sortValue function inside it
  const updatedConfig = config.map((column) => {
    //If there's no sortValue return the column to the updatedConfig
    if (!column.sortValue) {
      return column;
    }
    //If there's sortValue return a new column object with a header function to the updatedConfig
    return { ...column, header: () => <th>{column.label}^</th> };
  });

  //Pass all props received by the sortable table down to the Table instance
  return <Table {...props} config={updatedConfig} />;
}
export default SortableTable;
