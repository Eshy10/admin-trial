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
    InfoIcon,
    CloseIconContainer,
    CheckMarkIconContainer,
} from "./closeRequestModal.styles";
import RequestClosedModal from "@/components/requestClosed/requestClosed";

export default function CloseRequestModal({ messageTitle, messageDescription, onClose, onAddAnother, closeModal }) {
    const [showModal, setShowModal] = useState(false);
    const [requestCloseModal, setRequestCloseModal] = useState(true);

    const router = useRouter();

    const handleNext = () => {
        router.push('');
      };
    const handleCancel = () => {
    router.push('/dashboard'); 
    };
    const handleBack = () => {
        router.back(); 
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setRequestCloseModal(false);
    };
  return (
        <ModalOverlay onClick={onClose}> 
        <ModalContent>
            <CloseIconContainer onClick={() => closeModal()}>
                <CloseIcon />       
            </CloseIconContainer>
            <CheckMarkIconContainer>
                <InfoIcon />      
            </CheckMarkIconContainer>
            <ModalTitle>{messageTitle}</ModalTitle>
            <ModalDescription>{messageDescription}</ModalDescription>
            {/* <ModalTitle>Artist Added!</ModalTitle>
            <ModalDescription>You have successfully added an artist. Would you like to add another?</ModalDescription> */}
            <ModalButtons>
                <ModalButtonWrapper artistborder onClick={() => closeModal()}>
                    <ModalButton artistcolor>CANCEL</ModalButton> 
                </ModalButtonWrapper>
                <ModalButtonWrapper  artistbutton>
                    <ModalButton onClick={handleOpenModal}>YES, CLOSE REQUEST</ModalButton>
                </ModalButtonWrapper>
            </ModalButtons>
            {showModal && (
            <RequestClosedModal 
                messageTitle="Request Closed!!"
                messageDescription="You have successfully closed this request."
                onClose={handleCloseModal}
                closeModal={() => setShowModal(!showModal)}
            />
           )}
        </ModalContent>
    </ModalOverlay>
  )
}
