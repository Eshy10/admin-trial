import React, { useState, useEffect } from "react";
import ConversationBlock from "./conversations/conversations";
import HeaderBlock from "./header/header"
import ChatWindow from "./chatWindow/chatWindow";
import NoMessages from "./noMessages/noMessages";
import {
    DashboardWrapper,
    LeftBar,
    MessageIcon,
    PencilLogo,
    MessagesBar,
    RightBar,
    TopBar,
    BackButton,
    NoChatNotification
} from "./messages.styles";

import SearchComponent from "@/components/search/search";
import ChatEditor from "./chatEditor/chatEditor";
import AddChat from "./modal/addChatModal";
import { validMessage } from "@/utils/String";

const chatData = [
    [
        {
            from: true,
            type: 'Text',
            content: 'Hi there!',
            timestamp: '2023-12-13T09:30:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'Hello! How are you?',
            timestamp: '2023-12-14T09:31:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'I agree, let\'s move forward with the plan.',
            timestamp: '2023-12-14T08:30:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Not bad. Have you heard about the upcoming event?',
            timestamp: '2023-12-14T10:15:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'Yes, I did. Exciting stuff!',
            timestamp: '2023-12-14T10:20:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'Absolutely! Looking forward to it.',
            timestamp: '2023-12-14T10:25:00Z',
        },
    ],
    [
        {
            from: true,
            type: 'Text',
            content: 'Sure, I will take a look at it. Thanks!',
            timestamp: '2023-12-06T09:20:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'No problem! Let me know if you have any questions.',
            timestamp: '2023-12-06T09:22:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Have you seen the latest updates? They look promising!',
            timestamp: '2023-12-13T11:20:00Z',
        },
        {
            from: false,
            type: 'Photo',
            content: '/static/photo.jpeg',
            timestamp: '2023-12-13T21:15:00Z',
        },
    ],
    [
        {
            from: true,
            type: 'Text',
            content: 'Sure, I will take a look at it. Thanks!',
            timestamp: '2023-12-06T09:20:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'No problem! Let me know if you have any questions.',
            timestamp: '2023-12-06T09:22:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Have you seen the latest updates? They look promising!',
            timestamp: '2023-12-13T11:20:00Z',
        },
        {
            from: false,
            type: 'Audio',
            fileName: 'The girl is mine and she left',
            subText: 'Singles',
            content: '/#',
            length: 22, // in seconds
            timestamp: '2023-12-13T21:15:00Z',
        },
        {
            from: true,
            type: 'Audio',
            fileName: 'The girl is mine and she left',
            subText: 'Singles',
            content: '/#',
            length: 22, // in seconds
            timestamp: '2023-12-13T21:15:00Z',
        },
    ],
    [
        {
            from: true,
            type: 'Text',
            content: 'Hi there!',
            timestamp: '2023-12-06T09:20:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'No problem! Let me know if you have any questions.',
            timestamp: '2023-12-06T09:22:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'I agree, let\'s move forward with the plan.',
            timestamp: '2023-12-13T08:30:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'Hello! How are you?',
            timestamp: '2023-12-14T09:31:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Not bad. Have you heard about the upcoming event?',
            timestamp: '2023-12-14T10:15:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'Yes, I did. Exciting stuff!',
            timestamp: '2023-12-14T10:20:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Absolutely! Looking forward to it.',
            timestamp: '2023-12-14T10:25:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Have you seen the latest updates? They look promising!',
            timestamp: '2023-12-14T11:20:00Z',
        },
        {
            from: false,
            type: 'Video',
            content: '/static/video.jpeg',
            length: 92, // in seconds
            timestamp: '2023-12-14T21:15:00Z',
        },
    ],
    [
        {
            from: true,
            type: 'Text',
            content: 'Hi there!',
            timestamp: '2023-12-06T09:20:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'No problem! Let me know if you have any questions.',
            timestamp: '2023-12-06T09:22:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'I agree, let\'s move forward with the plan.',
            timestamp: '2023-12-13T08:30:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'Hello! How are you?',
            timestamp: '2023-12-14T09:31:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Not bad. Have you heard about the upcoming event?',
            timestamp: '2023-12-14T10:15:00Z',
        },
        {
            from: false,
            type: 'Text',
            content: 'Yes, I did. Exciting stuff!',
            timestamp: '2023-12-14T10:20:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Absolutely! Looking forward to it.',
            timestamp: '2023-12-14T10:25:00Z',
        },
        {
            from: true,
            type: 'Text',
            content: 'Have you seen the latest updates? They look promising!',
            timestamp: '2023-12-14T11:20:00Z',
        },
        {
            from: false,
            type: 'Voice',
            fileName: 'The girl is mine and she left',
            subText: 'Singles',
            content: '/#',
            length: 92, // in seconds
            timestamp: '2023-12-14T21:15:00Z',
        },
        {
            from: true,
            type: 'Voice',
            fileName: 'The girl is mine and she left',
            subText: 'Singles',
            content: '/#',
            length: 22, // in seconds
            timestamp: '2023-12-16T21:15:00Z',
        },
    ]
];


