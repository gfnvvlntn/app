import React, { useState } from "react";
import styled, { css } from "styled-components";
import TabLabel from "./TabLabel";

const Tabs = (props) => {
  const children =
    props && props.children
      ? Array.isArray(props.children)
        ? props.children
        : [props.children]
      : [];
  const [activeTabs, setActiveTabs] = useState(
    (children[0] || children)?.props?.label
  );
  const openedTab = (tab) => setActiveTabs(tab);

  let content;
  let labels = [];

  return (
    <TabsContainer>
      {React.Children.map(children, (child) => {
        labels.push(child.props.label);
        if (child.props.label === activeTabs) content = child.props.children;
      })}
      <TabLabel activeTab={activeTabs} labels={labels} openedTab={openedTab} />
      <TabsLine />
      <TabContent>{content}</TabContent>
    </TabsContainer>
  );
};
Tabs.displayName = "Tabs";

export default Tabs;

const TabsContainer = styled("div")`
  padding: 20px;
`;

const TabContent = styled("div")``;

const TabsLine = styled("div")(
  ({}) => css`
    width: 100%;
    height: 2px;
    background-color: grey;
    margin: 20px 0;
  `
);
