import { rowData, type Employee } from "./sampleData";

export const fetchEmployees = async (): Promise<Employee[]> => {
  return new Promise((resolve) => {
    resolve(rowData);
  });
};
