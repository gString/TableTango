import React from 'react';

import { Table, Row, HeaderCell, Cell } from './DataTable.style';
import TableLine from "./TableLine";
import TableHeaderLine from "./TableHeaderLine";

const Line = ({entry}) =>
<Row>
    <Cell>{entry.ip_address}</Cell>
    <Cell>{entry.first_name}</Cell>
    <Cell>{entry.last_name}</Cell>
    <Cell>{entry.email}</Cell>
</Row>

const Header = () =>
<thead>
    <tr>
        <HeaderCell>Ip Address</HeaderCell>
        <HeaderCell>First Name</HeaderCell>
        <HeaderCell>Last Name</HeaderCell>
        <HeaderCell>Email</HeaderCell>
    </tr>
</thead>

const DataTableView = ({ filters, filteredData, tableID }) =>
<Table>
    <TableHeaderLine tableID={tableID} />
    <tbody>
        {filteredData.map( entry => <TableLine key={entry.id}
                                               entry={entry}
                                               tableID={tableID} />)}
    </tbody>
</Table>

export default DataTableView;