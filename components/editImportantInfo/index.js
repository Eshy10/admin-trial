import React, { useState } from "react";
import { useRouter } from 'next/router';
import {
    RequestWrapper,
    BackContainer,
    BackIcon,
    BackText,
    RequestFormContainer,
    InnerArtistContainer,
    FormContainer,
    FormInputWrapper,
    InnerWrapper,
    FormInputContainer,
    FormLabel,
    ArtistTitle,
    ArtistDescription,
    BarContainer,
    BarItem,
    ButtonsWrapper,
    RequestButtonContainer,
    RequestButton,
    CloseIcon,
    NextIcon,
    TagsInfoContainer,
    LinkTitle,
    FormInput,
    InputWrapper,
    DateIcon,
    TimeIcon
} from "./editImportantInfo.styles";

import RequestEditor from  "@/components/Editor";
import EditRequestModal from "@/components/editRequestModal/editRequestModal";

export default function EditImporttantInformationForm() {
    const [showModal, setShowModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);
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

    const handleOpenRequestModal = () => {
        setShowModal(true);
      };

    const handleCloseRequestModal = () => {
        setCloseModal(false);
      };

  return (
        <RequestWrapper>
         <BackContainer  onClick={handleBack}>
            <BackIcon />
            <BackText>Back to request</BackText>
         </BackContainer>
         <RequestFormContainer>
            <InnerArtistContainer>
                <ArtistTitle>Important Information</ArtistTitle>
                <ArtistDescription>Are there are other information you’d lik o share? Include them here.</ArtistDescription>
                <BarContainer>
                    <BarItem barbg/>
                    <BarItem barbg/>
                    <BarItem barbg/>
                    <BarItem barbg/>
                </BarContainer>
            </InnerArtistContainer>
            <FormContainer>
                <FormLabel resetmargin>Include any important information for this music request</FormLabel>
                <RequestEditor />
                <TagsInfoContainer>
                    <LinkTitle>What is the deadline for this request? You can include date and time.</LinkTitle>
                    <FormInputWrapper>
                        <InnerWrapper>
                            <FormLabel>Date</FormLabel>
                            <FormInputContainer>
                                <FormInput type="text" placeholder="01/01/2023" inputmar/>
                                <InputWrapper>
                                    <DateIcon />
                                </InputWrapper>
                            </FormInputContainer>
                        </InnerWrapper>
                        <InnerWrapper>
                            <FormLabel>Time</FormLabel>
                            <FormInputContainer>
                                <FormInput type="text" placeholder="09:00 AM" />
                                <InputWrapper>
                                    <TimeIcon />
                                </InputWrapper>
                            </FormInputContainer>
                        </InnerWrapper>
                    </FormInputWrapper>
                </TagsInfoContainer>
            </FormContainer>
         </RequestFormContainer>
        <ButtonsWrapper>
            <RequestButtonContainer artistborder artistcolor>
                <CloseIcon />
                <RequestButton artistcolor leftpadding onClick={handleBack}>BACK</RequestButton>
            </RequestButtonContainer>
            <RequestButtonContainer artistbutton widthbtn>
                <RequestButton  onClick={handleOpenRequestModal}>CREATE REQUEST</RequestButton>
                <NextIcon />
            </RequestButtonContainer>
        </ButtonsWrapper>
        {showModal && (
            <EditRequestModal
                messageTitle="Artist Added!"
                messageDescription="You have successfully added an artist. Would you like to add another?"
                onClose={handleCloseRequestModal}
                closeModal={() => setShowModal(!showModal)}
            />
        )}
        </RequestWrapper>
  )
}
