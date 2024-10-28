import styled from 'styled-components';
import { display, space, width } from "styled-system";

const DashboardWrapper = styled.main`
width: 100%;
height: 100%;
padding: 20px 30px 0px 20px;
display: flex;
gap: 20px;

@media (max-height: 600px) {
    height: 650px;
`;

const LeftBar = styled.div`
display: flex;
flex-direction: column; 
gap: 20px;
width: 330px;
padding: 15px;
border-radius: 20px 20px 0px 0px;
border: 1px solid var(--Neutral1, #E2E3DD);

@media (max-width: 990px) {
    display: ${(props) => props.$show === 'Left' ? 'flex' : 'none'};
    width: 100%;
}
`;

const MessageIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
flex-shrink: 0;
background-color: #3E46B6;
border-radius: 50px;
cursor: pointer;
`;

const PencilLogo = styled.img.attrs({
    src: "/assets/pencil-line.svg",
    alt: "New Message icon",
})`
      height: 20px;
    `;

const MessagesBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin; /* Firefox */
    -webkit-scrollbar-width: thin; /* Webkit-based browsers */
    scrollbar-color: transparent transparent; /* Firefox */
    -webkit-scrollbar-color: transparent transparent; /* Webkit-based browsers */

    /* For Webkit-based browsers */
    &::-webkit-scrollbar {
    width: 6px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: transparent;
    }
    height: 100%;
    padding-top: 20px;
`

const PictureContainer = styled.div`
    position: relative;
`

const DisplayPicture = styled.img.attrs(({ src, name }) => ({
    src: src,
    alt: `${name}'s Image`
}))`
    float: left;
    width:  50px;
    border-radius: 50px;
    height: 50px;
    object-fit: cover;

    @media (max-width: 600px) {
        width: 40px;
        height: 40px;
    }
`;

const RightBar = styled.div`
    display:flex;
    flex-direction: column;
    flex: 1;
    border-radius: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--Neutral1, #E2E3DD);

    @media (max-width: 990px) {
        display: ${(props) => props.$show === 'Right' ? 'flex' : 'none'};
    }
`;

const TopBar = styled.div`
    display: flex;
    height: 96px;
    gap: 10px;
    align-items: center;
    border-bottom: solid 1px #E2E3DD;
    padding: 23px 20px;

    @media (max-width: 600px) {
        height: 78px;
        gap: 15px;
    }
`

const BackButton = styled.img.attrs(() => ({
    src: '/assets/arrow-left-black.svg',
    alt: `Back Icon`
}))`
    width:  25px;
    height: 25px;
    display: none;

    @media (max-width: 990px) {
        display: block;
    }
    `;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px 30px;
    border-radius: 100px;

    background: ${props => props.type === 'Primary' ? 'var(--Primary5, #3E46B6)' : props.type === 'Secondary' ? 'var(--Neutral-Variant1, #FFF)' : 'var(--Primary1, #DADDFB)'};
    border: ${props => props.type === 'Primary' ? 'none' : props.type === 'Secondary' ? '1px solid var(--Neutral2, #AAACA6)' : 'none'};
    color: ${props => props.type === 'Primary' ? 'var(--Neutral-Variant1, #FFF)' : props.type === 'Secondary' ? 'var(--Neutral2, #AAACA6)' : 'var(--Neutral-Variant1, #FFF)'};
    
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
    width: 100%;
    cursor: ${props => props.type === 'Disabled' ? '' : 'pointer'};
`

const NoChatNotification = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text: center;
    height: 100%;
`

export {
    DashboardWrapper,
    LeftBar,
    MessageIcon,
    PencilLogo,
    MessagesBar,
    PictureContainer,
    DisplayPicture,
    RightBar,
    TopBar,
    BackButton,
    Button,
    NoChatNotification
}