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
    FormContainer,
    FormLabel,
    FormInput,
    LoginButtonContainer,
    LoginButton,
    FooterText
} from "./resetpassword.styles";
import TheLink from "@/components/TheLink";

export default function ResetPassword() {

  return (
   <LoginContainer>
    <MainContentWrapper>
        <HeaderContainer>
            <LogoContainer>
                <AppLogo />
            </LogoContainer>
            <TitleText>Reset Password</TitleText>
            <DescriptionText>Please enter your email address to reset your password</DescriptionText>
        </HeaderContainer>
        <FormContainer>
                <FormLabel resetmargin>Email Address</FormLabel>
                <FormInput type="text" placeholder="Enter your email address" $resetmarbottom/>
            <LoginButtonContainer>
                <LoginButton>SEND PASSWORD RESET LINK</LoginButton>
            </LoginButtonContainer>
            <TheLink to="/">
                <DescriptionTextButton>Back to Log In</DescriptionTextButton>
            </TheLink>
        </FormContainer>
        <FooterText>Copyright 2023, Razu All Rights Reserved.</FooterText>
    </MainContentWrapper>
   </LoginContainer>
  )
}
