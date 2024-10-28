import React, { useState } from "react";

import {
    DashboardWrapper,
    TopContainer,
    MetricsWrapper,
    MetricsDetailBoxes,
    TopItems,
    BottomItems,
    TopText,
    BottomText,
    DateWrapper,
    DateContainer,
    DateText,
    AddIcon,
    BlueIcon,
    PurpleIcon,
    GreenIcon,
    InfoIcon,
    RequestTextContainer,
    RequestText,
    RequestButtonsWrapper,
    TabsWrapper,
    SearchWrapper
} from "./music.styles";

import ReceivedModalDetails from "@/components/dashboardModal/receivedModal";
import PaymentModalDetails from "@/components/dashboardModal/paymenModal";
import DeleteTransactionModal from "@/components/deleteTransactionModal/deleteTransactionModal";
import TheLink from "@/components/TheLink";
import SearchComponent from "@/components/search/search";
import RequestTabs, { RequestTabContent } from "@/components/musicSync/requestsTab/tabsComponent";
import OpenRequests from "@/components/musicSync/openRequests";
import ClosedRequests from "@/components/musicSync/closedRequests";

export default function MusicSync() {
    const [selected, setSelected] = useState("Open Requests");
    const [showModal, setShowModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);

    const handleTabClick = (tab) => {
        setSelected(tab)
    }

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleOpenPaymentModal = () => {
        setShowPaymentModal(true);
    };

    const handleOpenWithdrawModal = () => {
        setShowWithdrawModal(true);
    };
    const handleCloseModal = () => {
        setCloseModal(false);
    }; 
    const handleOpenDeleteModal = () => {
        setShowDeleteModal(true);
    };
    const usersStats = [
        {
          title: "No. of Requests",
          val: 32,
          icontop: "/assets/group-icon-user.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#DADDFB",
        },
        {
          title: "No. of Submissiond",
          val: 1453,
          icontop: "/assets/checkbox-blue.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#D6FFFB",
        },
        {
          title: "No. Of Approved Requests",
          val: 10,
          icontop: "/assets/line-chart-filll.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#DFFAD5",
        },
        ]  
  return (
    <DashboardWrapper>
        <TopContainer>
            <TheLink to="/newRequest">
                <DateWrapper>
                    <DateContainer> 
                        <AddIcon />
                        <DateText $newsize>ADD NEW REQUEST</DateText>
                    </DateContainer>
                </DateWrapper>
            </TheLink>
            <MetricsWrapper> 
            {usersStats.map(({ title, val, icontop, iconbottom, bgcolor, }, idx) => (
                 <MetricsDetailBoxes key={idx} $bgcolor={bgcolor}>
                 <TopItems>
                     <TopText>{title}</TopText>
                     <BlueIcon  src={icontop}/>
                 </TopItems>
                 <BottomItems>
                 <BottomText>{val}</BottomText> 
                 {/* <InfoIcon src={iconbottom}/> */}
                 </BottomItems>
             </MetricsDetailBoxes>
              ))}      
            </MetricsWrapper>
            <RequestTextContainer>
                <RequestText>Requests</RequestText>
                     <SearchWrapper>
                        <SearchComponent />
                    </SearchWrapper>
                    <TabsWrapper>
                        <RequestTabs
                            tabs={[
                            {
                              label: "Open Requests",
                              count: 7, 
                            },
                            {
                              label: "Closed Requests",
                              count: 5, 
                            },
                            ]}
                            selected={selected}
                            setSelected={handleTabClick}
                            >
                            <RequestTabContent isSelected={selected === "Open Requests"}>
                                <OpenRequests />
                            </RequestTabContent>
                            <RequestTabContent isSelected={selected === "Closed Requests"}>
                                <ClosedRequests />
                            </RequestTabContent>
                        </RequestTabs>
                    </TabsWrapper>
            </RequestTextContainer>
        </TopContainer>
        {showModal && (
        <ReceivedModalDetails 
        onClose={handleCloseModal}
        closeModal={() => setShowModal(!showModal)}
        />
        )}
        {showPaymentModal && (
        <PaymentModalDetails 
        onClose={handleCloseModal}
        closeModal={() => setShowPaymentModal(!showPaymentModal)}
        />
        )}
        {showDeleteModal && (
        <DeleteTransactionModal
            messageTitle="Are you sure?"
            messageDescription="Do you really want to delete this transaction? This action cannot be undone.?"
            onClose={handleCloseModal}
            closeModal={() => setShowDeleteModal(!showDeleteModal)}
        />
        )}
    </DashboardWrapper>
  )
}
