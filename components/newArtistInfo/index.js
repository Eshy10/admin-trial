import React, { useState } from 'react';
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
    ArtistTitle,
    ArtistDescription,
    BarContainer,
    BarItem,
    ButtonsWrapper,
    ArtistButtonContainer,
    ArtistButton,
    LocationContainer,
    LocationInput,
    LocationIcon,
    LeftArrowIcon,
    AddIcon,
} from "./newArtistInfo.styles";

import ArtistAddedModal from "@/components/artistAddedModal/artistAddedModal";
import ArtistSelector from  "@/components/itemSelector/artistSelector";
import TheLink from "@/components/TheLink";

export default function ArtistOtherInfo() {
    const [showModal, setShowModal] = useState(false);
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

    const handleAddArtist = () => {
        // Perform actions to add the artist
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };
    
      const handleAddAnotherArtist = () => {
        // Perform actions to add another artist
        setShowModal(false);
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
            <ArtistDescription>Enter other information</ArtistDescription>
            <BarContainer>
                <BarItem barbg/>
                <BarItem barbg/>
                <BarItem barbg/>
            </BarContainer>
        </InnerArtistContainer>
        <ArtistSelector />
        <FormContainer>
            <FormLabel>Recording Company</FormLabel>
            <LocationContainer>
                <LocationIcon />
                <LocationInput type="text" placeholder="Search"  />
            </LocationContainer> 
        </FormContainer>
        </ArtistFormContainer>
    <ButtonsWrapper>
        <ArtistButtonContainer artistborder artistcolor>
            <LeftArrowIcon />
            <ArtistButton artistcolor leftpadding onClick={handleBack}>BACK</ArtistButton>
        </ArtistButtonContainer>
        <TheLink to="/artistProfile">
        <ArtistButtonContainer artistbutton addartistbutton>
            <AddIcon />
            <ArtistButton rightpadding onClick={handleAddArtist}>ADD ARTIST</ArtistButton>
        </ArtistButtonContainer>
        </TheLink>
    </ButtonsWrapper>
    {showModal && (
        <ArtistAddedModal
            messageTitle="Artist Added!"
            messageDescription="You have successfully added an artist. Would you like to add another?"
            onClose={handleCloseModal}
            closeModal={() => setShowModal(!showModal)}
        />
    )}
    </ArtistWrapper>
  )
}
