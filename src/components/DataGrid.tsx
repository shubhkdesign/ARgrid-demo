import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import type {
  ColDef,
  ValueGetterParams,
  ValueFormatterParams,
} from "ag-grid-community";
import {
  ModuleRegistry,
  themeQuartz,
  AllCommunityModule,
} from "ag-grid-community";
import { useGridConfig } from "../hooks/useGridConfig";
import type { Employee } from "../data/sampleData";

ModuleRegistry.registerModules([AllCommunityModule]);

interface DataGridProps {
  rowData: Employee[];
  searchQuery: string;
  isLoading: boolean;
}

export const DataGrid = ({
  rowData,
  searchQuery,
  isLoading,
}: DataGridProps) => {
  const defaultColDef = useGridConfig();

  const columnDefs = useMemo<ColDef[]>(
    () => [
      {
        headerName: "Employee",
        valueGetter: (p: ValueGetterParams) =>
          `${p.data.firstName} ${p.data.lastName}`,
        flex: 1.5,
        minWidth: 160,
        pinned: "left",
      },
      { field: "email", minWidth: 220 },
      { field: "department" },
      { field: "position", flex: 1.5, minWidth: 180 },
      { field: "manager", minWidth: 150 },
      {
        field: "salary",
        valueFormatter: (p: ValueFormatterParams) =>
          p.value ? `$${p.value.toLocaleString()}` : ``,
      },
      { field: "location" },
      { field: "hireDate", headerName: "Hire Date" },
      { field: "age", maxWidth: 100 },
      { field: "performanceRating", headerName: "Rating", maxWidth: 120 },
      { field: "projectsCompleted", headerName: "Projects", maxWidth: 120 },
      {
        field: "skills",
        // Format the array
        valueFormatter: (p: ValueFormatterParams) =>
          p.value ? p.value.join(", ") : "",
        minWidth: 200,
      },
      {
        field: "isActive",
        headerName: "Status",
        pinned: "right",
        cellRenderer: (params: { value: boolean }) => {
          const isActive = params.value;
          return (
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <span
                className={`status-pill ${isActive ? "status-active" : "status-inactive"}`}
              >
                {isActive ? "Active" : "Inactive"}
              </span>
            </div>
          );
        },
      },
    ],
    [],
  );

  // if we arent loading, and there are literally 0 rows...
  if (!isLoading && (!rowData || rowData.length === 0)) {
    return <div className="empty-state">No data available.</div>;
  }

  return (
    <div className="grid-wrapper">
      <AgGridReact
        theme={themeQuartz}
        rowData={isLoading ? undefined : rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
        quickFilterText={searchQuery}
        rowBuffer={10}
        animateRows={true}
      />
    </div>
  );
};
