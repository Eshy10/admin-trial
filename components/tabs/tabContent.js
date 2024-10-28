import React from "react";
import { TabContentWrapper } from "./tabsComponent.styles";

export const TabContent = ({ isSelected, children }) =>
  isSelected ? <TabContentWrapper>{children}</TabContentWrapper> : null;
