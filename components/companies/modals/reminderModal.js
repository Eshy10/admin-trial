import React from "react";
import {
    Wrapper,
    MainBody,
    Heading2,
    Description,
    ButtonContainer,
    Button
} from "../../modals/modals.styles";
import { Icon } from "../companies.styles";

const ReminderModal = ({ closeModal, name, id }) => {
    return (
        <Wrapper onClick={closeModal}>
            <MainBody onClick={(e) => e.stopPropagation()}>
                <Icon $hw="50px" src="/assets/information-line.svg" alt="Warning Icon" />
                <Heading2>Send Reminder for Contract Renewal</Heading2>
                <Description>You are about to send a friendly reminder to <strong>{name}</strong> regarding their upcoming contract renewal. Their current contract is set to end soon.</Description>
                <ButtonContainer>
                    <Button type='Secondary' onClick={closeModal}>CANCEL</Button>
                    <Button type='Primary' onClick={() => { }}>CANCEL SUBSCRIPTION</Button>
                </ButtonContainer>
            </MainBody>
        </Wrapper>
    )
}

export default ReminderModal;