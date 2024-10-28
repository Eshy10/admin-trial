import React from "react";

import {
    TransactionsTabsWrapper,
    TransactionsInnerTabs,
    TransactionsTabsContainer,
    TransactionsTab,
} from "./tabsComponent.styles";
const RequestTabs = (props) => {
    const { selected, setSelected, children } = props;

    return (
        <TransactionsTabsWrapper>
            <TransactionsInnerTabs>
                {props.tabs.map((tab) => (
                <TransactionsTabsContainer key={tab}>
                    {tab.label === selected ? (
                       <TransactionsTab  $requestscolor $bordercolor onClick={() => setSelected(tab.label)}>{`${tab.label} (${tab.count})`}</TransactionsTab>
                    ) : (
                    <TransactionsTab selected={tab.label === selected}  onClick={() => setSelected(tab.label)}>
                     {`${tab.label} (${tab.count})`}
                    </TransactionsTab>
                    )}
                </TransactionsTabsContainer>
                ))}
            </TransactionsInnerTabs>
                {children}
        </TransactionsTabsWrapper>
    );
  };

  export * from "./tabContent";
  export default RequestTabs;