import React, { useState } from "react";

import {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    ButtonsWrapper,
    SearchContainer,
    TabsContainer,
    MobileContainer 
} from "../../components/Transactions/requests.styles";
import SearchComponent from "@/components/search/search";
import RequestTabs, { RequestTabContent } from "@/components/Transactions/requestsTab/tabsComponent";
import OpenRequests from "@/components/Transactions/requests/openRequests";
import AcceptedRequests from "@/components/Transactions/requests/acceptedRequests";
import OpenRequestsMobile from "@/components/Transactions/requests/mobileView/open";
import AcceptedRequestsMobile from "@/components/Transactions/requests/mobileView/accepted";

const Requests = () => {
    const [selected, setSelected] = useState("Open Requests");

    const handleTabClick = (tab) => {
        setSelected(tab)
    }
    return (
          <TransactionsWrapper>
            <TransactionsTitle>Requests</TransactionsTitle>
            <TransactionsHeader>
                    <TabsContainer>
                        <SearchContainer>
                            <SearchComponent />
                        </SearchContainer>
                        <RequestTabs
                            tabs={[
                            "Open Requests",
                            "Accepted Requests",
                            ]}
                            selected={selected}
                            setSelected={handleTabClick}
                            noRadius 
                            noBg 
                            nonColor
                            >
                            <RequestTabContent isSelected={selected === "Open Requests"}>
                                <OpenRequests />
                                <MobileContainer>
                                    <OpenRequestsMobile />
                                </MobileContainer>
                            </RequestTabContent>
                            <RequestTabContent isSelected={selected === "Accepted Requests"}>
                                <AcceptedRequests />
                                <MobileContainer>
                                    <AcceptedRequestsMobile />
                                </MobileContainer>
                            </RequestTabContent>
                        </RequestTabs>
                    </TabsContainer>
            </TransactionsHeader>
            </TransactionsWrapper> 
    );
  };
  
  export default Requests;
