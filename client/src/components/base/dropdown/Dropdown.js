import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as IconArrow } from "assets/image/icons/icon-dropdown.svg";
import { Typography, TypographyVariant } from "../index";
import useOnClickOutside from "hooks/use-onclick-outside";
import { motion } from "framer-motion";

const Dropdown = ({
  option = [],
  placeholder,
  onChange,
  defaultValue,
  value,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = useCallback((id, value) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    onChange && onChange(value);
    setIsOpen(false);
  }, []);

  const collapseVariants = {
    open: { opacity: 1, display: "block" },
    closed: { opacity: 0, display: "none" },
  };

  const defaultSelected =
    (defaultValue || value) && option?.length
      ? option.find((item) =>
          defaultValue ? item.value === defaultValue : item.value === value
        )
      : false;

  useEffect(() => {
    if (value) setSelectedItem(option.find((item) => item.value === value)?.id);
  }, [value]);

  return (
    <DropdownContainer error={error} ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown}>
        <Typography variant={TypographyVariant.text2}>
          {selectedItem
            ? option.find((item) => item.id === selectedItem).label
            : defaultSelected.label || placeholder}
        </Typography>
        <IconContainer>
          <IconArrow />
        </IconContainer>
      </DropdownHeader>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={collapseVariants}
        transition={{ duration: 0.15 }}
      >
        <DropdownList>
          {option.map((item) => (
            <DropdownItem
              key={item.id}
              onClick={() => handleItemClick(item.id, item.value)}
            >
              <Typography variant={TypographyVariant.text2}>
                {item.label}
              </Typography>
            </DropdownItem>
          ))}
        </DropdownList>
      </motion.div>
    </DropdownContainer>
  );
};

Dropdown.displayName = "Dropdown";

export default Dropdown;

const DropdownContainer = styled("div")(
  ({ theme, error }) => css`
    width: 100%;
    max-height: 45px;
    border: 1px solid ${error ? theme.color.red : theme.color.four};
    border-radius: 0.428571rem;
    position: relative;
    backface-visibility: hidden;
    background-color: ${theme.color.four};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `
);

const DropdownHeader = styled("div")(
  () => css`
    cursor: pointer;
    padding: 7px 14px;
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

const DropdownList = styled("div")(
  ({ theme }) => css`
    max-height: 240px;
    border-radius: 0.428571rem;
    background-color: ${theme.color.four};
    overflow-y: scroll;
    position: absolute;
    z-index: 100;
    top: calc(100% + 5px);
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    &::-webkit-scrollbar {
      /* 1 - скроллбар */
      width: 4px;
      height: 4px;
      cursor: pointer;
      margin-right: 10px;
    }

    &::-webkit-scrollbar-button {
      /* 2 - кнопка */
    }

    &::-webkit-scrollbar-track {
      /* 3 - трек */
      width: 10px;
      margin: 20px;
    }

    &::-webkit-scrollbar-track-piece {
      /* 4 - видимая часть трека */
    }

    &::-webkit-scrollbar-thumb {
      /* 5 - ползунок */
      border-radius: 2px;
      background-color: ${theme.button.primary};
    }

    &::-webkit-scrollbar-corner {
      /* 6 - уголок */
    }

    &::-webkit-resizer {
      /* 7 - изменение размеров */
    }
  `
);

const DropdownItem = styled("div")(
  ({ theme }) => css`
    padding: 12px 14px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.color.main};
    }
  `
);
