import React from "react";
import { TabContentWrapper } from "./tabsComponent.styles";

export const ReviewTabContent = ({ isSelected, children }) =>
  isSelected ? <TabContentWrapper>{children}</TabContentWrapper> : null;
