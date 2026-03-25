import { Search, Users, UserCheck } from "lucide-react";

interface FilterPanelProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  totalUsers: number;
  activeUsers: number;
}

export const FiltersPanel = ({
  searchQuery,
  setSearchQuery,
  totalUsers,
  activeUsers,
}: FilterPanelProps) => {
  return (
    <div className="filters-panel">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon blue">
            <Users size={20} />
          </div>
          <div className="stat-info">
            <p className="stat-label">Total Employees</p>
            <p className="stat-value">{totalUsers}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <UserCheck size={20} />
          </div>
          <div className="stat-info">
            <p className="stat-label">Active</p>
            <p className="stat-value">{activeUsers}</p>
          </div>
        </div>
      </div>

      <div className="search-box">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Search all columns..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};
