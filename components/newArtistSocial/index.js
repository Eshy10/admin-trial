import React from "react";
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
    LocationContainer,
    LocationInput,
    LocationIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon,
    SoundCloudIcon,
    SocialUrlDescription,
} from "./newArtistSocial.styles";

export default function ArtistSocialInfo() {
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
    <ArtistWrapper>
    <BackContainer  onClick={handleBack}>
        <BackIcon />
        <BackText>Back</BackText>
        </BackContainer>
        <ArtistFormContainer>
        <InnerArtistContainer>
            <ArtistTitle>Add a New Artist</ArtistTitle>
            <ArtistDescription>Enter artist’s social information</ArtistDescription>
            <BarContainer>
                <BarItem barbg/>
                <BarItem barbg/>
                <BarItem />
            </BarContainer>
        </InnerArtistContainer>
        <ProfilePhotoContainer>
            <AvatarrIcon />
            <AvatarDescText>Upload Artist’s Picture</AvatarDescText>
        </ProfilePhotoContainer>
        <FormContainer>
            <FormLabel>Artist Name</FormLabel>
            <FormInput type="text" placeholder="Artist name"/>
            <FormLabel>Email Address</FormLabel>
            <FormInput type="text" placeholder="Enter artst email address"/>
            <FormLabel>Phone Number</FormLabel>
            <FormInput type="number" placeholder="Enter artst phone number"/>
            <FormLabel>Location</FormLabel>
            <LocationContainer>
                <LocationIcon />
                <LocationInput type="text" placeholder="Search"  />
            </LocationContainer> 
            <SocialUrlDescription>Enter social URL</SocialUrlDescription>
            <FormLabel>Facebook</FormLabel>
            <LocationContainer>
                <FacebookIcon />
                <LocationInput type="text" placeholder="https://www.facebook.com/username"  />
            </LocationContainer>

            <FormLabel>Instagram</FormLabel>
            <LocationContainer>
                <InstagramIcon />
                <LocationInput type="text" placeholder="https://www.instagram.com/username"  />
            </LocationContainer>

            <FormLabel>Twitter</FormLabel>
            <LocationContainer>
                <TwitterIcon />
                <LocationInput type="text" placeholder="https://www.twitter.com/username"  />
            </LocationContainer>

            <FormLabel>Youtube</FormLabel>
            <LocationContainer>
                <YouTubeIcon />
                <LocationInput type="text" placeholder="https://www.youtube.com/username"  />
            </LocationContainer>

            <FormLabel>Soundcloud</FormLabel>
            <LocationContainer>
                <SoundCloudIcon />
                <LocationInput type="text" placeholder="https://www.soundcloud.com/username"  />
            </LocationContainer>
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
