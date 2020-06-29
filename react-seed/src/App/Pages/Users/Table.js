import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

const Table = props => {
  const [gridData, setGridData] = useState({
    data: props.data,
    columns: props.col,
    resolve: () => {},
    updatedAt: new Date()
  });

  useEffect(() => {
    gridData.resolve();
    console.log("RESOLVE AT:", gridData.updatedAt);
  }, [gridData]);

  const onRowAdd = newData =>
    new Promise((resolve, reject) => {
      const data = [...gridData.data];
      data.push(newData);
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  const onRowUpdate = (newData, oldData) =>
    new Promise((resolve, reject) => {
      // Copy current state data to a new array
      const data = [...gridData.data];
      // Get edited row index
      const index = data.indexOf(oldData);
      // replace old data
      data[index] = newData;
      // update state with the new array
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  const onRowDelete = oldData =>
    new Promise((resolve, reject) => {
      let data = [...gridData.data];
      const index = data.indexOf(oldData);
      data.splice(index, 1);
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  return (
    <>
    {
      console.log(props.data)
    }
      <MaterialTable
        title="Users Details"
        columns={gridData.columns}
        data={props.data}
        editable={{
          isEditable: rowData => false,
          isDeletable: rowData => false,
          onRowAdd: onRowAdd,
          onRowUpdate: onRowUpdate,
          onRowDelete: onRowDelete
        }}
      />
    </>
  );
};
export default Table;
