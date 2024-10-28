import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
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
  padding: 10px;
  border-radius: 20px;
  width: 100%;
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

  button {
    margin-left: 1rem;
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
      width: 189px;
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
`;

const RequestInfoContainer = styled.div`
  padding: 10px 30px;
  border-radius: 20px;
  border-radius: 20px;
  background-color: #F2F2F2;
  margin-top: 1.5rem;
  width: 100%;
  padding-bottom: 2rem;
`;

const MusicDetailsWrapper = styled.div`
`;

const RecordTitle = styled.p`
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26.45px; 
    letter-spacing: 0.5px;
    color: #012;
    width: 68%;
    @media screen and (max-width: 20em){
        font-size: 12px;
    }
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
    width: 50px;
    height: 50px;
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

const RequestDetailsWrapper = styled.div`
    @media screen and (max-width: 20em){
        margin-left: -1rem;
    }
`;

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

const BackContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const BackText = styled.p`
    padding-left: 0.6rem;
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
    colorr: #012;
    cursor: pointer;
`;

const BackIcon = styled.img.attrs({
    src: "/assets/back.png",
    alt: "Back icon",
    })`
    height: 1rem;
`;
const MainContainer = styled.div`
    flex-direction: column;
    width: 100%;
    max-height: 100vh;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;;
    margin-top: 2.5rem;
`;

const PhotoWrapperContainer = styled.div`
    display: flex;
    justify-content: space-between;
;
`
const PhotoWrapper = styled.div`
   
`;

const AvatarPhotoe = styled.div`
    background-image: url("/assets/musician.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 80px;
    height: 120px;
    border-radius: 150px;
    background-color: #F9F9F9;
`;

const ProfileItemsContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ArtistName = styled.p`
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.4px;
    color: #012;
`;

const ArtistSkills = styled.p`
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #012;
    margin-top: -0.8rem;
`;

const HeadingTitle = styled.p`
    font-family: Poppins;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 40.45px; 
    letter-spacing: 0.5px;
    color: #012;
`;

const DownloadIcon = styled.img.attrs({
    src: "/assets/download-new.png",
    alt: "download icon",
    })`
    height: 1.5rem;
    margin-left: 0.9rem;
`;

const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    @media screen and (max-width: 48em){
        flex-direction: column;
        align-items: stretch;
    }
     @media screen and (max-width: 26.5625em){
        flex-direction: column;
        margin-bottom: 0rem;
        marrgin-top: -1rem;
    }
`;

const InnerContainer = styled.span`
    display: flex;
    flex: 1;
    align-items: center;
    margin-right: 2.5rem;
    @media screen and (max-width: 48em){
        margin-right: 0rem;
        margin-bottom: 1rem;
    }
     @media screen and (max-width: 26.5625em){
      margin-bottom: 1rem;
      width: 100%;
    }
`;

const SubmissionButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 245px;
    height: 2.8rem;
    padding: 15px 35px;
    border-radius: 100px;
    border: ${(props) => (props.artistborder ? "1px solid #DE786D" : "none")};
    background-color:  ${(props) => (props.artistbutton ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    text-align: center;
    @media (max-width: 48em) {
      width: 189px;
  }
  @media screen and (max-width: 26.5625em){
    margin 2rem 0rem;
    width: 144px;
    padding: 15px 13px;
  }
`;

const SubmissionButtons = styled.div`
  display: flex;
  justify-content: space-between;;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 48em){
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 23.4375em){
    margin: 1rem -1rem;
  }
  @media screen and (max-width: 20em){
    margin: 2rem -2rem;
  }
`;

const SubmissionButton = styled.p`
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.652px;
  color:  ${(props) => (props.artistcolor ? "#DE786D" : "#ffffff")};
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
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
    BlueText,
    BackContainer,
    BackText,
    BackIcon,
    MainContainer,
    PhotoWrapperContainer,
    PhotoWrapper,
    AvatarPhotoe,
    ProfileItemsContainer,
    ArtistName,
    ArtistSkills,
    HeadingTitle,
    DownloadIcon,
    OuterContainer,
    InnerContainer,
    SubmissionButtonWrapper,
    SubmissionButtons,
    SubmissionButton,
}