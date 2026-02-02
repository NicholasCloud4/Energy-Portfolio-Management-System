'use client';

import { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridPaginationModel } from '@mui/x-data-grid';

export interface Task {
    id: number;
    name: string;
    status: string;
}

interface TestGridProps {
    rows: Task[];
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Task Name', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
];

export default function TestGrid({ rows }: TestGridProps) {
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        pageSize: 5,
        page: 0,
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows as GridRowsProp}
                columns={columns}
                pagination
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[5, 10, 20]}
            />
        </div>
    );
}