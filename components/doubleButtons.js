import React from "react";

import {
    ButtonsContainer,
    TransactionsButtons,
    ButtonWrapper,
    ReceivedButton,
    PaymentButton,
} from "./buttonsComponent/buttonsComponent.styles";

const TransactionsButton = ({ text1, text2, value1 = undefined, value2 = undefined }) => {
    return  value1 !== undefined &&  value2 !== undefined ? (
        <>
         <ButtonsContainer>
        <TransactionsButtons>
            <ButtonWrapper>
                <ReceivedButton>{`${text1} (${value1})`}</ReceivedButton>
            </ButtonWrapper>
            <ButtonWrapper>
                 <PaymentButton>{`${text2} (${value2})`}</PaymentButton>
            </ButtonWrapper>
        </TransactionsButtons>
    </ButtonsContainer>
        </>
      ) : (
        <>
         <ButtonsContainer>
        <TransactionsButtons>
            <ButtonWrapper>
                <ReceivedButton>{text1}</ReceivedButton>
            </ButtonWrapper>
            <ButtonWrapper>
                 <PaymentButton>{text2}</PaymentButton>
            </ButtonWrapper>
        </TransactionsButtons>
    </ButtonsContainer>
        </>
      );

  };
  
  export default TransactionsButton;