import React from "react";
import { useRouter } from 'next/router';
import {
    RequestWrapper,
    BackContainer,
    BackIcon,
    BackText,
    RequestFormContainer,
    InnerArtistContainer,
    FormContainer,
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
} from "./editRequestDetails.styles";

import RequestEditor from  "@/components/Editor";
import ItemSelector from  "@/components/itemSelector";

export default function EditRequestDetailsForm() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/editMusicRef');
      };
    const handleCancel = () => {
    router.push('/dashboard'); 
    };
    const handleBack = () => {
        router.back(); 
    };

  return (
    <RequestWrapper>
        <BackContainer  onClick={handleBack}>
        <BackIcon />
        <BackText>Back to request</BackText>
        </BackContainer>
        <RequestFormContainer>
        <InnerArtistContainer>
            <ArtistTitle>Request Details</ArtistTitle>
            <ArtistDescription>Enter a more detailed information about this request</ArtistDescription>
            <BarContainer>
                <BarItem barbg/>
                <BarItem barbg/>
                <BarItem />
                <BarItem />
            </BarContainer>
        </InnerArtistContainer>
        <FormContainer>
            <FormLabel>Enter more detailed information about this request</FormLabel>
            <RequestEditor />
            <ItemSelector />
        </FormContainer>
        </RequestFormContainer>
    <ButtonsWrapper>
        <RequestButtonContainer artistborder artistcolor>
            <CloseIcon />
            <RequestButton artistcolor leftpadding onClick={handleBack}>BACK</RequestButton>
        </RequestButtonContainer>
        <RequestButtonContainer artistbutton>
            <RequestButton rightpadding onClick={handleNext}>NEXT</RequestButton>
            <NextIcon />
        </RequestButtonContainer>
    </ButtonsWrapper>
    </RequestWrapper>
  )
}
