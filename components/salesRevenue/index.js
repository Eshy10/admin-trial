import React, { useEffect, useState } from "react";

import {
    DashboardWrapper,
    TopContainer,
    MetricsWrapper,
    MetricsDetailBoxes,
    TopItems,
    BottomItems,
    TopText,
    BottomText,
    DateContainer,
    DateText,
    CalendarIcon,
    BlueIcon,
    PurpleIcon,
    GreenIcon,
    InfoIcon,
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    BarChartContainer,
    ChartTitle,
    CardWrapper,
    CardBoxes,
    CardTitle,
    CardDetailContainer,
    CardDetail,
    TextWrapper,
    ProfilePicture,
    FullName,
    CollaborationInfo,
    TextSpan,
    SpendingAmountContainer,
    SpendingAmount,
    SearchContainer,
    TabsContainer,
    MobileContainer
} from "./salesRevenue.styles";

import BarChart from '@/components/charts/barChart';
import { Data } from "../../utils/Data";
import TheLink from "@/components/TheLink";
import Received from "@/components/dashboard//transactions/received";
import Payments from "@/components/dashboard/transactions/payment";
import SearchComponent from "@/components/search/search";
import ReceivedModalDetails from "@/components/dashboardModal/receivedModal";
import PaymentModalDetails from "@/components/dashboardModal/paymenModal";
import DeleteTransactionModal from "@/components/deleteTransactionModal/deleteTransactionModal";
import { paginationData } from "../../utils/paginationData";
import CustomDatePicker from "@/components/datePicker/datePicker";
import DashboardTrasactionTabs, { DashboardTabContent } from "@/components/dashboard/transactions/transactionsTab/tabsComponent";
import ReceivedMobile from "@/components/dashboard/transactions/mobileView/received";
import PaymentMobile from "@/components/dashboard/transactions/mobileView/payment";
import WithdrawalMobile from "@/components/dashboard/transactions/mobileView//withdrrawal";

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js'
import usePagination from "../pagination/usePagination";

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement);


