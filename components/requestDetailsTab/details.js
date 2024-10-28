import React, { useState } from "react";
import { useRouter } from 'next/router';
import {
    ModalContent,
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
} from "./details.styles";
import RequestCreatedModal from "@/components/requestCreatedModal/requestCreatedModal";

export default function DetailsTab({ onClose, closeModal }) {
    const [showModal, setShowModal] = useState(false);
    const [closRequesteModal, setCloseRequestModal] = useState(true);
    const router = useRouter();

    const handleOpenRequestModal = () => {
        setShowModal(true);
      };

    const handleCloseRequestModal = () => {
        setCloseRequestModal(false);
      };

  return (
        <ModalContent>
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
            {showModal && (
            <RequestCreatedModal
                messageTitle="Request created!"
                messageDescription="Your request has been successfully created and posted on Razu. You can now accept submissions from artists, manage and edit this request."
                onClose={handleCloseRequestModal}
                closeModal={() => setShowModal(!showModal)}
            />
        )}
    </ModalContent>
  )
}
