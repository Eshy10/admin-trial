import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 29px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  width: 50%;
  height: 76vh;
  overflow: auto;
  margin: 0 0 0 30rem;
  @media (max-width: 64em) {
    width: 64%;
    margin: 0 0 0 18rem;
}
@media (max-width: 48em) {
  padding-bottom: 55px;
  width: 74%;
  margin: 0 0 0 6rem;
}
@media screen and (max-width: 26.5625em){
  width: 92%;
  margin: 0 0 0 1rem;
}
@media screen and (max-width: 23.4375em){
  width: 93%;
  margin: 0 0 0 0.8rem
}
`;
const ModalTitleContainer = styled.div`
    text-align: center;
    border-bottom: 1px solid #D8D8D8;
`;

const ModalTitle = styled.p`
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; 
    letter-spacing: 0.5px;
    text-align: center;
    color: #012;
`;

const ModalDescription = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.27px;
  letter-spacing: 0.3px;
  color: 012;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  width: 100%;

  button {
    margin-left: 1.7rem;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    padding: 1rem;
     flex-flow: column-reverse;
    button {
      margin-left: 0rem;
    }
  }
`;

const CloseIconContainer = styled.div`
      text-align: right;
      cursor: pointer;
      margin-top: -0.6rem;
`;

const CheckMarkIconContainer = styled.div`
      text-align: center;
`;

const CloseIcon = styled.img.attrs({
    src: "/assets/close-icon.png",
    alt: "Close icon",
    })`
    height: 1.2rem;
    text-align: right;
    cursor: pointer;
    `;
const InfoIcon = styled.img.attrs({
    src: "/assets/information-line-blue.png",
    alt: "Info icon",
    })`
    height: 3rem;
    text-align: center;
    `;
const ModalButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width:  ${(props) => (props.cancelbutton ? "100px" : "150px")};
    height: 2.6rem;
    padding: 15px 19px;
    border-radius: 100px;
    border: ${(props) => (props.artistborder ? "1px solid #AAACA6" : "none")};
    background-color:  ${(props) => (props.artistbutton ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    text-align: center;
    @media (max-width: 48em) {
      width: 100%;
      margin-bottom: 1rem;
  }
`;

const ModalButton = styled.p`
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.652px;
  color:  ${(props) => (props.artistcolor ? "#AAACA6" : "#ffffff")};
  cursor: pointer;
  text-align: center;
  @media screen and (max-width: 23.4375em){
     font-size: 9px;
  }
`;

const RequestInfoContainer = styled.div`
  padding: 10px 30px;
  border-radius: 20px;
  border-radius: 20px 20px 0px 0px;
  background-color: #F2F2F2;
  margin-top: 1.5rem;
`;

const MusicDetailsWrapper = styled.div`
`;

const RecordTitle = styled.p`
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26.45px; 
    letter-spacing: 0.5px;
    color: #012;
`;

const DeadlineText = styled.p`
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.3px;
    color: #454843;
    margin-top: -0.5rem;;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InnerWrapper = styled.span`
    display: flex;
    align-items: center;
`;

const ProfilePicture = styled.div`
    background-image: url("/assets/musician.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 150px;
    background-color: #F9F9F9;
    margin-right: 0.8rem;
`;

const BigText = styled.p`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px; 
    letter-spacing: 0.4px;
    color: #454843;
`;

const SmallText = styled.p`
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
    color: #454843;
`;

const BottomContainer = styled.div`
    padding-left: 2rem;
`;

const RequestDetailsWrapper = styled.div``;

const MusicRefWrapper = styled.div``;

const ImportantInfoWrapper = styled.div``;

const TitleText = styled.p`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #012;
`;

const DescriptionText = styled.p`
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
    color:   ${(props) => (props.redcolor ? "#DE786D" : "#454843")};
`;

const TagsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const TagsItems = styled.span`
  margin-right: 1rem;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.416px; 
  letter-spacing: 0.24px;
  color: #3E46B6;
  padding: 2px 7px;
  border-radius: 10000px;
  background-color: #DADDFB;
`;

const BlueTextContainer = styled.span``;

const BlueText = styled.p`
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;

    letter-spacing: 0.3px;
    color: #65BAF4;
`;

export {
    ModalOverlay,
    ModalContent,
    ModalTitleContainer,
    ModalTitle,
    ModalDescription,
    ModalButtons,
    ModalButtonWrapper,
    ModalButton,
    CloseIcon,
    InfoIcon,
    CloseIconContainer,
    CheckMarkIconContainer,
    RequestInfoContainer,
    MusicDetailsWrapper,
    RecordTitle,
    DeadlineText,
    ProfileContainer,
    InnerWrapper,
    ProfilePicture,
    BigText,
    SmallText,
    BottomContainer,
    RequestDetailsWrapper,
    MusicRefWrapper,
    ImportantInfoWrapper,
    TitleText,
    DescriptionText,
    TagsWrapper,
    TagsItems,
    BlueTextContainer,
    BlueText
}