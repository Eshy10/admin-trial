import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from 'next/router';
import {
    ArtistWrapper,
    BackContainer,
    BackIcon,
    BackText,
    ArtistFormContainer,
    InnerArtistContainer,
    FormContainer,
    FormLabel,
    FormInput,
    PasswordFormInput,
    GenderSelectField,
    InputContainer,
    InputWrapper,
    OutLineEyeContainer,
    ArtistTitle,
    ArtistDescription,
    BarContainer,
    BarItem,
    ProfilePhotoContainer,
    AvatarrIcon,
    AvatarDescText,
    ButtonsWrapper,
    ArtistButtonContainer,
    ArtistButton,
    CloseIcon,
    NextIcon,
} from "./newArtist.styles";

export default function NewArtist() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/newArtistSocial');
      };
    const handleCancel = () => {
    router.push('/artists'); 
    };
    const handleBack = () => {
        router.back(); 
    };

  return (
    <ArtistWrapper>
        <BackContainer  onClick={handleBack}>
        <BackIcon />
        <BackText>Back</BackText>
        </BackContainer>
        <ArtistFormContainer>
        <InnerArtistContainer>
            <ArtistTitle>Add a New Artist</ArtistTitle>
            <ArtistDescription>Enter artist’s personal information</ArtistDescription>
            <BarContainer>
                <BarItem barbg/>
                <BarItem />
                <BarItem />
            </BarContainer>
        </InnerArtistContainer>
        <ProfilePhotoContainer>
            <AvatarrIcon />
            <AvatarDescText>Upload Artist’s Picture</AvatarDescText>
        </ProfilePhotoContainer>
        <FormContainer>
            <FormLabel>First Name</FormLabel>
            <FormInput type="text" placeholder="Enter artist first name"/>
            <FormLabel>Last Name</FormLabel>
            <FormInput type="text" placeholder="Enter artist last namee"/>
            <FormLabel>Username</FormLabel>
            <FormInput type="text" placeholder="Enter artist username"/>
            <FormLabel>Gender</FormLabel>
            <GenderSelectField id="Select" name="Select">
                <option value="option1">Select</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </GenderSelectField>
            <FormLabel>Age</FormLabel>
            <FormInput type="text" placeholder="Enter your age"/>
            <InputContainer>
            <FormLabel>Password</FormLabel>
            <InputWrapper>
                <PasswordFormInput type="password" placeholder="Enter your password"/>
                <OutLineEyeContainer>
                    <AiOutlineEye />
                </OutLineEyeContainer>
            </InputWrapper>
            <FormLabel>Confirm Password</FormLabel>
            <InputWrapper>
                <PasswordFormInput type="password" placeholder="Confirm user password"/>
                <OutLineEyeContainer>
                    <AiOutlineEye />
                </OutLineEyeContainer>
            </InputWrapper>
            </InputContainer>
        </FormContainer>
        </ArtistFormContainer>
    <ButtonsWrapper>
        <ArtistButtonContainer artistborder artistcolor>
            <CloseIcon />
            <ArtistButton artistcolor leftpadding onClick={handleCancel}>CANCEL</ArtistButton>
        </ArtistButtonContainer>
        <ArtistButtonContainer artistbutton>
            <ArtistButton rightpadding onClick={handleNext}>NEXT</ArtistButton>
            <NextIcon />
        </ArtistButtonContainer>
    </ButtonsWrapper>
    </ArtistWrapper>
  )
}
