import styled, { css } from "styled-components";
import { Typography } from "../../components/base";
import { motion } from "framer-motion";

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

export const HomeHeader = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.button.primary};
    margin: 20px;
  `
);

export const HomeBody = styled("div")(
  () => css`
    display: flex;
    padding: 20px;
    gap: 20px;
  `
);

export const HomeWidgets = styled(motion.ul)(
  () => css`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `
);
