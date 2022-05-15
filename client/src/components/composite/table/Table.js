import React from "react";
import styled, { css } from "styled-components";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ titles = [], data, templateColumn = "1fr" }) => {
  return (
    <TableContainer>
      {!!titles && (
        <TableHeader templateColumn={templateColumn} titles={titles} />
      )}
      {data &&
        data.map((rowData, index) => (
          <TableRow
            isOdd={index % 2 === 0}
            rowData={rowData}
            key={index}
            templateColumn={templateColumn}
          />
        ))}
    </TableContainer>
  );
};

Table.displayName = "Table";

export default Table;

const TableContainer = styled("div")(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.color.second};
    border-radius: 10px;
    overflow: hidden;
  `
);
