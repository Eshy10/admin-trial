import React, { useState, useEffect } from "react";
import { Wrapper, MainBody, MessageIcon, Text, SubText } from "./noMessages.style";
import { Button } from "../messages.styles";

export default function NoMessages({ setShowModal = () => { }, chatVersion = false }) {
    return (
        <Wrapper>
            <MainBody>
                <div style={{ display: 'flex', 'flexDirection': 'column', 'alignItems': 'center', gap: '10px' }}>
                    {
                        chatVersion ?
                            <Text>Select a Chat</Text>
                            :
                            <Text>No Messages Yet</Text>
                    }
                    {
                        !chatVersion &&
                        <SubText>There are no chats in your feed.</SubText>
                    }
                </div>
                <MessageIcon />
                {
                    !chatVersion &&
                    <Button type='Primary' onClick={() => setShowModal(true)}>
                        <span style={{ 'margin-right': '10px', 'fontSize': '20px' }}>+</span>
                        CREATE A NEW CHAT
                    </Button>
                }
            </MainBody>
        </Wrapper>
    )
}
