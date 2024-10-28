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
} from "./newAdmin.styles";
import FileInput from "@/components/fileInput";

export default function NewAdminUser() {
    const router = useRouter();
    const [avatarImage, setAvatarImage] = useState(null);

    const handleNext = () => {
        router.push('/newArtistSocial');
      };
    const handleCancel = () => {
    router.push('/artists'); 
    };
    const handleBack = () => {
        router.back(); 
    };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
        setAvatarImage(reader.result);
        };

        reader.readAsDataURL(file);
    }
  };

  return (
    <ArtistWrapper>
        <BackContainer  onClick={handleBack}>
            <BackIcon/>
            <BackText>Back</BackText>
        </BackContainer>
        <ArtistFormContainer>
        <InnerArtistContainer>
            <ArtistTitle>Add a New Admin User</ArtistTitle>
        </InnerArtistContainer>
        <ProfilePhotoContainer>
            <FileInput onChange={handleFileChange} imageUrl={avatarImage} />
            <AvatarDescText>Upload Artist’s Picture</AvatarDescText>
        </ProfilePhotoContainer>
        <FormContainer>
            <FormLabel>First Name</FormLabel>
            <FormInput type="text" placeholder="Enter user’s first name"/>
            <FormLabel>Last Name</FormLabel>
            <FormInput type="text" placeholder="Enter user’s last namee"/>
            <FormLabel>Email Address</FormLabel>
            <FormInput type="text" placeholder="Enter user’s email address"/>
            <FormLabel>Select Role</FormLabel>
            <GenderSelectField id="Select" name="Select">
                <option value="option1">Select</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </GenderSelectField>
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
        <ArtistButtonContainer btnwidth artistbutton>
            <ArtistButton rightpadding onClick={handleNext}>ADD USER</ArtistButton>
            <NextIcon />
        </ArtistButtonContainer>
    </ButtonsWrapper>
    </ArtistWrapper>
  )
}
