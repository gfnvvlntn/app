import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import Typography, { TypographyVariant } from "../typography/Typography";

import { ReactComponent as IconArrow } from "assets/image/icons/icon-dropdown.svg";

const Dropdown = ({ option = [], placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = useCallback((id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    setIsOpen(false);
  }, []);

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        <Typography variant={TypographyVariant.text2}>
          {selectedItem
            ? option.find((item) => item.id === selectedItem).label
            : placeholder}
        </Typography>
        <IconContainer isOpen={isOpen}>
          <IconArrow />
        </IconContainer>
      </DropdownHeader>
      <DropdownBody isOpen={isOpen}>
        {option.map((item) => (
          <DropdownItem key={item.id} onClick={() => handleItemClick(item.id)}>
            <Typography variant={TypographyVariant.text2}>
              {item.label}
            </Typography>
          </DropdownItem>
        ))}
      </DropdownBody>
    </DropdownContainer>
  );
};

Dropdown.displayName = "Dropdown";

export default Dropdown;

const DropdownContainer = styled("div")(
  ({ theme }) => css`
    width: 300px;
    border: 1px solid ${theme.button.primary};
    border-radius: 12px;
    overflow: hidden;
  `
);

const DropdownHeader = styled("div")(
  () => css`
    cursor: pointer;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
);

const IconContainer = styled("div")(
  ({ isOpen }) => css`
    transform: ${isOpen ? "rotate(0deg)" : "rotate(90deg)"};
    transition: all 0.2s ease-in-out;
  `
);

const DropdownBody = styled("div")(
  ({ theme, isOpen }) => css`
    border-top: 1px solid ${theme.button.primary};
    display: ${isOpen ? "block" : "none"};
  `
);

const DropdownItem = styled("div")(
  ({ theme }) => css`
    padding: 15px;
    cursor: pointer;
    &:hover {
      background-color: ${theme.color.main};
    }
  `
);
