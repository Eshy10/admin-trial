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
} from "./submissionAccepted.styles";

export default function SubmissionAcceptedModal({ messageTitle, messageDescription, onClose, onAddAnother, closeModal }) {
    const [showModal, setShowModal] = useState(false);
    const [submissionCloseModal, setSubmissionCloseModal] = useState(true);

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
        setSubmissionCloseModal(false);
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
                <ModalButtonWrapper artistborder onClick={() => closeModal()}>
                    <ModalButton artistcolor>CLOSE</ModalButton> 
                </ModalButtonWrapper>
                <ModalButtonWrapper  artistbutton>
                    <ModalButton>MESSAGE ARTIST</ModalButton>
                </ModalButtonWrapper>
            </ModalButtons>
        </ModalContent>
        </ModalOverlay>
  )
}
