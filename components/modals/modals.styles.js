import styled from 'styled-components';
import { display, space, width } from "styled-system";

const Wrapper = styled.main`
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 17, 34, 0.50);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Prevent scrolling */
    z-index: 1000;
`;

const MainBody = styled.div`
    width: 570px;
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-radius: 20px;
    background: var(--Neutral-Variant1, #FFF);

    @media (max-width: 600px) {
        width: 90%;
    }
`;

const CloseButton = styled.img.attrs(() => ({
    src: '/assets/close-icon.png',
    alt: 'Back Icon'
}))`
    width: 20px;
    height:20px;
    align-self: flex-end;
    margin-bottom: -20px;
    cursor: pointer;
`;

const Heading = styled.h1`
    margin: 0;
    color: var(--Neutral5, #012);
    text-align: center;

    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 40.45px; /* 161.8% */
    letter-spacing: 0.5px;
`

const Heading2 = styled.h1`
    margin: 0;
    color: var(--Neutral5, #012);
    text-align: center;

    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 40.45px; /* 161.8% */
    letter-spacing: 0.5px;
`

const Description = styled.p`
    margin: 0;
    color: var(--Neutral5, #012);
    text-align: center;

    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;

    strong {
        font-weight: 700;
    }
`

const ButtonContainer = styled.div`
    display: flex; 
    align-items: center; 
    gap: 20px;
    width: 100%;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const Button = styled.button`
    text-align: center;
    padding: 15px 30px;
    border-radius: 100px;

    background: ${props => props.type === 'Primary' ? 'var(--Primary5, #3E46B6)' : props.type === 'Secondary' ? 'var(--Neutral-Variant1, #FFF)' : 'var(--Primary1, #DE786D)'};
    border: ${props => props.type === 'Primary' ? 'none' : props.type === 'Secondary' ? '1px solid var(--Neutral2, #AAACA6)' : 'none'};
    color: ${props => props.type === 'Primary' ? 'var(--Neutral-Variant1, #FFF)' : props.type === 'Secondary' ? 'var(--Neutral2, #AAACA6)' : 'var(--Neutral-Variant1, #FFF)'};
    
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
    width: 100%;

    white-space: nowrap;
    cursor: ${props => props.type === 'Disabled' ? '' : 'pointer'};
    `

export {
    Wrapper,
    MainBody,
    CloseButton,
    Heading,
    Heading2,
    Description,
    ButtonContainer,
    Button
}