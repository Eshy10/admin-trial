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
} from "./login.styles";
import TheLink from "@/components/TheLink";

export default function Login() {

  return (
    <LoginContainer>
        <MainContentWrapper>
            <HeaderContainer>
                <LogoContainer>
                    <AppLogo />
                </LogoContainer>
                <TitleText>Log In</TitleText>
                <DescriptionText>Log in to start using your Razu admin account</DescriptionText>
            </HeaderContainer>
            <FormContainer>
                    <FormLabel>Email Address</FormLabel>
                    <FormInput type="text" placeholder="Enter your email address"/>
                    <FormLabel>Password</FormLabel>
                    <InputWrapper>
                        <FormInput type="password" placeholder="Enter your password"/>
                        <OutLineEyeContainer>
                            <AiOutlineEye />
                        </OutLineEyeContainer>
                    </InputWrapper>
                <FormBottom>
                    <StayLoggedInWrapper>
                        <CheckboxInput type="checkbox"/>
                        <StayLoggedInText>Keep me logged in</StayLoggedInText>
                    </StayLoggedInWrapper>
                    <TheLink to="/resetpassword">
                        <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
                    </TheLink>
                </FormBottom>
                <LoginButtonContainer>
                    <LoginButton>LOG IN</LoginButton>
                </LoginButtonContainer>
            </FormContainer>
            <FooterText>Copyright 2023, Razu All Rights Reserved.</FooterText>
        </MainContentWrapper>
    </LoginContainer>
  )
}
