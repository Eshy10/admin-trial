import React from "react";
import { useRouter } from 'next/router';
import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    CloseIcon,
    TopContainer,
    CloseIconContainer,
    MusicFilesnWrapper
} from "./profileReusableModal.styles";
import MusicPlayer from "../musicPlayer";
import MusicPlayerEmpty from "../musicPlayer/empty";

export default function ProfileReusableModal({ messageTitle, onClose, closeModal }) {
      
  return (
        <ModalOverlay onClick={onClose}>
        <ModalContent>
            <TopContainer>
                <ModalTitle>{messageTitle}</ModalTitle>
                <CloseIconContainer onClick={() => closeModal()}>
                    <CloseIcon />       
                </CloseIconContainer>
            </TopContainer>
            <MusicFilesnWrapper>
                <MusicPlayer
                    filename="The girl is mine and she left"
                    newsearch
                    url=""
                    newdsn
                />
                {/* <MusicPlayerEmpty
                    url=""
                    filename="No Available music"
                    emptyMusic
                    newDsn
                /> */}

            </MusicFilesnWrapper>

            <MusicFilesnWrapper>
                <MusicPlayer
                    filename="The girl is mine and she left"
                    newsearch
                    url=""
                    newdsn
                />
                {/* <MusicPlayerEmpty
                    url=""
                    filename="No Available music"
                    emptyMusic
                    newDsn
                /> */}

            </MusicFilesnWrapper>

            <MusicFilesnWrapper>
                <MusicPlayer
                    filename="The girl is mine and she left"
                    newsearch
                    url=""
                    newdsn
                />
                {/* <MusicPlayerEmpty
                    url=""
                    filename="No Available music"
                    emptyMusic
                    newDsn
                /> */}

            </MusicFilesnWrapper>

            <MusicFilesnWrapper>
                <MusicPlayer
                    filename="The girl is mine and she left"
                    newsearch
                    url=""
                    newdsn
                />
                {/* <MusicPlayerEmpty
                    url=""
                    filename="No Available music"
                    emptyMusic
                    newDsn
                /> */}

            </MusicFilesnWrapper>
        </ModalContent>
    </ModalOverlay>
  )
}
