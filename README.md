# FactWise Frontend Dashboard (AG Grid)

A React dashboard built to display tabular data using AG Grid.

## How to run

```bash
pnpm install
pnpm run dev
```

## File Structure & Data Flow

```text
src/
├── data/
│   ├── sampleData.ts       (Raw static JSON array of employees)
│   └── api.ts              (Wraps raw data in a Promise)
├── hooks/
│   └── useGridConfig.ts    (Caches default AG Grid properties via useMemo)
├── components/
│   ├── FiltersPanel.tsx    (Dumb component: renders search bar & stats)
│   ├── DataGrid.tsx        (Smart component: consumes AG Grid & maps columns)
│   └── DashboardLayout.tsx (Controller: manages state & fetches API)
└── index.css               (Custom semantic CSS variables & layout)
```

**Data Flow Sequence:**

1. **Fetch**: `DashboardLayout` calls the mock API on mount and saves the response in its state.
2. **Data Passing (Stats)**: `DashboardLayout` calculates total/active users and passes these numbers to `FiltersPanel`.
3. **Data Passing (Grid)**: `DashboardLayout` passes the data array and loading status down to `DataGrid`.
4. **Interactive Search**: Typing in the `FiltersPanel` updates the search string stored in `DashboardLayout`, which immediately informs the `DataGrid` to filter the table.

## Architecture & Grid Setup

- **Config**: Default AG Grid properties are stored in a `useGridConfig` hook and cached with `useMemo`.
- **Styling**: Standard custom CSS using variables (no utility frameworks).
- **Performance**: `rowBuffer` is set to 10 for DOM virtualization.
- **Pinned Columns**: `Employee` is pinned left, `Status` is pinned right. The status can be made clickable to toggle it, kept normal for now.
- **Formatting**: Uses `valueGetter` to combine first and last names. Uses `valueFormatter` for currency and array strings.
- **Loading**: Implements AG Grid's native loading skeleton, controlled by the parent component's API lifecycle.
- **Search**: Implemented a global text quick-filter which searches through all the data columns simultaneously.

## Limitation

- **Mobile Responsiveness**: Due to time constraints for this, mobile view will break.

---

# ar-grid-demo

// I used chatgpt to write the readme :/.
# ARgrid-demo
