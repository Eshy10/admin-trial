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
} from "./acceptSubmission.styles";
import SubmissionAcceptedModal from "@/components/submissionAccepted/submissionAccepted";

export default function AcceptSubmissionModal({ messageTitle, messageDescription, onClose, onAddAnother, closeModal }) {
    const [showModal, setShowModal] = useState(false);
    const [requestCloseModal, setRequestCloseModal] = useState(true);
    const [showSubmissionAcceptedModal, setShowSubmissionAcceptedModal] = useState(false);

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
    const handleOpenSubmissionAcceptedModal = () => {
        setShowSubmissionAcceptedModal(true);
      };
    
      const handleCloseSubmissionAcceptedModal = () => {
        setShowSubmissionAcceptedModal(false);
        closeModal(); 
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
                    <ModalButton artistcolor>CLOSE</ModalButton> 
                </ModalButtonWrapper>
                <ModalButtonWrapper  artistbutton>
                    <ModalButton onClick={handleOpenSubmissionAcceptedModal}>YES, ACCEPT SUBMISSION</ModalButton>
                </ModalButtonWrapper>
            </ModalButtons>
            {showSubmissionAcceptedModal && (
            <SubmissionAcceptedModal 
                messageTitle="Submission Accepted!!"
                messageDescription="You have accepted a submission from James Arthur. An email would be sent to them to let them know your decision."
                onClose={handleCloseSubmissionAcceptedModal}
                closeModal={() => setShowModal(!showModal)}
            />
           )}
        </ModalContent>
    </ModalOverlay>
  )
}
