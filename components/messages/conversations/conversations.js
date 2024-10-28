
import React, { useState, useEffect } from "react";

import {
    PictureContainer,
    DisplayPicture,
} from "../messages.styles";

import {
    MessageDataBlock,
    ActiveDot,
    MessageData,
    LastMessage,
    IconBlock,
    TypeIcon,
    IconDescription,
    TypingMessage,
    NameBlock,
    Name,
    DateBlock,
    Unread,
} from "./conversations.styles";

import {
    formatTime,
    formatLastMessageTime
} from "@/utils/timeUtils"
import { convertToPlainText } from "@/utils/String";

export default function ConversationBlock({ $isSelected, displayPicture, messages, name, typing, active, id, handleClick, unreadMessages, timestamp }) {
    const LastMessageObject = messages && messages.length > 0 ? messages[messages.length - 1] : null;
    const LastMessageContent = messages && messages.length > 0 ? LastMessageObject.content : 'You started a chat'; // for new chats default is used
    const LastMessageType = messages && messages.length > 0 ? LastMessageObject.type : 'Text'; // for new chats text is used
    const LastMessageLength = messages && messages.length > 0 && LastMessageType === 'Voice' ? LastMessageObject.length : null;

    const [LastMessageTime, setTime] = useState('')

    useEffect(() => {
        const updateLastMessageTime = () => {
            if (messages.length > 0) {
                const LastMessageObject = messages && messages.length > 0 ? messages[messages.length - 1] : null;
                const LastMessageDateTime = new Date(LastMessageObject.timestamp)
                setTime(formatLastMessageTime(LastMessageDateTime))
            }
            else {
                // for new chats
                const newChatTime = new Date(timestamp)
                setTime(formatLastMessageTime(newChatTime))
            }
        }

        updateLastMessageTime();

        const intervalId = setInterval(updateLastMessageTime, 1000);

        return () => clearInterval(intervalId);
    }, [messages, name])

    const VoiceMessageLength = formatTime(LastMessageLength)

    return (
        <MessageDataBlock $isSelected={$isSelected} onClick={() => handleClick(id)}>
            <PictureContainer>
                <DisplayPicture src={displayPicture} name={name} />
                {
                    active && <ActiveDot />
                }
            </PictureContainer>
            <MessageData>
                <NameBlock>
                    <Name>{name}</Name>
                    <DateBlock>{LastMessageTime}</DateBlock>
                </NameBlock>
                {
                    typing &&
                    <TypingMessage>{`${name} is typing...`}</TypingMessage>
                }
                {
                    (!typing) &&
                    (
                        LastMessageType === 'Text' ?
                            <LastMessage>{convertToPlainText(LastMessageContent)}</LastMessage>
                            :
                            LastMessageType === 'Voice' ?
                                <IconBlock>
                                    <TypeIcon type={LastMessageType} />
                                    <IconDescription>{VoiceMessageLength}</IconDescription>
                                </IconBlock>
                                :
                                <IconBlock>
                                    <TypeIcon type={LastMessageType} />
                                    <IconDescription>{LastMessageType}</IconDescription>
                                </IconBlock>
                    )
                }
            </MessageData>
            {
                unreadMessages > 0 &&
                <Unread>{unreadMessages}</Unread>
            }
        </MessageDataBlock >
    )
}