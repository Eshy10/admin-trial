import React from "react";
import { TabContentWrapper } from "./tabsComponent.styles";

export const DashboardTabContent = ({ isSelected, children }) =>
  isSelected ? <TabContentWrapper >{children}</TabContentWrapper> : null;
