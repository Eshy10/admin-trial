import React from "react";

import {
    ButtonsContainer,
    TransactionsButtons,
    ButtonWrapper,
    ReceivedButton,
    PaymentButton,
    WithdrawalButton,
} from "./buttonsComponent.styles";
import SearchComponent from "@/components/search/search";

const TransactionsButtonsComponent = () => {
    return (
    <ButtonsContainer>
        <TransactionsButtons>
            <ButtonWrapper>
                <ReceivedButton>Received</ReceivedButton>
            </ButtonWrapper>
            <ButtonWrapper>
                 <PaymentButton>Payment</PaymentButton>
            </ButtonWrapper>
            <ButtonWrapper>
                <WithdrawalButton>Withdrawal</WithdrawalButton>
            </ButtonWrapper>
        </TransactionsButtons>
        <SearchComponent />
    </ButtonsContainer>
    );
  };
  
  export default TransactionsButtonsComponent;