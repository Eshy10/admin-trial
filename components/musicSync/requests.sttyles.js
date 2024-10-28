import styled from 'styled-components';

const Container = styled.div`
    margin-top: 5rem;
     @media screen and (max-width: 48em){
         margin-left: -2rem;
     }
    @media screen and (max-width: 26.5625em){
         margin-top: 1.5rem;
         margin-left: -1.3rem;
    }
`;

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
width: 100%;

@media screen and (min-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
}
@media screen and (max-width: 768px) {
    width: 98.8vw;
}
`;

const CardBoxes = styled.div`
padding: 0.9rem;
border-radius: 20px;
border: 1px solid #E2E3DD;
margin: 0.5rem;
background-color: #FFF;
flex: 1;

@media screen and (min-width: 768px) {
  margin: 0.5rem;
  flex-basis: calc(50% - 1rem); 
}

@media screen and (max-width: 768px) {
  flex-basis: calc(100% - 1rem); 
}
`;

const CardTitle = styled.p`
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #012;
`;
const LongTextContainer = styled.div``;

const LongText = styled.p`
    font-family: Poppins;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #767873;
    padding-top: 0.8rem;
`;

const CardTextSpan = styled.span`
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #012;
`;

const CardDetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -1.3rem;
`;

const TextWrapper = styled.span`
    display: flex;
    align-items: center;
    padding: 1px 15px;
    border-radius: 10000px;
    background-color: #F2F2F2;
    width: 35%;
    height: 2rem;
    @media screen and (max-width: 64em) {
       width: 63%;
    }
    @media screen and (max-width: 48em) {
        width: 44%;
    }
     @media screen and (max-width: 26.5625em){
        width: 47%;
     }
     @media screen and (max-width: 23.4375em){
         width: 54%;
      }
     @media screen and (max-width: 20em){
        width: 64%;
     }
`;

const NotificationText = styled.p`
    margin-right: 0.6rem;
    font-family: Poppins;
    font-size: 0.688rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #454843;
    white-space: nowrap;
`;

const NotificationIcon = styled.img.attrs({
    src: "/assets/notification-2-fill.png",
    alt: "Notification icon",
    })`
    height: 1rem;
    `;
const MusicTagsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const MusicTags = styled.span`
    margin-right: 0.8rem;
    padding: 5px 10px;
    border-radius: 10000px;
    background-color: #DADDFB;
    color: #3E46B6;
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;


const CollaborationInfo = styled.p`
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #454843;
`;

const RedText = styled.p`
    font-family: Poppins;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #DE786D;
    padding-top: 0.3rem;
`;

const TextSpan = styled.span`
    font-family: Poppins;
   font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #DE786D;
`;

const Posttext = styled.span`
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #454843;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
    text-align: center;
    width: 100%;
     @media screen and (max-width: 48em) {
       display: block;
       justify-content: flex-start;
    }
`;

const RequestButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    padding: 1rem; 0.9rem;
    border-radius: 100px;
    border: ${(props) => (props.$requestborder ? "1px solid #3E46B6" : "none")};
    background-color:  ${(props) => (props.$requestbutton ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    text-align: center;

    @media screen and (max-width: 64em) {
       width: 100%;
    }
      @media screen and (max-width: 48em) {
       display: block;
       justify-content: flex-start;
       width: ${(props) => (props.$editwidth ? "36%" : "40%")};
       height: 3rem;
       margin-bottom: 1rem;
       padding: 0.1rem;
    }
     @media screen and (max-width: 26.5625em){
         width: ${(props) => (props.$editwidth ? "33%" : "47%")};
    }
    @media screen and (max-width: 23.4375em){
        width: ${(props) => (props.$editwidth ? "35%" : "57%;")};
    }
    @media screen and (max-width: 20em){
        width: ${(props) => (props.$editwidth ? "40%" : "61%")};

    }
`;

const RequestButton = styled.p`
    font-family: Poppins;
     font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px;
    letter-spacing: 0.7px;
    color:  ${(props) => (props.$requestcolor ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    white-space: nowrap;
     @media screen and (max-width: 64em) {
      font-size: 10px;
    }
    @media screen and (max-width: 48em) {
      font-size: 12px;
    }
`;

export {
    Container,
    CardWrapper,
    CardBoxes,
    CardTitle,
    CardDetailContainer,
    TextWrapper,
    NotificationText,
    NotificationIcon,
    CollaborationInfo,
    RedText,
    TextSpan,
    LongTextContainer,
    LongText,
    CardTextSpan,
    MusicTagsContainer,
    MusicTags,
    Posttext,
    ButtonsWrapper,
    RequestButtonContainer,
    RequestButton,
}