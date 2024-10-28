import React, { useState, useEffect, useRef } from "react";
import {
    Wrapper,
    Header,
    DateBlock,
    CloseButton,
    MediaContainer,
    LowerContainer,
    DownloadButton,
    EnlargedPhoto,

} from './multimediaModal.styles'
import VideoPlayer from "../videoPlayer/videoPlayer";


const MediaModal = ({ type, name, content, messageDate, messageTime, length, closeModal }) => {
    const [playing, setPlaying] = useState(false)
    const [mute, setMute] = useState(false)
    const [sliderTime, setSliderTime] = useState(30)

    return (
        <Wrapper>
            <Header>
                <DateBlock>{name}, {messageDate} {messageTime}</DateBlock>
                <CloseButton onClick={closeModal} />
            </Header>
            <MediaContainer>
                <EnlargedPhoto src={content} />
            </MediaContainer>
            <LowerContainer>
                {
                    type === 'Photo' ?
                        <DownloadButton type="Primary">Download</DownloadButton>
                        :
                        type === 'Video' ?
                            <VideoPlayer
                                length={length}
                                playing={playing}
                                setPlaying={setPlaying}
                                sliderTime={sliderTime}
                                setSliderTime={setSliderTime}
                                mute={mute}
                                setMute={setMute}
                            />
                            :
                            null
                }
            </LowerContainer>
        </Wrapper >
    )
}

export default MediaModal;