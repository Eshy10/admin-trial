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
    LinksContainer,
    LinkInputForm,
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
    TagsDescription,
    AddLinkTextContainer,
    AddLinkText,
} from "./editMusicRef.styles";

import ReusableComponent from "@/components/reusable/reusable";
import RequestEditor from  "@/components/Editor";

export default function EditMusicReferencesForm() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/editImportantInfo');
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
            <ArtistTitle>Music References</ArtistTitle>
            <ArtistDescription>Include examples of music works that are similar to this request</ArtistDescription>
            <BarContainer>
                <BarItem barbg/>
                <BarItem barbg/>
                <BarItem barbg/>
                <BarItem />
            </BarContainer>
        </InnerArtistContainer>
        <FormContainer>
            <FormLabel music>Music References</FormLabel>
            <FormLabel resetmargin>Write more information about the references you are providing</FormLabel>
            <RequestEditor />
            <TagsInfoContainer>
                <LinkTitle>Links</LinkTitle>
                <TagsDescription>Add links to music references for this request</TagsDescription>
                    <LinksContainer>
                        <LinkInputForm type="text" placeholder="https://open.spotify.com/track/3icOFPIciIN8FQSyVlpYSF?si=7254fa69a9584f2c" />
                    </LinksContainer>
                    <LinksContainer>
                        <LinkInputForm type="text" placeholder="https://open.spotify.com/track/3icOFPIciIN8FQSyVlpYSF?si=7254fa69a9584f2c" />
                    </LinksContainer>
                    <LinksContainer>
                        <LinkInputForm type="text" placeholder="https://open.spotify.com/track/3icOFPIciIN8FQSyVlpYSF?si=7254fa69a9584f2c" />
                    </LinksContainer>
            </TagsInfoContainer>
            <AddLinkTextContainer>
                <AddLinkText>ADD LINK</AddLinkText>
            </AddLinkTextContainer>
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
