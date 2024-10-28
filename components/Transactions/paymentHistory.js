import React, { useEffect, useState } from "react";

import {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    SearchContainer,
    TabsContainer,
    MobileContainer 
} from "../../components/Transactions/paymentHistory.styles";
import { paginationData } from "../../utils/paginationData";
import Pagination from "@/components/pagination/pagination";
import SearchComponent from "@/components/search/search";
import ReceivedModalDetails from "@/components/dashboardModal/receivedModal";
import PaymentModalDetails from "@/components/dashboardModal/paymenModal";
import WithdrawalModalDetails from "@/components/dashboardModal/withdrawModal";
import Received from "@/components/dashboard//transactions/received";
import Payments from "@/components/dashboard/transactions/payment";
import Withdrawals from "@/components/dashboard/transactions/withdrawal";
import DashboardTrasactionTabs, { DashboardTabContent } from "@/components/Transactions/paymentTab/tabsComponent";
import DeleteTransactionModal from "@/components/deleteTransactionModal/deleteTransactionModal";
import ReceivedMobile from "@/components/dashboard/transactions/mobileView/received";
import PaymentMobile from "@/components/dashboard/transactions/mobileView/payment";
import WithdrawalMobile from "@/components/dashboard/transactions/mobileView//withdrrawal";
import usePagination from "../pagination/usePagination";
const PaymentHistory = () => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [modalVisibleReceived, setModalVisibleReceived] = useState(false);
    const [modalVisiblePayment, setModalVisiblePayment] = useState(false);
    const [modalVisibleWithdrawal, setModalVisibleWithdrawal] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showReceivedModal, setShowReceivedModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);

    const [selected, setSelected] = useState("Received");

    const handleTabClick = (tab) => {
      setSelected(tab)
  }

    const handleCloseModal = () => {
        setCloseModal(false);
    }; 

    const handleOpenReceivedModal = () => {
        setShowReceivedModal(true);
    };

    const handleOpenPaymentModal = () => {
        setShowPaymentModal(true);
    };

    const handleOpenWithdrawModal = () => {
        setShowWithdrawModal(true);
    };

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
    
      const handleWithdrawalRowClick = (transaction) => {
        setSelectedTransaction(transaction);
        setModalVisibleWithdrawal(true);
      };
      const handleWithdrawalCloseModal = () => {
        setSelectedTransaction(null);
        setModalVisibleWithdrawal(false);
      };

      const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
      };
  
      const handleOpenDeleteModal = () => {
        setShowDeleteModal(true);
      };
    
      const itemsPerPage = 5;

      const { currentPage, totalPages, currentPageData, onPageChange } = usePagination(paginationData,itemsPerPage);
    return (
      <TransactionsWrapper>
      <TransactionsTitle>Recent User Transactions</TransactionsTitle>
      <TransactionsHeader>
              <TabsContainer>
                <SearchContainer>
                    <SearchComponent /> 
                </SearchContainer>
                  <DashboardTrasactionTabs
                     tabs={[
                      "Received",
                      "Payments",
                      "Withdrawals",
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
                      <DashboardTabContent isSelected={selected === "Withdrawals"}>
                          <Withdrawals 
                              currentPageData={currentPageData} 
                              onRowClickWithdrawal={handleWithdrawalRowClick}
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={onPageChange}
                              OpenDeleteModal={handleOpenDeleteModal}
                          />
                          <MobileContainer>
                              <WithdrawalMobile 
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
        {modalVisibleWithdrawal && (        
        <WithdrawalModalDetails      
            transaction={selectedTransaction} 
            onClose={handleWithdrawalCloseModal}
            closeModal={() => setShowWithdrawModal(!showWithdrawModal)}
        />
        )} 
        {showDeleteModal && (
        <DeleteTransactionModal
            messageTitle="Are you sure?"
            messageDescription="Do you really want to delete this transaction? This action cannot be undone.?"
            onClose={handleCloseDeleteModal}
            closeModal={() => setShowDeleteModal(!showDeleteModal)}
        />
        )}
  </TransactionsWrapper>
    );
  };
  
  export default PaymentHistory;