const data = [
    {
        name: 'John Doe',
        email: 'John@gmail.com',
        displayPicture: '/static/img1.jpeg',
        messages: chatData[1],
        typing: false,
        active: false,
        unreadMessages: 0,
    },
    {
        name: 'Alice Johnson',
        email: 'Alice@gmail.com',
        displayPicture: '/static/img2.jpeg',
        messages: chatData[0],
        typing: false,
        active: false,
        unreadMessages: 2,
    },
    {
        name: 'Bob Smith',
        email: 'Bob@gmail.com',
        displayPicture: '/static/img3.jpeg',
        messages: chatData[2],
        typing: true,
        active: true,
        unreadMessages: 1,
    },
    {
        name: 'Eva Davis',
        email: 'Eva@gmail.com',
        displayPicture: '/static/img4.jpeg',
        messages: chatData[4],
        typing: false,
        active: true,
        unreadMessages: 5,
    },
    {
        name: 'Michael Clark',
        email: 'Michael@gmail.com',
        displayPicture: '/static/img5.jpeg',
        messages: chatData[3],
        typing: false,
        active: true,
        unreadMessages: 3,
    },
    {
        name: 'Sophie Turner',
        email: 'Sophie@gmail.com',
        displayPicture: '/static/img6.jpeg',
        messages: chatData[1],
        typing: false,
        active: true,
        unreadMessages: 1,
    },
    {
        name: 'John Doe',
        email: 'John@gmail.com',
        displayPicture: '/static/img1.jpeg',
        messages: chatData[2],
        typing: false,
        active: false,
        unreadMessages: 0,
    },
    {
        name: 'Alice Johnson',
        email: 'Alice@gmail.com',
        displayPicture: '/static/img2.jpeg',
        messages: chatData[0],
        typing: true,
        active: true,
        unreadMessages: 1,
    },
    {
        name: 'Bob Smith',
        email: 'Bob@gmail.com',
        displayPicture: '/static/img3.jpeg',
        messages: chatData[4],
        typing: false,
        active: true,
        unreadMessages: 2,
    },
    {
        name: 'Eva Davis',
        email: 'Eva@gmail.com',
        displayPicture: '/static/img4.jpeg',
        messages: chatData[3],
        typing: false,
        active: true,
        unreadMessages: 3,
    },
    {
        name: 'Michael Clark',
        email: 'Michael@gmail.com',
        displayPicture: '/static/img5.jpeg',
        messages: chatData[2],
        typing: true,
        active: true,
        unreadMessages: 4,
    },
];

// const data = []

const user = {
    'imgURL': "/assets/man.png"
}

export default function MessagesComponent() {
    const [filter, setFilter] = useState('')

    const [messageData, setData] = useState(data)
    const [chatMessage, setMessage] = useState('')
    const [chatFiles, setFiles] = useState([])

    const [focus, setFocus] = useState({})

    const [showChat, setShowChat] = useState(false)
    const [selected, setSelected] = useState(null)
    const handleSelect = (index) => {
        setSelected(index)
        messageData[index].unreadMessages = 0
        setFocus(messageData[index])
        setFiles([])
        setShowChat('Right')
    }

    const handleSendMessage = () => {
        // for files
        chatFiles?.map((chatFile) => {
            const [type, info, file] = chatFile
            const newMessage = {
                from: false,
                type: type,
                content: file,
                timestamp: new Date().toISOString()
            }
            switch (type) {
                case 'Audio':
                    newMessage["fileName"] = info
                    newMessage["subText"] = 'Singles'
                    newMessage["length"] = 22 // in seconds // change in backend or with more info
                    break
                case 'Photo':
                    newMessage["content"] = info
                    break
                case 'PDF':
                    newMessage["fileName"] = info
                    break
            }
            focus.messages.push(newMessage)
        })
        setFiles([])

        // for messages
        if (validMessage(chatMessage)) {
            focus.messages.push({
                from: false,
                type: 'Text',
                content: chatMessage,
                timestamp: new Date().toISOString()
            })
        }
        setMessage('')

        //
        setFocus((focus) => ({ ...focus }))
    }

    useEffect(() => {
        if (filter.length === 0) {
            setData(data)
        }
        else {
            setData(data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())))
        }
    }, [filter])

    const [showModal, setShowModal] = useState(false)

    const handleNewChat = (contact) => {
        const newChatTime = new Date();
        const newChat = {
            ...contact,
            messages: [],
            typing: false,
            active: false,
            unreadMessages: 0,
            timestamp: newChatTime.toISOString(),
        };

        const newData = [newChat, ...messageData];
        setData(newData);
        setShowModal(false);
        setSelected(0)
        setFocus(newChat)
        setFiles([])
        setShowChat('Right')
    };


    return (
        <>
            {
                (messageData.length === 0 && filter.length === 0) ?
                    <NoMessages setShowModal={setShowModal} />
                    :
                    <DashboardWrapper>
                        <LeftBar $show={showChat}>
                            <MessageIcon onClick={() => setShowModal(true)}>
                                <PencilLogo />
                            </MessageIcon>
                            <SearchComponent width='100%' setField={setFilter} searchField={filter} />
                            <MessagesBar>
                                {
                                    messageData.length > 0 ?
                                        messageData.map((block, index) =>
                                            <ConversationBlock key={index} $isSelected={(selected >= 0 && selected === index)} {...block} id={index} handleClick={handleSelect} />
                                        )
                                        :
                                        <NoChatNotification>No Chats Found!</NoChatNotification>
                                }
                            </MessagesBar>
                        </LeftBar>
                        <RightBar $show={showChat}>
                            {
                                selected === null ?
                                    <NoMessages chatVersion={true} />
                                    :
                                    <>
                                        <TopBar>
                                            <BackButton onClick={() => setShowChat('Left')} />
                                            <HeaderBlock {...focus} />
                                        </TopBar>
                                        <ChatWindow {...focus} userImage={user.imgURL} />
                                        <ChatEditor value={chatMessage} files={chatFiles} handleFileChange={setFiles} handleChange={setMessage} handleSendMessage={handleSendMessage} />
                                    </>
                            }
                        </RightBar>
                    </DashboardWrapper>
            }
            {
                showModal &&
                <AddChat showModal={showModal} closeModal={() => setShowModal(false)} addNewChat={handleNewChat} />
            }
        </>
    )
}
