import React, { useState } from "react";
import { useRouter } from 'next/router';
import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    ModalDescription,
    ModalButtons,
    ModalButtonWrapper,
    ModalButton,
    CloseIcon,
    CheckMarkIcon,
    CloseIconContainer,
    CheckMarkIconContainer,
} from "./deleteRequest.styles";
import RequestDeletedModal from "@/components/requestDeleted/requestDeleted";

export default function DeleteRequestModal({ messageTitle, messageDescription, onClose, closeModal }) {
    const [showModal, setShowModal] = useState(false);
    const [requestCloseModal, setRequestDeletedModal] = useState(true);
    const router = useRouter();

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setRequestDeletedModal(false);
    };


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
                <ModalButtonWrapper artistborder>
                    <ModalButton artistcolor onClick={() => closeModal()}>CANCEL</ModalButton> 
                </ModalButtonWrapper>
                <ModalButtonWrapper  artistbutton>
                    <ModalButton onClick={handleOpenModal}>YES, DELETE REQUEST</ModalButton>
                </ModalButtonWrapper>
            </ModalButtons>
            {showModal && (
            <RequestDeletedModal 
                messageTitle="Request Deleted"
                onClose={handleCloseModal}
                closeModal={() => setShowModal(!showModal)}
            />
           )}
        </ModalContent>
    </ModalOverlay>
  )
}
