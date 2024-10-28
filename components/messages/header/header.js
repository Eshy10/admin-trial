import React from "react";

import {
    PictureContainer,
    DisplayPicture,
} from "../messages.styles";

import {
    Indicator,
    TypingMessage,
    FocusBlock,
    FocusName,
} from "./header.styles";

export default function HeaderBlock({ displayPicture, name, active, typing }) {
    return (
        <>
            <PictureContainer>
                <DisplayPicture src={displayPicture} name={name} />
            </PictureContainer>
            <FocusBlock>
                <FocusName>{name}</FocusName>
                {
                    active ?
                        typing ?
                            <TypingMessage>{`${name} is typing...`}</TypingMessage>
                            :
                            <Indicator $isActive={active ? 'True' : 'False'}>Online</Indicator>
                        :
                        <Indicator $isActive={active ? 'True' : 'False'}>Offline</Indicator>
                }
            </FocusBlock>
        </>
    )
}
