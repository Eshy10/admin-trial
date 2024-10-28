import styled from 'styled-components';
import { display, space, width } from "styled-system";

const FocusBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const Indicator = styled.span`
    color:  ${(props) => (props.$isActive === 'True' ? '#2AA836' : '#AAACA6')};
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.652px; 
    letter-spacing: 0.28px;
`

const FocusName = styled.span`
    color: var(--Neutral5, #012);
    /* Headline 4 */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px; /* 161.8% */
    letter-spacing: 0.4px;
`

const TypingMessage = styled.span`
    color: #2AA836;
    width: 190px;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.652px;
    letter-spacing: 0.28px;
`

export {
    TypingMessage,
    FocusBlock,
    Indicator,
    FocusName,
}