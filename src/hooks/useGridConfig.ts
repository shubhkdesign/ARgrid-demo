import { useMemo } from "react";
import type { ColDef } from "ag-grid-community";

export const useGridConfig = () => {
  const defaultColDef = useMemo<ColDef>(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
      minWidth: 100,
    }),
    [],
  );
  return defaultColDef;
};
