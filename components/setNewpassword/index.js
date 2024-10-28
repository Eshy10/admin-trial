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
    InputWrapper,
    FormLabel,
    FormInput,
    OutLineEyeContainer,
    LoginButtonContainer,
    LoginButton,
    FooterText
} from "./newpassword.styles";

export default function CreateNewPassword() {

  return (
   <LoginContainer>
    <MainContentWrapper>
        <HeaderContainer>
            <LogoContainer>
                <AppLogo />
            </LogoContainer>
            <TitleText>Create a New Password</TitleText>
            <DescriptionText width>Your email has been successfully verified! Please create a new password for your Razu account.</DescriptionText>
        </HeaderContainer>
        <FormContainer>
                <FormLabel>Password</FormLabel>
                <InputWrapper newmargin>
                    <FormInput type="password" placeholder="Create a new password"/>
                    <OutLineEyeContainer>
                        <AiOutlineEye />
                    </OutLineEyeContainer>
                </InputWrapper>
                <FormLabel>Confirm Password</FormLabel>
                <InputWrapper>
                    <FormInput type="password" placeholder="Confirm your new password"/>
                    <OutLineEyeContainer>
                        <AiOutlineEye />
                    </OutLineEyeContainer>
                </InputWrapper>
                {/* <DescriptionTextButton top bottom left>Back to Log In</DescriptionTextButton> */}
            <LoginButtonContainer>
                <LoginButton>LOGIN</LoginButton>
            </LoginButtonContainer>
        </FormContainer>
        <FooterText>Copyright 2023, Razu All Rights Reserved.</FooterText>
    </MainContentWrapper>
   </LoginContainer>
  )
}
