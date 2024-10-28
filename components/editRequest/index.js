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
    FormInput,
    ArtistTitle,
    ArtistDescription,
    BarContainer,
    BarItem,
    ButtonsWrapper,
    RequestButtonContainer,
    RequestButton,
    CloseIcon,
    NextIcon,
} from "./editRequest.styles";

export default function EditRequestForm() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/editRequestDetails');
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
            <ArtistTitle>Request Title</ArtistTitle>
            <ArtistDescription>Enter a title and a brief summary about request</ArtistDescription>
            <BarContainer>
                <BarItem barbg/>
                <BarItem />
                <BarItem />
                <BarItem />
            </BarContainer>
        </InnerArtistContainer>
        <FormContainer>
            <FormLabel>What is the tite of this request?</FormLabel>
            <FormInput type="text" placeholder="Give your request a name"/>
        </FormContainer>
        </RequestFormContainer>
    <ButtonsWrapper>
        <RequestButtonContainer artistborder artistcolor>
            <CloseIcon />
            <RequestButton artistcolor leftpadding onClick={handleCancel}>BACK</RequestButton>
        </RequestButtonContainer>
        <RequestButtonContainer artistbutton>
            <RequestButton rightpadding onClick={handleNext}>NEXT</RequestButton>
            <NextIcon />
        </RequestButtonContainer>
    </ButtonsWrapper>
    </RequestWrapper>
  )
}
