import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import {
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
    LoginButtonContainer,
    LoginButton,
    FooterText
} from "./passwordresetlink.styles";

export default function PasswordResetLink() {

  return (
   <LoginContainer>
    <MainContentWrapper>
        <HeaderContainer>
            <LogoContainer>
                <AppLogo />
            </LogoContainer>
            <TitleText>Password Reset Link Sent!</TitleText>
            <DescriptionText>A password reset link has been sent to your email address</DescriptionText>
        </HeaderContainer>
        <ResetLinkTextButton>Didn’t receive a link?</ResetLinkTextButton>
        <FormContainer>
            <LoginButtonContainer>
                <LoginButton>RESEND PASSWORD RESET LINK</LoginButton>
            </LoginButtonContainer>
            <DescriptionTextButton>Back to Log In</DescriptionTextButton>
        </FormContainer>
        <FooterText>Copyright 2023, Razu All Rights Reserved.</FooterText>
    </MainContentWrapper>
   </LoginContainer>
  )
}
