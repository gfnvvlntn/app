import React, { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as IconArrow } from "assets/image/icons/icon-dropdown.svg";
import { Typography, TypographyVariant } from "../index";
import useOnClickOutside from "../../../hooks/use-onclick-outside";

const Dropdown = ({ option = [], placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = useCallback((id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    setIsOpen(false);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown}>
        <Typography variant={TypographyVariant.text2}>
          {selectedItem
            ? option.find((item) => item.id === selectedItem).label
            : placeholder}
        </Typography>
        <IconContainer>
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
    border: 1px solid ${theme.color.four};
    border-radius: 0.428571rem;
    overflow: hidden;
    background-color: ${theme.color.four};
  `
);

const DropdownHeader = styled("div")(
  () => css`
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
);

const IconContainer = styled("div")(
  () => css`
    transform: rotate(90deg);
    transition: all 0.2s ease-in-out;
  `
);

const DropdownBody = styled("div")(
  ({ theme, isOpen }) => css`
    border-top: 1px solid ${theme.color.second};
    display: ${isOpen ? "block" : "none"};
  `
);

const DropdownItem = styled("div")(
  ({ theme }) => css`
    padding: 15px 10px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.color.main};
    }
  `
);
