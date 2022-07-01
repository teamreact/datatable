
import React, {  useEffect, useState } from 'react';
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
   IntegratedSelection,
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';


import { generateRows,globalSalesValues, } from './generator';

const TableComponent = ({ ...restProps }) => (
  <Table.Table
    {...restProps}
    className="table-striped"
  />
);

const DevExpress = () => {
    const [columns] = useState([
    { name: 'name', title: 'Nombre' },
    { name: 'gender', title: 'Sexo' },
    { name: 'city', title: 'Ciudad' },
    { name: 'car', title: 'Automovil' },
  ]);
const [tableColumnExtensions] = useState([
    { columnName: 'name', width: '20%' },
    { columnName: 'gender', width: '15%' },
    { columnName: 'city', width: 'auto' },
    { columnName: 'car',  wordWrapEnabled: true },

  ]);
   const [rows] = useState(generateRows({ length: 1000000 }));
   const [selection, setSelection] = useState([]);
   const [sorting, setSorting] = useState([{ columnName: 'city', direction: 'asc' }]);
   return (

      <div>
        <h1>GRILLA DevExpress</h1>
         <span>
        Total rows selected:
        {' '}
        {selection.length}
      </span>
      <div className="card">
      <Grid
         rows={rows}
         columns={columns}
      >
      <SortingState
         sorting={sorting}
         onSortingChange={setSorting}
      />
        <IntegratedSorting />
          <PagingState
            defaultCurrentPage={0}
            pageSize={6}
          />
          <SelectionState
            selection={selection}
            onSelectionChange={setSelection}
          />
          <IntegratedPaging />
          <IntegratedSelection />
          <Table columnExtensions={tableColumnExtensions}
                  tableComponent={TableComponent}

          />
          <TableHeaderRow  showSortingControls />
               <TableSelection showSelectAll />

          <PagingPanel />
        </Grid>
      </div>
    </div>
   )
}

export default  DevExpress