import React, { useState, useRef } from "react";

import {
    MainBar,
    Heading,
    Form,
    FormGroup,
    FormLabel,
    FormItem,
    PictureContainer,
    DisplayPicture,
    PictureLabel,
    UploadImage,
    ActionBar,
    SubmitButton,
    DeactivateButton
} from "./settings.styles";

const defaultDetails = {
    firstName: 'James',
    lastName: 'Arthur',
    email: 'james@razu.io',
    profileImage: '/static/displayPicture.jpeg',
    profileImageFile: null,
}

export default function InformationComponent() {
    const [formDetails, setDetails] = useState(defaultDetails)
    const handleChange = (key, value) => {
        const newDetails = { ...formDetails, [key]: value }
        setDetails(newDetails)
    }

    const fileInputRef = useRef(null);
    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            formDetails['profileImageFile'] = imageFile;
            handleChange('profileImage', imageUrl);
        }
    };
    const handleLabelClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <MainBar>
                <Heading>Personal Information</Heading>
                <Form>
                    <FormGroup $gap='10px'>
                        <PictureContainer>
                            <DisplayPicture src={formDetails.profileImage} />
                        </PictureContainer>
                        <PictureLabel onClick={handleLabelClick}>
                            Change Picture
                        </PictureLabel>
                        <UploadImage
                            id="uploadInput"
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            ref={fileInputRef}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>First Name</FormLabel>
                        <FormItem placeholder='Enter First Name' onChange={(e) => handleChange('firstName', e.target.value)} value={formDetails.firstName} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Last Name</FormLabel>
                        <FormItem placeholder='Enter Last Name' onChange={(e) => handleChange('lastName', e.target.value)} value={formDetails.lastName} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email Address</FormLabel>
                        <FormItem placeholder='Enter Email Address' onChange={(e) => handleChange('email', e.target.value)} value={formDetails.email} />
                    </FormGroup>
                </Form>
            </MainBar>
            <ActionBar>
                <SubmitButton>Save Profile Changes</SubmitButton>
                <DeactivateButton>Deactivate Account</DeactivateButton>
            </ActionBar>
        </>
    )
}
