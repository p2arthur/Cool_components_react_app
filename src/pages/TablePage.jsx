//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  //Create an array of objects to be displayed inside the table component
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-300", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  //Create a config array to dinamically pass properties to the table and sortable table components
  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      //Set a sortValue function to every property that should be sortable
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => (
        <div className={`p-3 m-2 ${fruit.color} rounded`}></div>
      ),
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      //Set a sortValue function to every property that should be sortable
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFnHelper = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable keyFnHelper={keyFnHelper} config={config} data={data} />
    </div>
  );
}

export default TablePage;
