import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #3e46b6;
  overflow-x: hidden
`;

const LogoContainer = styled.div`

`;

const AppLogo = styled.img.attrs({
  src: "/assets/Logo.png",
  alt: "Razu logo",
})`
  height: 2rem;
`;

const MainContentWrapper = styled.div`
    width: 40%;
    max-height: 85vh;
    overflow: auto;
    box-shadow: 0 10px 60px 0 rgba(62, 70, 182, 0.05);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 1.3128rem 0.6rem 1.95rem 0.6378rem;

    @media (max-width: 64em) {
        width: 57%;
    }
    @media (max-width: 48em) {
        width: 93%;
    }
    `;
    

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleText = styled.h3`
    font-size: 20px;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0.7px;
    color: #012;
    @media (max-width: 48em) {
        font-size: 16px;
    }
`;

const DescriptionText = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.3px;
    text-align: center;
    color: #454843;
    margin-top: -0.2rem;
    width: ${(props) => (props.Width ? "31rem" : "")};
    @media (max-width: 26.5625em) {
        width:  ${(props) => (props.Width ? "25rem" : "")};
    }
    @media (max-width: 23.4375em) {
        width:  ${(props) => (props.Width ? "19rem" : "")};
    }
    @media (max-width: 20em) {
        width:  ${(props) => (props.Width ? "17rem" : "")};
        font-size: 14px;
    }
`;

const DescriptionTextButton = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.3px;
    text-align:  ${(props) => (props.left ? "left" : "center")};
    color: #454843;
    margin-top: ${(props) => (props.top ? "1.5rem" : "2rem")};
    margin-bottom: ${(props) => (props.bottom ? "2rem" : "")};
    cursor: pointer;
    @media (max-width: 20em) {
        font-size: 14px;
    }
`;

const ResetLinkTextButton = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.3px;
    text-align: center;
    color: #454843;
    margin-top: 2rem;
    cursor: pointer;
    @media (max-width: 20em) {
        font-size: 14px;
    }
`;


const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 2rem;  
    @media screen and (max-width: 26.5625em){
        padding: 0rem;   
    }
    @media (max-width: 20em) {
        padding-left: 10px;
        padding-right: 6px;
    }
`;

const InputWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   margin-bottom:  ${(props) => (props.newMargin ? "0.5rem" : "")};
`;

const FormLabel = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.3px;
    color: #454843;
    margin-top:  ${(props) => (props.resetMargin ? "-0.7rem" : "")};

    @media (max-width: 20em) {
        font-size: 12px;
    }
`;

const FormInput = styled.input`
    width: 100%;
    padding: 0.7rem;
    border-radius: 10px;
    border: solid 1px #AAACA6;
    background-color: #fff;
    font-size: 13px;
    color: #484848;
    margin-bottom:  ${(props) => (props.$resetMarBottom ? "2.5rem" : "")};

    &:focus {
        outline: none;
      }
    &::placeholder {
        font-family: Poppins, sans-serif;    
        font-size: 13px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #484848;

      @media (max-width: 20em) {
        font-size: 12px;
      }
    }
`;

const OutLineEyeContainer = styled.span`
    display: flex;
    align-items: center;
    margin-left: -2rem;
`;

const FormBottom = styled.div`
    display: flex;
    justify-content: space-between;;
    width: 95%;
    @media screen and (max-width: 26.5625em){
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
    }
`;

const StayLoggedInWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    @media screen and (max-width: 26.5625em){
        margin-bottom: 0;
    }
`;

const StayLoggedInText = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.3px;
    text-align: center;
    color: #454843;
    margin-left: 8px;

    @media (max-width: 20em) {
        font-size: 12px;
    }
`;

const CheckboxInput = styled.input`
    margin-right: 8px;
`;

const ForgotPasswordText = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.3px;
    text-align: center;
    color: #454843;
    cursor: pointer;
     @media screen and (max-width: 26.5625em){
        margin-top: -0.1rem;
    }
    @media (max-width: 20em) {
        font-size: 12px;
    }
`;

const LoginButtonContainer = styled.div`
   margin: 0 auto;
   width: 100%;
   @media (max-width: 48em) {
    width: 98%;
    margin-left: 1px;
    }
    @media (max-width: 26.5625em) {
        width: 100%;
        padding-left: 2px;
        padding-bottom: 1rem;
    }
    @media (max-width: 23.4375em) {
        width: 100%;
        padding-left: 4px;
    }
    @media (max-width: 20em) {
        width: 100%;
        padding-left: 5px;
    }
`;

const LoginButton = styled.button`
   font-family: Poppins, sans-serif; 
   font-size: 11px;
   width: 100%;
   border-radius: 100px;
   padding: 0.7rem;
   background-color: #3e46b6;
   color: #ffffff;
   border: none;

   @media (max-width: 20em) {
    font-size: 12px;
  }

`;
const FooterTextContainer = styled.div`

`;

const FooterText = styled.div`
    font-family: Poppins, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.3px;
    text-align: center;
    color: #454843;
     @media (max-width: 26.5625em) {
        text-align: center;
         font-size: 14px;
     }
     @media (max-width: 20em) {
        font-size: 14px;
    }
`;

export { 
    LoginContainer,
    LogoContainer,
    AppLogo,
    MainContentWrapper,
    HeaderContainer,
    TitleText,
    DescriptionText,
    DescriptionTextButton,
    ResetLinkTextButton,
    FormContainer,
    InputWrapper,
    FormLabel,
    FormInput,
    OutLineEyeContainer,
    FormBottom,
    StayLoggedInWrapper,
    StayLoggedInText,
    CheckboxInput,
    ForgotPasswordText,
    LoginButtonContainer,
    LoginButton,
    FooterText
};
