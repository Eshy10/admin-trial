import React from "react";
import { TabContentWrapper } from "./tabsComponent.styles";

export const RequestTabContent = ({ isSelected, children }) =>
  isSelected ? <TabContentWrapper>{children}</TabContentWrapper> : null;
