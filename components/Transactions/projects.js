import React, { useEffect, useState } from "react";

import {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    SearchContainer,
    TabsContainer,
    MobileContainer
} from "../../components/Transactions/projects.styles";
import SearchComponent from "@/components/search/search";
import RequestTabs, { RequestTabContent } from "@/components/Transactions/projects/projectTab/tabsComponent";
import Active from "@/components/Transactions/projects/active";
import Completed from "@/components/Transactions/projects/completed";
import ActiveMobile from "@/components/Transactions/projects/mobileView/active";
import CompletedMobile from "@/components/Transactions/projects/mobileView/completed";

const Projects = () => {
  const [selected, setSelected] = useState("Active");

      const handleTabClick = (tab) => {
        setSelected(tab)
    }

    return (
        <TransactionsWrapper>
            <TransactionsTitle>Projects</TransactionsTitle>
            <TransactionsHeader>
                    <TabsContainer>
                    <SearchContainer>
                      <SearchComponent /> 
                    </SearchContainer>
                        <RequestTabs
                            tabs={[
                            {
                              label: "Active",
                              count: 3, 
                            },
                            {
                              label: "Completed",
                              count: 2, 
                            },
                            ]}
                            selected={selected}
                            setSelected={handleTabClick}
                            >
                            <RequestTabContent isSelected={selected === "Active"}>
                                <Active />
                                <MobileContainer>
                                    <ActiveMobile />
                                </MobileContainer>
                            </RequestTabContent>
                            <RequestTabContent isSelected={selected === "Completed"}>
                                <Completed />
                                <MobileContainer>
                                    <CompletedMobile />
                                </MobileContainer>
                            </RequestTabContent>
                        </RequestTabs>
                    </TabsContainer>
            </TransactionsHeader>
            </TransactionsWrapper> 
    );
  };
  
  export default Projects;