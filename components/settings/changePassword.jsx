import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
    MainBar,
    Heading,
    Form,
    FormGroup,
    FormLabel,
    FormItem,
    ActionBar,
    SubmitButton,
    ForgotPasswordButton
} from "./settings.styles";

const defaultDetails = {
    oldPassword: '',
    newPassword: ''
}

const PasswordComponent = ({ placeholder, changeHandler, value }) => {
    const [showPassword, setShow] = useState(false)
    const togglePasswordVisibility = () => {
        setShow((showPassword) => !showPassword);
    };
    return (
        <div style={{ position: 'relative' }}>
            <FormItem type={showPassword ? 'text' : 'password'} placeholder={placeholder} onChange={changeHandler} value={value} />
            {showPassword ? (
                <AiOutlineEyeInvisible size={20} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} onClick={togglePasswordVisibility} />
            ) : (
                <AiOutlineEye size={20} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} onClick={togglePasswordVisibility} />
            )}
        </div>
    )
}

export default function InformationComponent() {
    const [formDetails, setDetails] = useState(defaultDetails)
    const [confirmPassword, setPassword] = useState('')

    const handleChange = (key, value) => {
        const newDetails = { ...formDetails, [key]: value }
        setDetails(newDetails)
    }

    return (
        <>
            <MainBar>
                <Heading>Change Password</Heading>
                <Form>
                    <FormGroup>
                        <FormLabel>Old Password</FormLabel>
                        <PasswordComponent
                            placeholder='Enter Old Password'
                            changeHandler={(e) => handleChange('oldPassword', e.target.value)}
                            value={formDetails.oldPassword}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>New Password</FormLabel>
                        <PasswordComponent
                            placeholder='Create New Password'
                            changeHandler={(e) => handleChange('newPassword', e.target.value)}
                            value={formDetails.newPassword}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <PasswordComponent
                            placeholder='Confirm New Password'
                            changeHandler={(e) => setPassword(e.target.value)}
                            value={confirmPassword}
                        />
                    </FormGroup>
                </Form>
            </MainBar>
            <ActionBar>
                <SubmitButton>Save Password Changes</SubmitButton>
                <ForgotPasswordButton>Forgot Password</ForgotPasswordButton>
            </ActionBar>
        </>
    )
}
