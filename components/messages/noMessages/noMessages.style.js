import styled from 'styled-components';
import { display, space, width } from "styled-system";

const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainBody = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

const MessageIcon = styled.img.attrs(() => ({
    src: '/assets/messageicon.jpg',
    alt: 'Chat Image'
}))`
    width: 180px;
    height: 191px;
`;

const Text = styled.span`
    color: var(--Neutral5, #012);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.36px; /* 161.8% */
    letter-spacing: 0.4px;
`

const SubText = styled.span`
    color: var(--Neutral3, #767873);
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;
`

export {
    Wrapper,
    MainBody,
    MessageIcon,
    Text,
    SubText
}