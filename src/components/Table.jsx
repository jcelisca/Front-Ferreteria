import { useMemo, useState, useEffect } from "react";
import { COLUMNS } from "../columns";
import { useTable } from "react-table";

const Table = () => {

    const [inventario, setInventario] = useState([]);
    const initialUrl = "http://localhost:8080/inventario";

    const fetchInventario = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setInventario(data))
            .then(error => console.log(error))
    };

    useEffect(() => {
        fetchInventario(initialUrl);
    }, []);

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => inventario, []);

    const tableInstance = useTable({
        columns,
        data
    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                        <th></th>
                    </tr>
                ))}
            </thead>
            <tbody{...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell)=>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                                <td></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );

}

export default Table;