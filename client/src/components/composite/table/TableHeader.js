import React from "react";
import styled, { css } from "styled-components";

const TableHeader = ({ templateColumn, titles }) => {
  return (
    <Container templateColumn={templateColumn}>
      {titles.map((title, index) => (
        <Content key={index}>{title}</Content>
      ))}
    </Container>
  );
};

TableHeader.displayName = "TableHeader";

export default TableHeader;

const Container = styled("div")(
  ({ templateColumn }) => css`
    display: grid;
    grid-template-columns: ${templateColumn};
    padding: 10px 20px;
  `
);

const Content = styled("div")``;
