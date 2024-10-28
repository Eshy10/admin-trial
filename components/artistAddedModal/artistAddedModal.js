import React from "react";
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
} from "./artistAddedModal.styles";

export default function ArtistAddedModal({ messageTitle, messageDescription, onClose, onAddAnother, closeModal }) {
    const router = useRouter();

    const handleNext = () => {
        router.push('/newArtistInfo');
      };
    const handleCancel = () => {
    router.push('/dashboard'); 
    };
    const handleBack = () => {
        router.back(); 
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
                    <ModalButton onClick={onAddAnother}>ADD ANOTHER ARTIST</ModalButton>
                </ModalButtonWrapper>
            </ModalButtons>
        </ModalContent>
    </ModalOverlay>
  )
}
