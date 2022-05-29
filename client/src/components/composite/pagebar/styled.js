import styled, { css } from "styled-components";
import { Typography } from "../../base";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const PageBarContainer = styled("div")(
  ({ theme }) => css`
    width: 300px;
    background-color: ${theme.color.main};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    border-radius: 12px;
  `
);

export const PageBarHeader = styled("div")`
  padding: 20px;
  text-align: center;
`;

export const PageBarLinks = styled("div")``;

export const PageBarLine = styled("div")`
  width: 90%;
  margin: 0 auto 20px;
  height: 1.5px;
  background-color: white;
  opacity: 0.4;
`;

export const PageBarFooter = styled(Typography)`
  padding: 20px;
`;

export const PageBarListLink = styled(motion.ul)`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Link = styled(NavLink)`
  opacity: 0.6;
  background-color: inherit;
  margin: 10px 30px;
  padding: 0 10px;
  display: flex;
  gap: 15px;
  text-decoration: none;

  &.active {
    opacity: 1;
    border-radius: 10px;
  }
`;

export const IconContainer = styled("div")``;

export const TitleContainer = styled("p")``;
