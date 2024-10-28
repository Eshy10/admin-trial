import React from "react";
import MusicPlayer from "../musicPlayer/musicPlayer";

import {
    ChatDate,
    ContentContainer,
    DateBlock,
    MessageBlock,
    Name,
    ContentBlock,
    MultimediaBlock,
    Photo,
    PhotoIcon,
    VideoInfo,
    VideoIcon,
    VideoLength,
    DocumentBlock
} from
    "./chatWindow.styles";

import {
    DisplayPicture,
    PictureContainer,
} from "../messages.styles"

import { formatTime } from "@/utils/timeUtils"

const ChatMessage = ({ displayPicture, messageTime, name, displayDate, messageDate, content, fileName, subText, type, length, enlargeMedia }) => {
    return (
        <>
            <MessageBlock name={name}>
                <PictureContainer>
                    <DisplayPicture src={displayPicture} name={name} />
                </PictureContainer>
                <ContentContainer name={name}>
                    <div style={{ display: 'flex', 'alignItems': 'center', gap: '20px' }}>
                        <Name>{name}</Name>
                        <DateBlock>{messageTime}</DateBlock>
                    </div>
                    {
                        type === 'Text' ?
                            <ContentBlock name={name} dangerouslySetInnerHTML={{ __html: content }} />
                            :
                            type === 'Audio' || type === 'Voice' ?
                                <MusicPlayer
                                    name={name}
                                    type={type}
                                    fileName={fileName}
                                    subText={subText}
                                    length={length}
                                />
                                :
                                type === 'Photo' ?
                                    <MultimediaBlock onClick={() => enlargeMedia(type, content, name, messageDate, messageTime, length)}>
                                        <Photo src={content} />
                                        <PhotoIcon />
                                    </MultimediaBlock>
                                    :
                                    type === 'Video' ?
                                        <MultimediaBlock onClick={() => enlargeMedia(type, content, name, messageDate, messageTime, length)}>
                                            <Photo src={content} />
                                            <VideoInfo>
                                                <VideoIcon />
                                                <VideoLength>{formatTime(length)}</VideoLength>
                                            </VideoInfo>
                                        </MultimediaBlock>
                                        :
                                        <DocumentBlock name={name} fileName={fileName} />
                    }
                </ContentContainer>
            </MessageBlock >
            {
                displayDate && <ChatDate>{messageDate}</ChatDate>
            }
        </>
    )
}

export default ChatMessage;