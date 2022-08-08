import React from 'react';
import { IObject } from 'types';

interface ITableAction {
  title: string;
  handler: (item: any) => void;
}

interface ITableProps {
  columns: string[];
  rows: IObject[];
  actions: ITableAction[];
}

const Table: React.FC<ITableProps> = ({ columns, rows, actions }) => (
  <table>
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column}>{row[column]}</td>
          ))}
          <td>
            {actions.map(({ title, handler }) => (
              <button key={title} onClick={() => handler(row)}>
                {title}
              </button>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
