import styled from 'styled-components';

const ModalContent = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  @media screen and (max-width: 64em){
        width: 100%;
 }

`;

const RequestInfoContainer = styled.div`
  padding: 10px 30px;
  border-radius: 20px;
  border-radius: 20px 20px 0px 0px;
  background-color: #F2F2F2;
  margin-top: 1.5rem;
  width: 92%;
 @media screen and (max-width: 64em){
        width: 100%;
 }
 @media screen and (max-width: 48em){
      
 }
 @media screen and (max-width: 26.5625em){
      
 }
  @media screen and (max-width: 23.4375em){
        
 }
  @media screen and (max-width: 20em){
       
 }
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
    ModalContent,
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