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
    BlueText,
    BackContainer,
    BackText,
    BackIcon,
    MainContainer,
    PhotoWrapperContainer,
    PhotoWrapper,
    AvatarPhotoe,
    ProfileItemsContainer,
    ArtistName,
    ArtistSkills,
    HeadingTitle,
    DownloadIcon,
    OuterContainer,
    InnerContainer,
    SubmissionButtonWrapper,
    SubmissionButtons,
    SubmissionButton,
} from "./submissionDetails.styles";
import RequestCreatedModal from "@/components/requestCreatedModal/requestCreatedModal";
import MusicPlayer from "@/components/musicPlayer";
import AcceptSubmissionModal from "@/components/acceptSubmission/acceptSubmission";
import DeclineSubmissionModal from "@/components/declineSubmission/declineSubmission";

export default function DetailsTab() {
    const [showModal, setShowModal] = useState(false);
    const [acceptSubmissionModal, setSubmissionModal] = useState(false);
    const [closeAcceptSubmissioneModal, setCloseSubmissionModal] = useState(true);
    const [declineSubmissionModal, setDeclineSubmissionModal] = useState(false);
    const [closeDeclineSubmissioneModal, setCloseDeclineSubmissionModal] = useState(true);
    const [closRequesteModal, setCloseRequestModal] = useState(true);
    const [showDeclineModal, setShowDeclineModal] = useState(false);
    const [closDeclineeModal, setCloseDeclineModal] = useState(true);

    const router = useRouter();

    const handleBack = () => {
        router.back(); 
    };

    const handleOpentModal = () => {
        setShowModal(true);
      };

    const handleCloseRequestModal = () => {
        setCloseRequestModal(false);
      };

    const handleOpenSubmissionModal = () => {
        setSubmissionModal(true);
    };

    const handleCloseSubmissionModal = () => {
        setSubmissionModal(false);
        setCloseSubmissionModal(true);
      };

    const handleOpenDeclineModal = () => {
        setShowDeclineModal(true);
    };

    const handleCloseDeclineModal = () => {
        setShowDeclineModal(false);
        setCloseDeclineModal(true);
      };

  return (
    <ModalContent>
        <BackContainer  onClick={handleBack}>
            <BackIcon />
            <BackText>Back to request</BackText>
        </BackContainer>
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
        <MainContainer>
            <HeadingTitle>Submission Details</HeadingTitle>
            <PhotoWrapperContainer>
                <PhotoWrapper>
                    <ProfilePicture />
                    <ProfileItemsContainer>
                        <ArtistName>James Arthur</ArtistName>
                        <ArtistSkills>Singer, Songwriter</ArtistSkills>
                    </ProfileItemsContainer>
                </PhotoWrapper>
            </PhotoWrapperContainer>
            <RequestDetailsWrapper>
                <TitleText>Music Submission</TitleText>
                <OuterContainer>
                    <InnerContainer>
                        <MusicPlayer
                            filename="The girl is mine and she left"
                            cat="Singles"
                            newsearch
                            url=""
                            newdsn
                        />
                        <DownloadIcon />
                    </InnerContainer>
                    <InnerContainer>
                        <MusicPlayer
                            filename="The girl is mine and she left"
                            cat="Singles"
                            newsearch
                            url=""
                            newdsn
                        />
                        <DownloadIcon />
                    </InnerContainer>
                </OuterContainer>
                <OuterContainer>
                    <InnerContainer>
                        <MusicPlayer
                            filename="The girl is mine and she left"
                            cat="Singles"
                            newsearch
                            url=""
                            newdsn
                        />
                        <DownloadIcon />
                    </InnerContainer>
                    <InnerContainer>
                        <MusicPlayer
                            filename="The girl is mine and she left"
                            cat="Singles"
                            newsearch
                            url=""
                            newdsn
                        />
                        <DownloadIcon />
                    </InnerContainer>
                </OuterContainer>
            </RequestDetailsWrapper>
            
            <ImportantInfoWrapper>
                <TitleText>Other Information</TitleText>
                <DescriptionText>INSPIRING & POSITIVE BLUES/BLUESY SONGS with Male or Female Vocals are needed by a Film/TV Music Publisher</DescriptionText>
            </ImportantInfoWrapper>

            <SubmissionButtons>
                <SubmissionButtonWrapper artistborder>
                    <SubmissionButton artistcolor onClick={handleOpenDeclineModal}>DECLINE SUBMISSION</SubmissionButton> 
                </SubmissionButtonWrapper>
                <SubmissionButtonWrapper  artistbutton>
                    <SubmissionButton onClick={handleOpenSubmissionModal}>ACCEPT SUBMISSION</SubmissionButton>
                </SubmissionButtonWrapper>
            </SubmissionButtons>
        </MainContainer>
        {showModal && (
        <RequestCreatedModal
            messageTitle="Request created!"
            messageDescription="Your request has been successfully created and posted on Razu. You can now accept submissions from artists, manage and edit this request."
            onClose={handleCloseRequestModal}
            closeModal={() => setShowModal(!showModal)}
        />
            )}
            {acceptSubmissionModal && (
            <AcceptSubmissionModal
                messageTitle="Are you sure you want to accept this submission?"
                messageDescription="Do you really want to accept this submission? This is action permanent change and cannot be undone. An email would be sent to the artist to let them know that their submission has been accepted."
                onClose={handleCloseSubmissionModal}
                closeModal={() => setSubmissionModal(false)}
            />
            )}
            {showDeclineModal && (
            <DeclineSubmissionModal
                messageTitle="Are you sure you want to decline this submission?"
                messageDescription="Do you really want to decline this submission? This is action permanent change and cannot be undone. An email would be sent to the artist to let them know that their submission has been declined."
                onClose={handleCloseDeclineModal}
                closeModal={() =>  setShowDeclineModal(false)}
            />
            )}
    </ModalContent>
  )
}
