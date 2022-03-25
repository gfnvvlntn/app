import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import Typography, {TypographyVariant} from "../../base/typography/Typography";

const TabLabel = ({ labels, openedTab, activeTab }) => {
  const onOpenedTab = useCallback((label) => {
    openedTab(label);
  }, []);

  return (
    <TabLabelContainer>
      {labels.map((label, index) => {
        return (
          <Label
            key={index}
            active={label === activeTab}
            onClick={() => onOpenedTab(label)}
            variant={TypographyVariant.h2}
          >
            {label}
          </Label>
        );
      })}
    </TabLabelContainer>
  );
};

TabLabel.displayName = "TabLabel";

export default TabLabel;

const TabLabelContainer = styled("div")(
  ({}) => css`
    display: flex;
    gap: 50px;
  `
);
const Label = styled(Typography)(({ theme, active }) => css`
  color: ${active ? theme.button.primary : theme.color.green};
  cursor: pointer;
`);
