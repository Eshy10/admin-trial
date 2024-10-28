import React from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    ModalDescription,
    ModalButtons,
    ModalButton,
    ModalText,
    CloseIcon,
    CheckMarkIcon,
    CloseIconContainer,
    CheckMarkIconContainer,
} from "./deleteTransactionModal.styles";

export default function DeleteTransactionModal({ messageTitle, messageDescription, onClose, onAddAnother, closeModal }) {

  return (
        <ModalOverlay onClick={onClose}>
        <ModalContent>
            <CloseIconContainer onClick={() => closeModal()}>
                <CloseIcon />       
            </CloseIconContainer>
            <CheckMarkIconContainer>
                <CheckMarkIcon />      
            </CheckMarkIconContainer>
            <ModalTitle>{messageTitle}</ModalTitle>
            <ModalDescription>{messageDescription}</ModalDescription>
            {/* <ModalTitle>Artist Added!</ModalTitle>
            <ModalDescription>You have successfully added an artist. Would you like to add another?</ModalDescription> */}
            <ModalButtons>
                <ModalButton artistborder onClick={() => closeModal()}>
                    <ModalText artistcolor>CANCEL</ModalText> 
                </ModalButton>
                <ModalButton  artistbutton onClick={() => closeModal()}>
                    <ModalText>DELETE</ModalText>
                </ModalButton>
            </ModalButtons>
        </ModalContent>
    </ModalOverlay>
  )
}
