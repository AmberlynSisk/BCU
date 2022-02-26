import React, { useState, useEffect} from 'react';
import { useTable } from 'react-table';

// require("es6-promise").polyfill();
// require("isomorphic-fetch");

export default function TransactionTable() {

    // const [data, setData] = useState([]);
    // const [q, setQ] = useState('');

    // useEffect(() => {
    //     fetch()
    //     .then(response => response.json())
    //     .then(json => setData)
    // }, [])

    const columns = React.useMemo(
        () => [
            {
            Header: "Date YYYY/MM/DD",
            accessor: 'col1'
            },
            {
            Header: 'Description',
            accessor: 'col2',
            },
            {
            Header: 'Category',
            accessor: 'col3',
            },
            {
            Header: 'Amount',
            accessor: 'col4',
            },
        ],
        []
    )

    const data = React.useMemo(
        () => [
          {
            col1: '2022/02/22',
            col2: 'Movie Tickets',
            col3: 'Entertainment',
            col4: '$20.00'
          },
          {
            col1: '2022/02/01',
            col2: 'VA Income',
            col3: 'Income',
            col4: '$1800.00',
          },
          {
            col1: '2022/01/30',
            col2: 'Whataburger',
            col3: 'Food',
            col4: '$35.00',
          },
        ],
        []
      )

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })



          return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }
