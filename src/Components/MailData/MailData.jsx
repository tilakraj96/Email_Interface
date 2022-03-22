import * as React from 'react';
import './MailData.scss';
import { DataGrid } from '@mui/x-data-grid';
// import { Users } from '../../data';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'Body', headerName: 'Body', width: 400 },
];



export default function DataTable({users}) {
  return (
      <div className="MailData">
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                checkboxSelection
            />
            </div>
      </div>
    
  );
}