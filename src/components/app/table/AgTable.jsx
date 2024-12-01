import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
// Optional Theme applied to the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useOrderStore } from '../../../stores/order.store';

export const AgTable = () => {

    const { orders } = useOrderStore();

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState(orders);

    const [colDefs, setColDefs] = useState([
        { field: 'id', headerName: "#"},
        { field: 'date', headerName: "Fecha" },
        { field: 'total', headerName: "Total" },
        { field: 'status', headerName: 'Estado' },
        { field: 'actions' },
    ]);

  return (
        <div 
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  )
}
