import React from "react";

import {
    TransactionsTabsWrapper,
    TransactionsInnerTabs,
    TransactionsTabsContainer,
    TransactionsTab,
} from "./tabsComponent.styles";
const TabsComponent = (props) => {
    const { selected, setSelected, children } = props;

    return (
        <TransactionsTabsWrapper>
            <TransactionsInnerTabs>
                {props.tabs.map((tab) => (
                <TransactionsTabsContainer key={tab}>
                    {tab === selected ? (
                       <TransactionsTab $transactionsbg $transactionscolor onClick={() => setSelected(tab)}>{tab}</TransactionsTab>
                    ) : (
                    <TransactionsTab selected={tab === selected}  onClick={() => setSelected(tab)}>
                        {tab}
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
  export default TabsComponent;