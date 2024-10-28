import React from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    CloseIcon,
    DotsIcon,
    TopContainer,
    IconsWrapper,
    IconContainer,
    PriceText,
    TransactionDetailsWrapper,
    TitleText,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    SuccessBtnWrapper,
    SuccessBtn,
} from "./receivedModal.styles";

export default function ReceivedModalDetails({ transaction, onClose, closeModal }) {
      
  return (
        <ModalOverlay onClick={onClose}>
        <ModalContent>
            <TopContainer>
                <ModalTitle>Transaction Details</ModalTitle>
                <IconsWrapper>
                    <IconContainer>
                        <DotsIcon />       
                    </IconContainer>
                    <IconContainer onClick={() => closeModal()}>
                        <CloseIcon />       
                    </IconContainer>                
                </IconsWrapper>
            </TopContainer>
                <PriceText>$40</PriceText>
            <TransactionDetailsWrapper>
                <TitleText>Transaction Details</TitleText>
                <TableContainer>
                    <TableHeader>
                        <TableCell>Transaction Type:</TableCell>
                        <TableCell $headercolor $headerweight>{transaction.received}</TableCell>
                    </TableHeader>

                    <TableRow>
                        <TableCell>Date:</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Project Name:</TableCell>
                        <TableCell>{transaction.artistName}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Project Owner:</TableCell>
                        <TableCell>{transaction.owner}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Amount:</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Description:</TableCell>
                        <TableCell>{transaction.transactionDesc}</TableCell>
                    </TableRow>
                </TableContainer>
            </TransactionDetailsWrapper>
                <SuccessBtnWrapper>
                    <SuccessBtn>Success</SuccessBtn>
                </SuccessBtnWrapper>
        </ModalContent>
    </ModalOverlay>
  )
}
