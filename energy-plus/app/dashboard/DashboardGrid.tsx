"use client";

import { useState } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridPaginationModel,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";

export interface Task {
  id: number;
  name: string;
  status: string;
}

interface DashboardGridProps {
  rows: Task[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Task Name", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
];

export default function DashboardGrid({ rows }: DashboardGridProps) {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows as GridRowsProp}
        columns={columns}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
}