export default function SalesAndRevenue() {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [modalVisibleReceived, setModalVisibleReceived] = useState(false);
    const [modalVisiblePayment, setModalVisiblePayment] = useState(false);
    const [modalVisibleWithdrawal, setModalVisibleWithdrawal] = useState(false); 

    const [showModal, setShowModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);

    const [selected, setSelected] = useState("Received");

    const handleTabClick = (tab) => {
        setSelected(tab)
    }

    const handleReceivedRowClick = (transaction) => {
        setSelectedTransaction(transaction);
        setModalVisibleReceived(true);
      };
      const handleReceivedCloseModal = () => {
        setSelectedTransaction(null);
        setModalVisibleReceived(false);
      };
    
      const handlePaymentRowClick = (transaction) => {
        setSelectedTransaction(transaction);
        setModalVisiblePayment(true);
      };
      const handlePaymentCloseModal = () => {
        setSelectedTransaction(null);
        setModalVisiblePayment(false);
      };

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

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.month), 
        datasets: [
          {
            label: 'Transaction Revenue',
            data: Data.map((data) => data.percentage),
            backgroundColor: "#36D7FF",
            borderColor: "#36D7FF",
            fill: false,
          }
        ]
      });
      const itemsPerPage = 5;

      const { currentPage, totalPages, currentPageData, onPageChange } = usePagination(paginationData,itemsPerPage);
        const usersStats = [
            {
              title: "No. of Active Users",
              val: 3247,
              icontop: "/assets/group-line.png",
              iconbottom: "/assets/information-line.png",
              bgcolor: "#CBEEFD",
            },
            {
              title: "Total No of Revenue Generated",
              val: "$305,298.00",
              icontop: "/assets/money-dollar-circle-line.png",
              iconbottom: "/assets/information-line.png",
              bgcolor: "#DADDFB",
            },
            {
              title: "No. of Collaborations Created",
              val: 241,
              icontop: "/assets/team-line.png",
              iconbottom: "/assets/information-line.png",
              bgcolor: "#D6FFFB",
            },
            ]  

    const revenueStats = [
        {
            title: "Victoria Wilson",
            val: 145,
            amount: "$17,234.67",
        },
        {
            title: "Victoria Wilson",
            val: 145,
            amount: "$17,234.67",
        },
        ]  
  return (
    <DashboardWrapper>
    <TopContainer>
        <DateContainer>
            <CustomDatePicker placeholderText="Select Date" />
        </DateContainer>
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

        <CardWrapper>
        {revenueStats.map(({ title, val, amount, }, idx) => (
            <CardBoxes  key={idx} >
                <CardTitle>Highest Spending Artists</CardTitle>
                <CardDetailContainer>
                    <CardDetail>
                        <ProfilePicture />
                        <TextWrapper>
                            <FullName>{title}</FullName>
                            <CollaborationInfo><TextSpan>{val}</TextSpan>Collaborations</CollaborationInfo>
                        </TextWrapper>
                    </CardDetail>
                    <SpendingAmountContainer>
                        <SpendingAmount>{amount}</SpendingAmount>
                    </SpendingAmountContainer>
                </CardDetailContainer>
                <CardDetailContainer>
                    <CardDetail>
                        <ProfilePicture />
                        <TextWrapper>
                            <FullName>{title}</FullName>
                            <CollaborationInfo><TextSpan>{val}</TextSpan>Collaborations</CollaborationInfo>
                        </TextWrapper>
                    </CardDetail>
                    <SpendingAmountContainer>
                        <SpendingAmount>{amount}</SpendingAmount>
                    </SpendingAmountContainer>
                </CardDetailContainer>
                <CardDetailContainer noborder>
                    <CardDetail>
                        <ProfilePicture />
                        <TextWrapper>
                            <FullName>{title}</FullName>
                            <CollaborationInfo><TextSpan>{val}</TextSpan>Collaborations</CollaborationInfo>
                        </TextWrapper>
                    </CardDetail>
                    <SpendingAmountContainer>
                        <SpendingAmount>{amount}</SpendingAmount>
                    </SpendingAmountContainer>
                </CardDetailContainer>
            </CardBoxes>
         ))}
        </CardWrapper>
    </TopContainer>
    
    <BarChartContainer>
        <ChartTitle>Total Revenue</ChartTitle>
        <BarChart chartData={chartData} />
    </BarChartContainer>

    <TransactionsWrapper>
        <TransactionsTitle>Transactions</TransactionsTitle>
        <TransactionsHeader>
                    <TabsContainer>
                    <SearchContainer>
                          <SearchComponent /> 
                      </SearchContainer>
                        <DashboardTrasactionTabs
                           tabs={[
                            "Received",
                            "Payments",
                            ]}
                            selected={selected}
                            setSelected={handleTabClick}
                            >
                            <DashboardTabContent isSelected={selected === "Received"}>
                                <Received 
                                    currentPageData={currentPageData} 
                                    onRowClickReceived={handleReceivedRowClick}
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={onPageChange}
                                    OpenDeleteModal={handleOpenDeleteModal}
                                    />
                                     <MobileContainer>
                                    <ReceivedMobile 
                                      currentPageData={currentPageData} 
                                      onRowClickReceived={handleReceivedRowClick}
                                      currentPage={currentPage}
                                      totalPages={totalPages}
                                      onPageChange={onPageChange}
                                      OpenDeleteModal={handleOpenDeleteModal}
                                    />
                                  </MobileContainer>
                            </DashboardTabContent>
                            <DashboardTabContent isSelected={selected === "Payments"}>
                                <Payments 
                                    currentPageData={currentPageData} 
                                    onRowClickPayment={handlePaymentRowClick}
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={onPageChange}
                                    OpenDeleteModal={handleOpenDeleteModal}
                                    />
                                     <MobileContainer>
                                      <PaymentMobile 
                                        currentPageData={currentPageData} 
                                        onRowClickReceived={handleReceivedRowClick}
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={onPageChange}
                                        OpenDeleteModal={handleOpenDeleteModal}
                                      />
                                  </MobileContainer>
                            </DashboardTabContent>
                        </DashboardTrasactionTabs>
                    </TabsContainer>
            </TransactionsHeader>
    </TransactionsWrapper>
    {modalVisibleReceived && (
        <ReceivedModalDetails 
            transaction={selectedTransaction} 
            onClose={handleReceivedCloseModal}
            closeModal={() => setShowModal(!showModal)}
    />
    )} 
    {modalVisiblePayment && (
    <PaymentModalDetails 
        transaction={selectedTransaction} 
        onClose={handlePaymentCloseModal}
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
