import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./FertilizerList.css";
import { data } from "../../result";

function FertilizerList() {
  const columnDefs = useMemo(() => [
    { field: "id", headerName: "ID", width: 100, sortable: true },
    {
      field: "_year",
      headerName: "Year",
      width: 150,
      sortable: true,
      filter: "agNumberColumnFilter",
      floatingFilter: true,
    },
    {
      field: "month",
      headerName: "Month",
      width: 120,
      sortable: true,
      filter: true,
      floatingFilter: true,
      comparator: monthComparator,
    },
    {
      field: "product",
      headerName: "Product",
      width: 180,
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "state",
      headerName: "State",
      width: 200,
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "requirement_in_mt_",
      headerName: "Requirement (MT)",
      width: 180,
      sortable: true,
      filter: "agNumberColumnFilter",
      floatingFilter: true,
      valueGetter: (params) => parseFloat(params.data.requirement_in_mt_),
      valueFormatter: (params) => parseFloat(params.value).toFixed(2),
    },
    {
      field: "availability_in_mt_",
      headerName: "Availability (MT)",
      width: 180,
      sortable: true,
      filter: "agNumberColumnFilter",
      floatingFilter: true,
      valueGetter: (params) => parseFloat(params.data.availability_in_mt_),
      valueFormatter: (params) => parseFloat(params.value).toFixed(2),
    },
  ], []);

  function monthComparator(a, b) {
    const monthOrder = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    const monthIndexA = monthOrder.indexOf(a);
    const monthIndexB = monthOrder.indexOf(b);
    return monthIndexA - monthIndexB;
  }

  return (
    <div className="FertilizerList">
      <h3>Fertilizer List</h3>
      <div className="FertilizerListTable">
        <div className="ag-theme-alpine" style={{ width: "100%"}}>
          <AgGridReact
            rowData={data}
            columnDefs={columnDefs}
            columnHoverHighlight={true}
            pagination={true}
            paginationPageSize={10}
          />
        </div>
      </div>
    </div>
  );
}

export default FertilizerList;
