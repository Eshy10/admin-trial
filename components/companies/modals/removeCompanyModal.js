import React from "react";
import {
    CloseButton,
    Wrapper,
    MainBody,
    Heading,
    Description,
    ButtonContainer,
    Button
} from "../../modals/modals.styles";
import { Icon } from "../companies.styles";

const RemoveCompanyModal = ({closeModal, name, id}) => {
    return (
        <Wrapper onClick={closeModal}>
            <MainBody onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal} />
                <Icon $hw="50px" src="/assets/close-circle-line.svg" alt="Warning Icon" />
                <Heading>Are You Sure?</Heading>
                <Description>{"Do you really want to remove this company? This action cannot be undone and this company won't have access to Razu."}</Description>
                <ButtonContainer>
                    <Button type='Secondary' onClick={closeModal}>CLOSE</Button>
                    <Button onClick={() => {}}>CANCEL SUBSCRIPTION</Button>
                </ButtonContainer>
            </MainBody>
        </Wrapper>
    )
}

export default RemoveCompanyModal;