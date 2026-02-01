import { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { columns as initialColumns, rows as initialRows } from '../internals/data/gridData';

export default function CustomizedDataGrid() {
  const [rows, setRows] = useState<GridValidRowModel[]>([]);
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setRows([...initialRows]);
    setColumns([...initialColumns]);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
      <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          initialState={{
            pagination: { paginationModel: { pageSize: 20 } },
          }}
          pageSizeOptions={[10, 20, 50]}
          disableColumnResize
          density="compact"
          slotProps={{
            filterPanel: {
              filterFormProps: {
                logicOperatorInputProps: { variant: 'outlined', size: 'small' },
                columnInputProps: { variant: 'outlined', size: 'small', sx: { mt: 'auto' } },
                operatorInputProps: { variant: 'outlined', size: 'small', sx: { mt: 'auto' } },
                valueInputProps: { InputComponentProps: { variant: 'outlined', size: 'small' } },
              },
            },
          }}
      />
  );
}
