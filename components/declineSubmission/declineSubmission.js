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
    RedInfoIcon,
    CheckMarkIcon,
    CloseIconContainer,
    CheckMarkIconContainer,
} from "./declineSubmission.styles";
import SubmissionDeclinedModal from "@/components/submissionDecline/submissionDecline";

export default function DeclineSubmissionModal({ messageTitle, messageDescription, onClose, onAddAnother, closeModal }) {
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
                <RedInfoIcon />      
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
                    <ModalButton onClick={handleOpenModal}>YES, DECLINE SUBMISSION</ModalButton>
                </ModalButtonWrapper>
            </ModalButtons>
            {showModal && (
            <SubmissionDeclinedModal 
                messageTitle="Submission Declined!"
                messageDescription="You have declined a submission from James Arthur. An email would be sent to them to let them know your decision."
                onClose={handleCloseModal}
                closeModal={() => setShowModal(!showModal)}
            />
           )}
        </ModalContent>
    </ModalOverlay>
  )
}
