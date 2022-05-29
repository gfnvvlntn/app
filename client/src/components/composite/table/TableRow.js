import React from "react";
import styled, { css } from "styled-components";

const TableRow = ({ rowData, templateColumn, isOdd }) => {
  return (
    <Container isOdd={isOdd} templateColumn={templateColumn}>
      {Object.values(rowData).map((rowItem, index) => (
        <Content key={index}>{rowItem}</Content>
      ))}
    </Container>
  );
};

TableRow.displayName = "TableRow";

export default TableRow;

const Container = styled("div")(
  ({ isOdd, templateColumn, theme }) => css`
    display: grid;
    grid-template-columns: ${templateColumn};
    background-color: ${!isOdd ? theme.color.third : theme.color.four};
    padding: 5px 20px;
    align-items: center;
  `
);

const Content = styled("div")(({}) => css``);
