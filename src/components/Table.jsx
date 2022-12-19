function Table({ config, data, keyFnHelper }) {
  //Mapping through the config prop to dinamically render the label into the table headers
  const renderedHeaders = config.map((column) => (
    <th className="text-slate-900" key={column.label}>
      {column.label}
    </th>
  ));

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column, index) => (
      <td className="p-2 m-1 text-slate-900" key={index}>
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr className="border-b" key={keyFnHelper(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2 rounded w-full">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
