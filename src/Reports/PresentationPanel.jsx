import React from "react";
import { Table } from "react-bootstrap";

const PresentationPanel = ({ reportData, isLoading, error }) => {
  if(!reportData){
    return;
  }

  const {columns, rows} = reportData;
  return (
    <div className="border">
      <div>
        <Table striped="true">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {row.values.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PresentationPanel;
