import React from "react";
import { useRouter } from 'next/router';
import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    CloseIcon,
    TopContainer,
    LeftContainer,
    CloseIconContainer,
    FollowsnWrapper,
    InnerWrapper,
    BackgroundImageWrapper,
    FollowsDetails,
    FullName,
    ArtustName,
    TagsContainer,
    TagItem,
    ButtonWrapper,
    ButtonText
} from "./followsModal.styles";

export default function FollowsModal({ messageTitle, value, onClose, closeModal }) {
      
  return (
        <ModalOverlay onClick={onClose}>
        <ModalContent>
            <TopContainer>
                <ModalTitle>{`${messageTitle} (${value})`}</ModalTitle>
                <CloseIconContainer onClick={() => closeModal()}>
                    <CloseIcon />       
                </CloseIconContainer>
            </TopContainer>
            <FollowsnWrapper>
                <InnerWrapper>
                    <LeftContainer>
                        <BackgroundImageWrapper />
                        <FollowsDetails>
                            <FullName>James Arthur</FullName>
                            <ArtustName>@JArthur</ArtustName>
                            <TagsContainer>
                                <TagItem>#Singer</TagItem>
                                <TagItem>#Songwriter</TagItem>
                                <TagItem>#Producer</TagItem>
                            </TagsContainer>
                        </FollowsDetails>
                    </LeftContainer>
                    <ButtonWrapper>
                        <ButtonText>FOLLOW</ButtonText>
                    </ButtonWrapper>
                </InnerWrapper>
            </FollowsnWrapper>

            <FollowsnWrapper>
                <InnerWrapper>
                    <LeftContainer>
                        <BackgroundImageWrapper />
                        <FollowsDetails>
                            <FullName>James Arthur</FullName>
                            <ArtustName>@JArthur</ArtustName>
                            <TagsContainer>
                                <TagItem>#Singer</TagItem>
                                <TagItem>#Songwriter</TagItem>
                                <TagItem>#Producer</TagItem>
                            </TagsContainer>
                        </FollowsDetails>
                    </LeftContainer>
                    <ButtonWrapper>
                        <ButtonText>FOLLOW</ButtonText>
                    </ButtonWrapper>
                </InnerWrapper>
            </FollowsnWrapper>

            <FollowsnWrapper>
                <InnerWrapper>
                    <LeftContainer>
                        <BackgroundImageWrapper />
                        <FollowsDetails>
                            <FullName>James Arthur</FullName>
                            <ArtustName>@JArthur</ArtustName>
                            <TagsContainer>
                                <TagItem>#Singer</TagItem>
                                <TagItem>#Songwriter</TagItem>
                                <TagItem>#Producer</TagItem>
                            </TagsContainer>
                        </FollowsDetails>
                    </LeftContainer>
                    <ButtonWrapper>
                        <ButtonText>FOLLOW</ButtonText>
                    </ButtonWrapper>
                </InnerWrapper>
            </FollowsnWrapper>

            <FollowsnWrapper>
                <InnerWrapper>
                    <LeftContainer>
                        <BackgroundImageWrapper />
                        <FollowsDetails>
                            <FullName>James Arthur</FullName>
                            <ArtustName>@JArthur</ArtustName>
                            <TagsContainer>
                                <TagItem>#Singer</TagItem>
                                <TagItem>#Songwriter</TagItem>
                                <TagItem>#Producer</TagItem>
                            </TagsContainer>
                        </FollowsDetails>
                    </LeftContainer>
                    <ButtonWrapper>
                        <ButtonText whitebg whitecolor btnborder>FOLLOWING</ButtonText>
                    </ButtonWrapper>
                </InnerWrapper>
            </FollowsnWrapper>

            <FollowsnWrapper>
                <InnerWrapper>
                    <LeftContainer>
                        <BackgroundImageWrapper />
                        <FollowsDetails>
                            <FullName>James Arthur</FullName>
                            <ArtustName>@JArthur</ArtustName>
                            <TagsContainer>
                                <TagItem>#Singer</TagItem>
                                <TagItem>#Songwriter</TagItem>
                                <TagItem>#Producer</TagItem>
                            </TagsContainer>
                        </FollowsDetails>
                    </LeftContainer>
                    <ButtonWrapper>
                        <ButtonText whitebg whitecolor btnborder>FOLLOWING</ButtonText>
                    </ButtonWrapper>
                </InnerWrapper>
            </FollowsnWrapper>
        </ModalContent>
    </ModalOverlay>
  )
}
