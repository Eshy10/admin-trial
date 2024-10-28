import styled from 'styled-components';
import { display } from "styled-system";

const MetricsBoxContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
width: 91.8%;
margin-top: 1.25rem;

@media screen and (min-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
}
@media screen and (max-width: 768px) {
    width: 98.8vw;
}
`;

const MetricsBox = styled.div`
padding: 0.9rem;
border-radius: 20px;
border: 1px solid #E2E3DD;
margin: 0.5rem;
background-color: #FFF;
flex: 1;

@media screen and (min-width: 768px) {
  margin: 0.5rem;
  flex-basis: calc(33.33% - 1rem); 
}

@media screen and (max-width: 768px) {
  flex-basis: calc(100% - 1rem); 
}
`;

const MetricsItems = styled.div`
  border-bottom:  ${(props) => (props.$borderborrom ? "1px solid #E8E8E8" : "")};
`;

const TopText = styled.p`
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.28px;
    color: #012;
`;

const BottomText = styled.p`
    font-family: Poppins;
    font-size:  ${(props) => (props.$newsize ? "1rem" : "1.125rem")};
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.6px;
    margin-top: -0.3rem;
    margin-bottom: ${(props) => (props.$bottompad ? "0.5rem" : "")};
`;

const SmallText = styled.p`
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px; 
    letter-spacing: 0.24px;
    color: #767873;
`;

export {
    MetricsBoxContainer,
    MetricsBox,
    MetricsItems,
    TopText,
    BottomText,
    SmallText,
}