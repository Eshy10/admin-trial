import styled from 'styled-components';
import { display, space, width } from "styled-system";
import { Button } from "../messages.styles";

const Wrapper = styled.main`
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    padding: 30px;
    overflow: hidden;
    z-index: 1000;
    display:flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 600px) {
        padding: 20px 10px;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DateBlock = styled.span`
    color: var(--Neutral5, #012);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
`

const CloseButton = styled.img.attrs(() => ({
    src: '/assets/close-fill.svg',
    alt: 'return'
}))`
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const MediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LowerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const DownloadButton = styled(Button)`
    width: fit-content;
`

const EnlargedPhoto = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Photo'
}))`
    max-height: calc(100vh - 200px);
    max-width: 100%;
`;

export {
    Wrapper,
    Header,
    DateBlock,
    CloseButton,
    MediaContainer,
    LowerContainer,
    DownloadButton,
    EnlargedPhoto,
}