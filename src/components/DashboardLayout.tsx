import { useState, useEffect } from "react";
import { FiltersPanel } from "./FiltersPanel";
import { DataGrid } from "./DataGrid";
import { fetchEmployees } from "../data/api";
import type { Employee } from "../data/sampleData";

export const DashboardLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //data fetching
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchEmployees(); // Await the mock API!
        setEmployees(data);
      } catch (error) {
        console.error("Failed to fetch employees", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const totalUsers = employees.length;
  const activeUsers = employees.filter((user) => user.isActive).length;

  return (
    <div className="dashboard-layout">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Employee Directory</h1>
        </div>

        <div className="dashboard-card">
          <FiltersPanel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            totalUsers={totalUsers}
            activeUsers={activeUsers}
          />

          <DataGrid
            rowData={employees}
            searchQuery={searchQuery}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
