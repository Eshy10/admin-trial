import React, { useState, useEffect, useRef} from "react";
import MediaModal from "../modal/multimedialModal";
import {
    Chat,
    ChatDate,
} from
    "./chatWindow.styles";
import { getTime, formatChatDate } from "@/utils/timeUtils"
import ChatMessage from "./chatMessage";


export default function ChatWindow({ displayPicture, messages, name, userImage, timestamp }) {
    const chatRef = useRef(null);

    useEffect(() => {
      // Scroll to the bottom of the chat
      if (chatRef.current) {
        chatRef.current.scrollTop = 0;
      }
    }, [messages.length]);
    

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date();
            if (newDate.getDate() !== currentDate.getDate()) {
                setCurrentDate(newDate); // Date has changed, trigger a re-render
            }
        }, 1000); // Check every second

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [currentDate]);

    const [showModal, setShow] = useState(false)
    const [mediaProps, setProps] = useState(null)

    const handleMediaClick = (type, content, name, messageDate, messageTime, length) => {
        const props = {
            type, content, name, messageDate, messageTime, length
        }
        setProps(props)
        setShow(true)
    }

    return (
        <Chat ref={chatRef}>
            {
                messages.slice().reverse()?.map((m, index) => {
                    const messageDateTime = new Date(m.timestamp)
                    const messageTime = getTime(messageDateTime)
                    const messageDate = formatChatDate(messageDateTime)

                    // creates next message datetime from inverted messages component.  
                    // original index,  i       =>      l(messages) - i - 1 on inversion
                    // so               i + 1   =>      l(messages) - i - 2 on inverstion
                    const nextMessageDateTime = new Date(messages.length === index + 1 ? 0 : messages[messages.length - index - 2].timestamp)
                    const nextMessageDate = formatChatDate(nextMessageDateTime)

                    // Check if the current message is the first message or has a date different from the previous date
                    const displayDate = messageDate !== nextMessageDate

                    return (
                        <ChatMessage
                            key={index}
                            displayDate={displayDate}
                            messageDate={messageDate}
                            messageTime={messageTime}
                            displayPicture={m.from ? displayPicture : userImage}
                            name={m.from ? name : 'You'}
                            content={m.content}
                            fileName={m.fileName}
                            subText={m.subText}
                            type={m.type}
                            length={m.length}
                            enlargeMedia={handleMediaClick}
                        />
                    );
                })
            }
            {
                messages?.length === 0 &&
                <ChatDate>{formatChatDate(new Date(timestamp))}</ChatDate>
            }
            {
                showModal &&
                <MediaModal {...mediaProps} closeModal={() => { setShow(false) }} />
            }
        </Chat>
    )
}
