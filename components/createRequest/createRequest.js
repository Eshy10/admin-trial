import React, { useState } from "react";
import { useRouter } from 'next/router';
import {
    ModalOverlay,
    ModalContent,
    ModalTitleContainer,
    ModalTitle,
    ModalDescription,
    ModalButtons,
    ModalButtonWrapper,
    ModalButton,
    CloseIcon,
    InfoIcon,
    CloseIconContainer,
    CheckMarkIconContainer,
    RequestInfoContainer,
    MusicDetailsWrapper,
    RecordTitle,
    DeadlineText,
    ProfileContainer,
    InnerWrapper,
    ProfilePicture,
    BigText,
    SmallText,
    BottomContainer,
    RequestDetailsWrapper,
    MusicRefWrapper,
    ImportantInfoWrapper,
    TitleText,
    DescriptionText,
    TagsWrapper,
    TagsItems,
    BlueTextContainer,
    BlueText
} from "./createRequest.styles";
import RequestCreatedModal from "@/components/requestCreatedModal/requestCreatedModal";

export default function CreateRequestModal({ onClose, closeModal }) {
    const [showModal, setShowModal] = useState(false);
    const [closRequesteModal, setCloseRequestModal] = useState(true);
    const [showRequestCreatedModal, setShowRequestCreatedModal] = useState(false);
    const router = useRouter();

    const handleOpenRequestModal = () => {
        setShowModal(true);
      };

    const handleCloseRequestModal = () => {
        setCloseRequestModal(false);
      };

      const handleOpenRequestCreatedModal = () => {
        setShowRequestCreatedModal(true);
      };
    
      const handleCloseRequestCreatedModal = () => {
        setShowRequestCreatedModal(false);
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
            <ModalTitleContainer>
              <ModalTitle>Before you create and publish your music sync request, please take look at the preview and ensure that it includes all the necessary information and effectively communicates your needs.</ModalTitle>
            </ModalTitleContainer>
            <RequestInfoContainer>
                <MusicDetailsWrapper>
                    <RecordTitle>INSPIRING & POSITIVE BLUES/BLUESY SONGS with Male or Female Vocals are needed by a Film/TV Music Publisher</RecordTitle>
                    <DeadlineText>Deadline: May 30th, 2023,   09:00 AM</DeadlineText>
                    <ProfileContainer>
                        <InnerWrapper>
                            <ProfilePicture />
                            <BigText>Posted by: Razu</BigText>
                        </InnerWrapper>
                        <SmallText>Posted on:  05/05/2023</SmallText>
                    </ProfileContainer>
                </MusicDetailsWrapper>
            </RequestInfoContainer>
            <BottomContainer>
                <RequestDetailsWrapper>
                    <TitleText>Request Details</TitleText>
                    <DescriptionText>INSPIRING & POSITIVE BLUES/BLUESY SONGS with Male or Female Vocals are needed by a Film/TV Music Publisher</DescriptionText>
                    <TagsWrapper>
                        <TagsItems>Pop</TagsItems>
                        <TagsItems>R&B</TagsItems>
                        <TagsItems>Soul</TagsItems>
                        <TagsItems>Soul</TagsItems>
                    </TagsWrapper>
                </RequestDetailsWrapper>
                <MusicRefWrapper>
                    <TitleText>Music References</TitleText>
                    <DescriptionText>This Library is on the lookout for a WIDE RANGE of Covers Songs that could fit on a playlist with the following references (and others like them):</DescriptionText>
                    <BlueTextContainer>
                        <BlueText>“Silent Night” - Tyler Shaw</BlueText>
                        <BlueText>““Silent Night” - Tyler Shaw</BlueText>
                        <BlueText>“Silent Night” - Tyler Shaw</BlueText>
                    </BlueTextContainer>
                </MusicRefWrapper>
                <ImportantInfoWrapper>
                    <TitleText>Important Information</TitleText>
                    <DescriptionText>INSPIRING & POSITIVE BLUES/BLUESY SONGS with Male or Female Vocals are needed by a Film/TV Music Publisher</DescriptionText>
                    <DescriptionText redcolor>Deadline: May 30th, 2023,   09:00 AM</DescriptionText>
                </ImportantInfoWrapper>
            </BottomContainer>
            <ModalButtons>
                <ModalButtonWrapper artistborder cancelbutton>
                    <ModalButton artistcolor onClick={onClose}>CANCEL</ModalButton> 
                </ModalButtonWrapper>
                <ModalButtonWrapper  artistbutton>
                    <ModalButton  onClick={handleOpenRequestCreatedModal}>CREATE REQUEST</ModalButton>
                </ModalButtonWrapper>
            </ModalButtons>
            {showRequestCreatedModal && (
            <RequestCreatedModal
                messageTitle="Request created!"
                messageDescription="Your request has been successfully created and posted on Razu. You can now accept submissions from artists, manage and edit this request."
                onClose={handleCloseRequestCreatedModal}
                // closeModal={() => setShowModal(!showModal)}
            />
        )}
        </ModalContent>
    </ModalOverlay>
  )
}
