import React from "react";
import { useRouter } from 'next/router';
import {
    Wrapper,
    MainBody,
    CloseButton,
    Heading,
    Description,
    ButtonContainer,
    Button
} from "./modals.styles";

export default function LogoutModal({ closeModal }) {
    const router = useRouter();
    const handleRoute = async (href) => {
        await router.push(href);
    };
    return (
        <Wrapper onClick={closeModal}>
            <MainBody onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal} />
                <Heading>Want to Log Out?</Heading>
                <Description>You can always log back in at any time.</Description>
                <ButtonContainer>
                    <Button type='Secondary' onClick={closeModal}>CANCEL</Button>
                    <Button type='Primary' onClick={() => handleRoute("/")}>LOG OUT</Button>
                </ButtonContainer>
            </MainBody>
        </Wrapper>
    )
}
